// Markdown → HTML with KaTeX math.
//
// Deliberately small: the learning content is authored by us and uses a narrow
// subset of Markdown (paragraphs, headings, lists, bold/italic, inline code,
// blockquotes, tables, hr). Writing a small renderer avoids pulling in a full
// Markdown pipeline plus its sanitizer while keeping math handling explicit.
//
// Math is extracted BEFORE Markdown parsing so that underscores/asterisks inside
// formulas can never be mistaken for emphasis, then re-inserted as placeholders.

import katex from 'katex'

const MATH_TOKEN = '\u0000MATH'

interface MathSlot {
  html: string
  block: boolean
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function renderMath(tex: string, display: boolean): string {
  // LaTeX arrives already unescaped (content lives in TS string literals), so
  // nothing is rewritten here: a `\\` is a legitimate row separator inside
  // matrix environments and must be preserved verbatim.
  try {
    return katex.renderToString(tex, {
      displayMode: display,
      throwOnError: false,
      strict: false,
      trust: false,
      output: 'htmlAndMathml',
    })
  } catch {
    return `<code>${escapeHtml(tex)}</code>`
  }
}

/** Pull all $$...$$ and $...$ out of the text, leaving placeholders. */
function extractMath(src: string): { text: string; slots: MathSlot[] } {
  const slots: MathSlot[] = []
  let text = ''
  let i = 0

  while (i < src.length) {
    const ch = src[i]

    // escaped dollar
    if (ch === '\\' && src[i + 1] === '$') {
      text += '$'
      i += 2
      continue
    }

    if (ch === '$') {
      // display math
      if (src.startsWith('$$', i)) {
        const end = src.indexOf('$$', i + 2)
        if (end !== -1) {
          slots.push({ html: renderMath(src.slice(i + 2, end).trim(), true), block: true })
          text += `\n\n${MATH_TOKEN}${slots.length - 1}\n\n`
          i = end + 2
          continue
        }
      }
      // inline math: single $ ... $ on the same "run", non-empty, no newline
      const end = findInlineMathEnd(src, i + 1)
      if (end !== -1) {
        slots.push({ html: renderMath(src.slice(i + 1, end), false), block: false })
        text += `${MATH_TOKEN}${slots.length - 1}`
        i = end + 1
        continue
      }
    }

    text += ch
    i += 1
  }

  return { text, slots }
}

function findInlineMathEnd(src: string, from: number): number {
  for (let j = from; j < src.length; j++) {
    const c = src[j]
    if (c === '\n') return -1
    if (c === '\\') {
      j += 1
      continue
    }
    if (c === '$') {
      // "$5 and $6" style text should not become math: require content
      if (j === from) return -1
      return j
    }
  }
  return -1
}

function inlineFormat(s: string): string {
  let out = escapeHtml(s)
  // inline code first, so its contents are not further formatted
  const codes: string[] = []
  out = out.replace(/`([^`]+)`/g, (_m, code: string) => {
    codes.push(code)
    return `\u0001C${codes.length - 1}\u0001`
  })
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  out = out.replace(/(^|[\s(])\*([^*\n]+)\*/g, '$1<em>$2</em>')
  out = out.replace(/(^|[\s(])_([^_\n]+)_(?=[\s).,;:!?]|$)/g, '$1<em>$2</em>')
  out = out.replace(/\u0001C(\d+)\u0001/g, (_m, n: string) => `<code>${codes[Number(n)]}</code>`)
  return out
}

function splitRow(line: string): string[] {
  const t = line.trim().replace(/^\|/, '').replace(/\|$/, '')
  return t.split('|').map((c) => c.trim())
}

const TABLE_DIVIDER = /^\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?$/

export function renderMarkdown(src: string): string {
  const { text, slots } = extractMath(src)
  const lines = text.split('\n')
  const out: string[] = []
  let i = 0

  const flushParagraph = (buf: string[]) => {
    if (!buf.length) return
    out.push(`<p>${inlineFormat(buf.join(' '))}</p>`)
    buf.length = 0
  }

  const para: string[] = []

  while (i < lines.length) {
    const line = lines[i]
    const trimmed = line.trim()

    // blank
    if (!trimmed) {
      flushParagraph(para)
      i += 1
      continue
    }

    // display-math placeholder alone on its line
    const mathOnly = trimmed.match(new RegExp(`^${MATH_TOKEN}(\\d+)$`))
    if (mathOnly) {
      flushParagraph(para)
      const slot = slots[Number(mathOnly[1])]
      if (slot) out.push(slot.html)
      i += 1
      continue
    }

    // hr
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
      flushParagraph(para)
      out.push('<hr />')
      i += 1
      continue
    }

    // heading
    const h = trimmed.match(/^(#{1,4})\s+(.*)$/)
    if (h) {
      flushParagraph(para)
      const lvl = h[1].length
      out.push(`<h${lvl}>${inlineFormat(h[2])}</h${lvl}>`)
      i += 1
      continue
    }

    // blockquote
    if (trimmed.startsWith('>')) {
      flushParagraph(para)
      const buf: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        buf.push(lines[i].trim().replace(/^>\s?/, ''))
        i += 1
      }
      out.push(`<blockquote>${inlineFormat(buf.join(' '))}</blockquote>`)
      continue
    }

    // table
    if (
      trimmed.startsWith('|') &&
      i + 1 < lines.length &&
      TABLE_DIVIDER.test(lines[i + 1].trim())
    ) {
      flushParagraph(para)
      const head = splitRow(lines[i])
      i += 2
      const rows: string[][] = []
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        rows.push(splitRow(lines[i]))
        i += 1
      }
      let t = '<table><thead><tr>'
      for (const c of head) t += `<th>${inlineFormat(c)}</th>`
      t += '</tr></thead><tbody>'
      for (const r of rows) {
        t += '<tr>'
        for (const c of r) t += `<td>${inlineFormat(c)}</td>`
        t += '</tr>'
      }
      t += '</tbody></table>'
      out.push(t)
      continue
    }

    // unordered list
    if (/^[-*+]\s+/.test(trimmed)) {
      flushParagraph(para)
      const items: string[] = []
      while (i < lines.length && /^[-*+]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*+]\s+/, ''))
        i += 1
      }
      out.push(`<ul>${items.map((it) => `<li>${inlineFormat(it)}</li>`).join('')}</ul>`)
      continue
    }

    // ordered list
    if (/^\d+[.)]\s+/.test(trimmed)) {
      flushParagraph(para)
      const items: string[] = []
      while (i < lines.length && /^\d+[.)]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+[.)]\s+/, ''))
        i += 1
      }
      out.push(`<ol>${items.map((it) => `<li>${inlineFormat(it)}</li>`).join('')}</ol>`)
      continue
    }

    para.push(trimmed)
    i += 1
  }

  flushParagraph(para)

  // Re-insert any inline math slots left in the joined HTML.
  return out
    .join('\n')
    .replace(new RegExp(`${MATH_TOKEN}(\\d+)`, 'g'), (_m, n: string) => {
      const slot = slots[Number(n)]
      return slot ? slot.html : ''
    })
}

/** Strip math/markdown for use in plain-text contexts (titles, aria labels). */
export function plainText(src: string): string {
  return src
    .replace(/\$\$?([^$]*)\$\$?/g, (_m, tex: string) =>
      tex.replace(/\\[a-zA-Z]+|[{}]/g, '').trim(),
    )
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/[`>#]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}
