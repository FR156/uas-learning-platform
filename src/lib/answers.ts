// Exercise answer checking.
//
// Short answers are compared after normalisation so minor formatting
// differences (spaces, casing, LaTeX wrappers, Unicode vs ASCII maths,
// Indonesian decimal commas) do not punish a learner who answered correctly.

import type { Exercise } from '../types'

export function normaliseAnswer(s: string): string {
  return (
    s
      .toLowerCase()
      // LaTeX / markup noise
      .replace(/\$/g, '')
      .replace(/\\left|\\right|\\,|\\;|\\!|\\ /g, '')
      .replace(/[{}]/g, '')
      // Unicode maths -> ASCII, so "x ≥ 12" and "x >= 12" agree
      .replace(/[≥⩾]/g, '>=')
      .replace(/[≤⩽]/g, '<=')
      .replace(/[≠]/g, '!=')
      .replace(/[×⋅·]/g, '*')
      .replace(/[−–—]/g, '-')
      .replace(/÷/g, '/')
      // Indonesian decimal comma: 0,375 -> 0.375 (only between digits)
      .replace(/(\d),(\d)/g, '$1.$2')
      .replace(/\s+/g, '')
      .replace(/[.,;]+$/g, '')
      .trim()
  )
}

/**
 * Loose key for list answers: "I Q R", "I, Q, R" and "I,Q,R" are the same
 * answer to a human. Only used as a fallback, after the exact comparison.
 */
export function looseKey(s: string): string {
  return normaliseAnswer(s).replace(/,/g, '')
}

export function isCorrect(ex: Exercise, given: string): boolean {
  if (ex.type === 'short') {
    const accepted = Array.isArray(ex.answer) ? ex.answer : [ex.answer]
    const g = normaliseAnswer(given)
    if (!g) return false
    if (accepted.some((a) => normaliseAnswer(a) === g)) return true
    // Fallback: ignore list punctuation ("I Q R" vs "I, Q, R").
    const gl = looseKey(given)
    return gl.length > 1 && accepted.some((a) => looseKey(a) === gl)
  }
  const expected = Array.isArray(ex.answer) ? ex.answer[0] : ex.answer
  return given === expected
}

/** Human-readable rendering of an expected answer for the review UI. */
export function answerText(ex: Exercise): string {
  if (ex.type === 'short') {
    const accepted = Array.isArray(ex.answer) ? ex.answer : [ex.answer]
    return accepted.join(' / ')
  }
  if (ex.type === 'tf') {
    const expected = Array.isArray(ex.answer) ? ex.answer[0] : ex.answer
    return expected === 'true' ? 'Benar' : 'Salah'
  }
  const expected = Array.isArray(ex.answer) ? ex.answer[0] : ex.answer
  const choice = ex.choices?.find((c) => c.id === expected)
  return choice ? `${expected.toUpperCase()}. ${choice.md}` : expected
}
