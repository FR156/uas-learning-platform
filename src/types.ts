// Core content and progress types.

export type SectionKind =
  | 'goal' // Tujuan Unit
  | 'prereq' // Prasyarat Singkat
  | 'concept' // Penjelasan Konsep / numbered subsections
  | 'main' // Matematika Utama
  | 'why' // Mengapa / Interpretasi
  | 'example' // Worked Example
  | 'mistake' // Jangan Keliru
  | 'checkpoint' // Checkpoint
  | 'summary' // Ringkasan Unit
  | 'diagnosis' // Diagnosis Kesalahan
  | 'note' // Asal Rumus / Ide Inti / other framing
  | 'figure' // figure description or diagram caption

export interface Section {
  kind: SectionKind
  /** Optional heading override; when absent the UI derives one from `kind`. */
  title?: string
  /** Markdown with $...$ inline and $$...$$ display math. */
  md: string
}

export interface Unit {
  id: string
  number: number
  title: string
  /** 1-based page range inside the source PDF. */
  pageFrom: number
  pageTo: number
  sections: Section[]
}

export interface Module {
  id: string
  code: string
  title: string
  subtitle?: string
  pageFrom: number
  pageTo: number
  units: Unit[]
  /** Set when the source PDF itself is incomplete. */
  incomplete?: string
}

export type ExerciseType = 'mc' | 'tf' | 'short'
export type Difficulty = 'mudah' | 'sedang' | 'sulit'

/** Which exercises may legitimately claim to come straight from the source. */
export type Origin = 'source' | 'application'

export interface Choice {
  id: string
  md: string
}

export interface Exercise {
  id: string
  moduleId: string
  unitId: string
  type: ExerciseType
  difficulty: Difficulty
  origin: Origin
  prompt: string
  choices?: Choice[]
  /** Choice id for 'mc', 'true'/'false' for 'tf', accepted strings for 'short'. */
  answer: string | string[]
  explanation: string
  sourceRef: string
}

export type ExerciseStatus = 'correct' | 'incorrect'

export interface ExerciseAttempt {
  status: ExerciseStatus
  /** Answer the learner last submitted. */
  given: string
  at: number
}

export interface QuizRecord {
  id: string
  at: number
  moduleIds: string[]
  total: number
  correct: number
  durationMs: number
  timed: boolean
}

export interface Progress {
  version: number
  completedUnits: string[]
  attempts: Record<string, ExerciseAttempt>
  quizzes: QuizRecord[]
}
