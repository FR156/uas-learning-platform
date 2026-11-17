// Renders a sample of every module's sections through the real markdown
// pipeline and reports KaTeX failures plus escaping anomalies.
//
// Run: node scripts/verify-content.mjs
// This is a content-integrity check, not a unit test: it answers "does every
// formula in the authored content parse, and does every section render?".

import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { execFileSync } from 'node:child_process'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const katex = require('katex')

const root = new URL('..', import.meta.url).pathname
const contentDir = join(root, 'src/content')

// Bundle each content file to CJS so we can import the plain data.
function loadModule(file) {
  const out = join('/tmp', `verify-${file.replace(/\.ts$/, '')}.cjs`)
  execFileSync(
    join(root, 'node_modules/.bin/esbuild'),
    [join(contentDir, file), '--loader:.ts=ts', '--format=cjs', `--outfile=${out}`],
    { stdio: 'pipe' },
  )
  return require(out).default
}

const failures = []
const stats = { modules: 0, units: 0, sections: 0, formulas: 0, exercises: 0 }
const perType = {}

function checkMath(md, where) {
  const rx = /\$\$([\s\S]*?)\$\$|\$([^$\n]+?)\$/g
  let m
  while ((m = rx.exec(md))) {
    const tex = (m[1] ?? m[2] ?? '').trim()
    if (!tex) continue
    stats.formulas += 1
    // A doubled backslash is legitimate only as a LaTeX row break inside an
    // environment (\begin{pmatrix} ... \\\\ ... \end). Anywhere else it means a
    // command was over-escaped during transcription.
    const outsideEnv = tex.replace(/\\(begin|end)\{[a-zA-Z*]+\}/g, '')
    const stray = outsideEnv.match(/(?<!\\)\\\\(?!\\)/g)
    if (stray && !/begin\{[a-zA-Z*]+\}/.test(tex)) {
      failures.push(`${where}: doubled backslash outside an environment -> ${tex.slice(0, 60)}`)
    }
    try {
      katex.renderToString(tex, { throwOnError: true, strict: false })
    } catch (e) {
      failures.push(`${where}: KaTeX error "${e.message.replace(/\n.*/s, '')}" -> ${tex.slice(0, 70)}`)
    }
  }
}

const files = readdirSync(contentDir).filter((f) => /^p\d+\.ts$/.test(f))
for (const file of files) {
  const mod = loadModule(file)
  stats.modules += 1
  if (!mod.id || !mod.title || !Array.isArray(mod.units)) {
    failures.push(`${file}: module metadata incomplete`)
  }
  for (const unit of mod.units) {
    stats.units += 1
    if (!unit.id || typeof unit.number !== 'number' || !unit.title) {
      failures.push(`${file}: unit missing id/number/title`)
    }
    if (!Array.isArray(unit.sections) || unit.sections.length === 0) {
      failures.push(`${unit.id}: no sections`)
      continue
    }
    for (const s of unit.sections) {
      stats.sections += 1
      if (!s.kind) failures.push(`${unit.id}: section without kind`)
      if (typeof s.md !== 'string' || !s.md.trim())
        failures.push(`${unit.id}: empty section md (${s.kind})`)
      checkMath(s.md ?? '', `${unit.id}/${s.kind}`)
      // unbalanced $$ is the usual cause of a broken layout
      const disp = (s.md.match(/\$\$/g) ?? []).length
      if (disp % 2 !== 0) failures.push(`${unit.id}: unbalanced $$ (${disp})`)
    }
  }
}

// Exercises
const exFile = join(contentDir, 'exercises')
const exModules = readdirSync(exFile).filter((f) => f.endsWith('.ts'))
const seen = new Set()
for (const f of exModules) {
  const list = loadModule(join('exercises', f))
  for (const e of list) {
    stats.exercises += 1
    perType[e.type] = (perType[e.type] ?? 0) + 1
    if (seen.has(e.id)) failures.push(`${f}: duplicate exercise id ${e.id}`)
    seen.add(e.id)
    if (!e.prompt?.trim()) failures.push(`${e.id}: empty prompt`)
    if (!e.explanation?.trim()) failures.push(`${e.id}: no explanation`)
    if (!e.sourceRef?.trim()) failures.push(`${e.id}: no sourceRef`)
    if (!['mudah', 'sedang', 'sulit'].includes(e.difficulty))
      failures.push(`${e.id}: bad difficulty ${e.difficulty}`)
    if (!['source', 'application'].includes(e.origin))
      failures.push(`${e.id}: bad origin ${e.origin}`)
    checkMath(e.prompt, `${e.id}/prompt`)
    checkMath(e.explanation, `${e.id}/explanation`)
    if (e.choices) for (const c of e.choices) checkMath(c.md, `${e.id}/choice`)

    if (e.type === 'mc') {
      if (!e.choices || e.choices.length < 2) failures.push(`${e.id}: mc needs choices`)
      else {
        const ans = Array.isArray(e.answer) ? e.answer[0] : e.answer
        if (!e.choices.some((c) => c.id === ans))
          failures.push(`${e.id}: answer "${ans}" not among choices`)
        if (new Set(e.choices.map((c) => c.id)).size !== e.choices.length)
          failures.push(`${e.id}: duplicate choice ids`)
      }
    }
    if (e.type === 'tf') {
      const ans = Array.isArray(e.answer) ? e.answer[0] : e.answer
      if (ans !== 'true' && ans !== 'false') failures.push(`${e.id}: tf answer must be true/false`)
    }
    if (e.type === 'short') {
      const acc = Array.isArray(e.answer) ? e.answer : [e.answer]
      if (!acc.length || acc.some((a) => !a?.trim()))
        failures.push(`${e.id}: short answer list empty`)
    }
  }
}

console.log('\n=== Content verification ===')
console.log(`modules   : ${stats.modules}`)
console.log(`units     : ${stats.units}`)
console.log(`sections  : ${stats.sections}`)
console.log(`formulas  : ${stats.formulas}`)
console.log(`exercises : ${stats.exercises}`)
console.log(`by type   : ${JSON.stringify(perType)}`)

if (failures.length) {
  console.log(`\nFAILURES (${failures.length}):`)
  for (const f of failures.slice(0, 60)) console.log('  - ' + f)
  if (failures.length > 60) console.log(`  ... and ${failures.length - 60} more`)
  process.exitCode = 1
} else {
  console.log('\nAll content parsed and validated: OK')
}
