import { useState } from 'react'
import type { Exercise } from '../types'
import { Markdown } from './Markdown'
import { answerText, isCorrect } from '../lib/answers'
import { useProgress } from '../progress/ProgressContext'

const DIFF_LABEL: Record<string, string> = {
  mudah: 'Mudah',
  sedang: 'Sedang',
  sulit: 'Sulit',
}

interface Props {
  exercise: Exercise
  /** Show module/unit context chips (used in quiz mode). */
  showContext?: boolean
  moduleTitle?: string
  onAnswered?: (correct: boolean, given: string) => void
}

export function ExerciseCard({
  exercise,
  showContext = false,
  moduleTitle,
  onAnswered,
}: Props) {
  const { recordAttempt } = useProgress()
  const [picked, setPicked] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState<string | null>(null)
  const [shortValue, setShortValue] = useState('')

  const correct = submitted !== null ? isCorrect(exercise, submitted) : false

  function submit(value: string) {
    if (!value.trim() || submitted !== null) return
    setSubmitted(value)
    const ok = isCorrect(exercise, value)
    recordAttempt(exercise.id, {
      status: ok ? 'correct' : 'incorrect',
      given: value,
      at: Date.now(),
    })
    onAnswered?.(ok, value)
  }

  function retry() {
    setSubmitted(null)
    setPicked(null)
    setShortValue('')
  }

  const isMc = exercise.type === 'mc' && !!exercise.choices
  const isTf = exercise.type === 'tf'

  return (
    <article className="card exercise">
      <div className="exercise-meta">
        <span className={`chip ${exercise.origin === 'source' ? 'chip-accent' : ''}`}>
          {exercise.origin === 'source' ? 'Dari sumber' : 'Penerapan konsep'}
        </span>
        <span className="chip">{DIFF_LABEL[exercise.difficulty] ?? exercise.difficulty}</span>
        {showContext && moduleTitle && <span className="chip">{moduleTitle}</span>}
      </div>

      <div className="exercise-prompt">
        <Markdown md={exercise.prompt} className="prose" />
      </div>

      {isMc && (
        <ul className="choices">
          {exercise.choices!.map((c) => {
            const expected = Array.isArray(exercise.answer)
              ? exercise.answer[0]
              : exercise.answer
            let cls = 'choice'
            if (submitted === null) {
              if (picked === c.id) cls += ' is-picked'
            } else {
              if (c.id === expected) cls += ' is-right'
              else if (c.id === submitted) cls += ' is-wrong'
            }
            return (
              <li key={c.id}>
                <button
                  type="button"
                  className={cls}
                  disabled={submitted !== null}
                  aria-pressed={picked === c.id}
                  onClick={() => {
                    setPicked(c.id)
                    submit(c.id)
                  }}
                >
                  <span className="choice-key">{c.id.toUpperCase()}</span>
                  <span className="choice-body">
                    <Markdown md={c.md} className="prose" />
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      )}

      {isTf && (
        <div className="tf-row">
          {(['true', 'false'] as const).map((v) => {
            const expected = Array.isArray(exercise.answer)
              ? exercise.answer[0]
              : exercise.answer
            let cls = 'btn'
            if (submitted === null) {
              if (picked === v) cls += ' btn-primary'
            } else {
              if (v === expected) cls += ' btn-primary'
            }
            return (
              <button
                key={v}
                type="button"
                className={cls}
                disabled={submitted !== null}
                onClick={() => {
                  setPicked(v)
                  submit(v)
                }}
              >
                {v === 'true' ? 'Benar' : 'Salah'}
              </button>
            )
          })}
        </div>
      )}

      {exercise.type === 'short' && (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            submit(shortValue)
          }}
        >
          <label className="sr-only" htmlFor={`ans-${exercise.id}`}>
            Jawaban singkat
          </label>
          <input
            id={`ans-${exercise.id}`}
            className="short-input"
            value={shortValue}
            onChange={(e) => setShortValue(e.target.value)}
            placeholder="Tulis jawaban singkat…"
            disabled={submitted !== null}
            autoComplete="off"
          />
          {submitted === null && (
            <button type="submit" className="btn btn-primary btn-sm" disabled={!shortValue.trim()}>
              Periksa jawaban
            </button>
          )}
        </form>
      )}

      {submitted !== null && (
        <div className={`feedback ${correct ? 'feedback-ok' : 'feedback-bad'}`}>
          <div className="feedback-head">
            <span aria-hidden="true">{correct ? '✓' : '✕'}</span>
            <span>{correct ? 'Benar' : 'Belum tepat'}</span>
          </div>
          {!correct && (
            <div className="prose" style={{ marginBottom: '0.6em' }}>
              <p>
                <strong>Jawaban yang benar:</strong>{' '}
                <Markdown md={answerText(exercise)} className="" />
              </p>
            </div>
          )}
          <Markdown md={exercise.explanation} />
          <div className="srcref">Sumber: {exercise.sourceRef}</div>
          {!correct && (
            <div className="btn-row" style={{ marginTop: 12 }}>
              <button type="button" className="btn btn-sm" onClick={retry}>
                Coba lagi
              </button>
            </div>
          )}
        </div>
      )}
    </article>
  )
}
