// Quiz engine: selection, shuffling, scoring. Pure functions so they can be
// reasoned about and tested without a DOM.

import type { Exercise } from '../types'

export interface QuizConfig {
  moduleIds: string[]
  count: number
  minutes: number | null
}

/** Fisher–Yates, seeded by Math.random (client-only, no reproducibility needed). */
function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function pickQuestions(pool: Exercise[], count: number): Exercise[] {
  const shuffled = shuffle(pool)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

/**
 * Spreads the selection across modules so a quiz never comes back
 * single-topic when several modules were chosen.
 */
export function pickBalanced(
  pool: Exercise[],
  count: number,
  moduleIds: string[],
): Exercise[] {
  if (moduleIds.length <= 1) return pickQuestions(pool, count)

  const buckets = new Map<string, Exercise[]>()
  for (const e of pool) {
    const arr = buckets.get(e.moduleId) ?? []
    arr.push(e)
    buckets.set(e.moduleId, arr)
  }

  const perModule = Math.ceil(count / buckets.size)
  const picked: Exercise[] = []
  for (const arr of buckets.values()) {
    picked.push(...pickQuestions(arr, perModule))
  }
  if (picked.length > count) {
    return shuffle(picked).slice(0, count)
  }
  // top up from the leftovers if some modules were short
  const used = new Set(picked.map((e) => e.id))
  const rest = pool.filter((e) => !used.has(e.id))
  return shuffle([...picked, ...pickQuestions(rest, count - picked.length)])
}

export interface QuizState {
  questions: Exercise[]
  answers: Record<string, string>
  startedAt: number
  deadline: number | null
}

export interface QuizResult {
  total: number
  correct: number
  perModule: { moduleId: string; correct: number; total: number }[]
}

export function scoreQuiz(
  questions: Exercise[],
  answers: Record<string, string>,
  check: (ex: Exercise, given: string) => boolean,
): QuizResult {
  let correct = 0
  const perModuleMap = new Map<string, { correct: number; total: number }>()

  for (const q of questions) {
    const given = answers[q.id]
    const ok = given !== undefined && check(q, given)
    if (ok) correct += 1
    const bucket = perModuleMap.get(q.moduleId) ?? { correct: 0, total: 0 }
    bucket.total += 1
    if (ok) bucket.correct += 1
    perModuleMap.set(q.moduleId, bucket)
  }

  return {
    total: questions.length,
    correct,
    perModule: [...perModuleMap.entries()].map(([moduleId, v]) => ({
      moduleId,
      ...v,
    })),
  }
}

export function formatClock(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000))
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${m}:${String(s).padStart(2, '0')}`
}
