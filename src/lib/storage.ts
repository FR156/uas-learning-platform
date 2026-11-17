// localStorage-backed progress store.
//
// Design notes:
// - One key holds everything, written as a versioned JSON blob.
// - Reads never throw: corrupt/partial/foreign data falls back to a clean
//   default so a bad blob cannot brick the app.
// - Writes are debounced by the caller (see ProgressContext) and also guarded
//   against quota errors.

import type { Progress, ExerciseAttempt, QuizRecord } from '../types'

export const STORAGE_KEY = 'mdas.progress.v1'
export const THEME_KEY = 'mdas.theme'
const VERSION = 1

export function emptyProgress(): Progress {
  return { version: VERSION, completedUnits: [], attempts: {}, quizzes: [] }
}

/** Structural check used before trusting anything read from storage. */
function isProgress(v: unknown): v is Progress {
  if (!v || typeof v !== 'object') return false
  const p = v as Record<string, unknown>
  if (p.version !== VERSION) return false
  if (!Array.isArray(p.completedUnits)) return false
  if (!p.attempts || typeof p.attempts !== 'object') return false
  if (!Array.isArray(p.quizzes)) return false
  // element-level sanity: drop junk rather than rejecting the whole blob
  return true
}

export function loadProgress(): Progress {
  let raw: string | null = null
  try {
    raw = localStorage.getItem(STORAGE_KEY)
  } catch {
    return emptyProgress()
  }
  if (!raw) return emptyProgress()

  let parsed: unknown
  try {
    parsed = JSON.parse(raw)
  } catch {
    return emptyProgress()
  }
  if (!isProgress(parsed)) return emptyProgress()

  // Sanitise contents so a partially-corrupt blob still loads.
  const p = parsed as Progress
  const completedUnits = p.completedUnits.filter(
    (u): u is string => typeof u === 'string',
  )
  const attempts: Record<string, ExerciseAttempt> = {}
  for (const [k, v] of Object.entries(p.attempts)) {
    if (
      v &&
      typeof v === 'object' &&
      (v.status === 'correct' || v.status === 'incorrect') &&
      typeof v.given === 'string' &&
      typeof v.at === 'number'
    ) {
      attempts[k] = v
    }
  }
  const quizzes = p.quizzes.filter(
    (q): q is QuizRecord =>
      !!q &&
      typeof q === 'object' &&
      typeof q.id === 'string' &&
      typeof q.at === 'number' &&
      typeof q.total === 'number' &&
      typeof q.correct === 'number',
  )

  return { version: VERSION, completedUnits, attempts, quizzes }
}

export function saveProgress(p: Progress): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p))
    return true
  } catch {
    // Quota exceeded or storage disabled — progress stays in memory only.
    return false
  }
}

export function clearProgress(): void {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    /* ignore */
  }
}

export function loadTheme(): 'light' | 'dark' | null {
  try {
    const t = localStorage.getItem(THEME_KEY)
    if (t === 'light' || t === 'dark') return t
  } catch {
    /* ignore */
  }
  return null
}

export function saveTheme(t: 'light' | 'dark'): void {
  try {
    localStorage.setItem(THEME_KEY, t)
  } catch {
    /* ignore */
  }
}
