// Progress context: single source of truth for learner state.
//
// All reads/writes go through here so components never touch localStorage
// directly. Persistence is debounced (80 ms) to coalesce bursts of writes.

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import type { ExerciseAttempt, Progress, QuizRecord } from '../types'
import {
  clearProgress,
  emptyProgress,
  loadProgress,
  saveProgress,
} from '../lib/storage'

interface ProgressApi {
  progress: Progress
  isComplete: (unitId: string) => boolean
  toggleComplete: (unitId: string) => void
  setComplete: (unitId: string, done: boolean) => void
  recordAttempt: (exerciseId: string, attempt: ExerciseAttempt) => void
  recordQuiz: (rec: Omit<QuizRecord, 'id' | 'at'>) => void
  resetAll: () => void
  storageOk: boolean
}

const Ctx = createContext<ProgressApi | null>(null)

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<Progress>(() => loadProgress())
  const [storageOk, setStorageOk] = useState(true)
  const timer = useRef<number | undefined>(undefined)

  // Debounced persistence.
  useEffect(() => {
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => {
      const ok = saveProgress(progress)
      setStorageOk(ok)
    }, 80)
    return () => window.clearTimeout(timer.current)
  }, [progress])

  const isComplete = useCallback(
    (unitId: string) => progress.completedUnits.includes(unitId),
    [progress.completedUnits],
  )

  const setComplete = useCallback((unitId: string, done: boolean) => {
    setProgress((p) => {
      const has = p.completedUnits.includes(unitId)
      if (done === has) return p
      return {
        ...p,
        completedUnits: done
          ? [...p.completedUnits, unitId]
          : p.completedUnits.filter((u) => u !== unitId),
      }
    })
  }, [])

  const toggleComplete = useCallback((unitId: string) => {
    setProgress((p) => {
      const has = p.completedUnits.includes(unitId)
      return {
        ...p,
        completedUnits: has
          ? p.completedUnits.filter((u) => u !== unitId)
          : [...p.completedUnits, unitId],
      }
    })
  }, [])

  const recordAttempt = useCallback(
    (exerciseId: string, attempt: ExerciseAttempt) => {
      setProgress((p) => ({
        ...p,
        attempts: { ...p.attempts, [exerciseId]: attempt },
      }))
    },
    [],
  )

  const recordQuiz = useCallback((rec: Omit<QuizRecord, 'id' | 'at'>) => {
    setProgress((p) => ({
      ...p,
      quizzes: [
        {
          ...rec,
          id: `q_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
          at: Date.now(),
        },
        ...p.quizzes,
      ].slice(0, 100),
    }))
  }, [])

  const resetAll = useCallback(() => {
    clearProgress()
    setProgress(emptyProgress())
  }, [])

  const value = useMemo(
    () => ({
      progress,
      isComplete,
      toggleComplete,
      setComplete,
      recordAttempt,
      recordQuiz,
      resetAll,
      storageOk,
    }),
    [
      progress,
      isComplete,
      toggleComplete,
      setComplete,
      recordAttempt,
      recordQuiz,
      resetAll,
      storageOk,
    ],
  )

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useProgress(): ProgressApi {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider')
  return ctx
}
