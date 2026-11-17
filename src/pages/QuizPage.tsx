import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { allExercises, modules } from '../content'
import { pickBalanced, formatClock } from '../lib/quiz'
import { isCorrect, answerText } from '../lib/answers'
import { Markdown } from '../components/Markdown'
import { useProgress } from '../progress/ProgressContext'
import type { Exercise } from '../types'

type Phase = 'setup' | 'run' | 'result'

const COUNT_OPTIONS = [10, 15, 20, 30]
const TIME_OPTIONS: { label: string; value: number | null }[] = [
  { label: 'Tanpa batas', value: null },
  { label: '5 menit', value: 5 },
  { label: '10 menit', value: 10 },
  { label: '20 menit', value: 20 },
]

export function QuizPage() {
  const { recordQuiz } = useProgress()
  const [phase, setPhase] = useState<Phase>('setup')

  const [selectedModules, setSelectedModules] = useState<string[]>(
    modules.map((m) => m.id),
  )
  const [count, setCount] = useState(15)
  const [minutes, setMinutes] = useState<number | null>(10)

  const [questions, setQuestions] = useState<Exercise[]>([])
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [current, setCurrent] = useState(0)
  const [startedAt, setStartedAt] = useState(0)
  const [deadline, setDeadline] = useState<number | null>(null)
  const [now, setNow] = useState(Date.now())

  const pool = useMemo(
    () => allExercises.filter((e) => selectedModules.includes(e.moduleId)),
    [selectedModules],
  )

  const availableFont = pool.length

  // tick for the countdown
  useEffect(() => {
    if (phase !== 'run' || deadline === null) return
    const id = window.setInterval(() => setNow(Date.now()), 500)
    return () => window.clearInterval(id)
  }, [phase, deadline])

  // auto-finish on timeout
  useEffect(() => {
    if (phase !== 'run' || deadline === null) return
    if (now >= deadline) finish()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [now, deadline, phase])

  function start() {
    const qs = pickBalanced(pool, count, selectedModules)
    setQuestions(qs)
    setAnswers({})
    setCurrent(0)
    const t = Date.now()
    setStartedAt(t)
    setDeadline(minutes === null ? null : t + minutes * 60_000)
    setNow(t)
    setPhase('run')
    window.scrollTo({ top: 0 })
  }

  function finish() {
    // Record exactly once, then switch to the result view. Guarded so that a
    // timeout followed by a manual "Selesai" click cannot double-count.
    if (phase === 'run' && questions.length > 0) {
      const correct = questions.filter((q) => {
        const a = answers[q.id]
        return a !== undefined && isCorrect(q, a)
      }).length
      recordQuiz({
        moduleIds: selectedModules,
        total: questions.length,
        correct,
        durationMs: Date.now() - startedAt,
        timed: minutes !== null,
      })
    }
    setPhase('result')
  }

  function toggleModule(id: string) {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    )
  }

  // ---------------------------------------------------------------- setup view
  if (phase === 'setup') {
    return (
      <div className="page-narrow" style={{ margin: '0 auto' }}>
        <nav className="small muted" style={{ marginBottom: 12 }}>
          <Link to="/">Dasbor</Link> / Kuis
        </nav>
        <h1>Mode kuis</h1>
        <p className="lede" style={{ marginBottom: 22 }}>
          Simulasi ujian: soal diacak dari modul pilihan, dengan skor dan pembahasan
          di akhir. Tidak masuk nilai resmi.
        </p>

        <div className="card card-pad" style={{ marginBottom: 14 }}>
          <h2 style={{ fontSize: '1.02rem', marginBottom: 12 }}>Pilih modul</h2>
          <div className="btn-row" style={{ marginBottom: 10 }}>
            <button
              type="button"
              className="btn btn-sm"
              onClick={() => setSelectedModules(modules.map((m) => m.id))}
            >
              Pilih semua
            </button>
            <button
              type="button"
              className="btn btn-sm btn-ghost"
              onClick={() => setSelectedModules([])}
            >
              Kosongkan
            </button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {modules.map((m) => {
              const on = selectedModules.includes(m.id)
              const n = allExercises.filter((e) => e.moduleId === m.id).length
              return (
                <button
                  key={m.id}
                  type="button"
                  className={`btn btn-sm ${on ? 'btn-primary' : ''}`}
                  onClick={() => toggleModule(m.id)}
                  aria-pressed={on}
                  disabled={n === 0}
                  title={n === 0 ? 'Belum ada soal untuk modul ini' : `${n} soal`}
                >
                  {m.code}
                  <span style={{ opacity: 0.7, fontSize: 11 }}>{n}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="grid grid-2" style={{ marginBottom: 14 }}>
          <div className="card card-pad">
            <h2 style={{ fontSize: '1.02rem', marginBottom: 10 }}>Jumlah soal</h2>
            <div className="btn-row">
              {COUNT_OPTIONS.map((n) => (
                <button
                  key={n}
                  type="button"
                  className={`btn btn-sm ${count === n ? 'btn-primary' : ''}`}
                  onClick={() => setCount(n)}
                  aria-pressed={count === n}
                >
                  {n}
                </button>
              ))}
            </div>
            <p className="small muted" style={{ marginBottom: 0, marginTop: 10 }}>
              Tersedia {availableFont} soal dari modul terpilih. Jika kurang, kuis
              memakai semua yang ada.
            </p>
          </div>

          <div className="card card-pad">
            <h2 style={{ fontSize: '1.02rem', marginBottom: 10 }}>Batas waktu</h2>
            <div className="btn-row">
              {TIME_OPTIONS.map((o) => (
                <button
                  key={String(o.value)}
                  type="button"
                  className={`btn btn-sm ${minutes === o.value ? 'btn-primary' : ''}`}
                  onClick={() => setMinutes(o.value)}
                  aria-pressed={minutes === o.value}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="btn-row">
          <button
            type="button"
            className="btn btn-primary"
            onClick={start}
            disabled={selectedModules.length === 0 || availableFont === 0}
          >
            Mulai kuis
          </button>
          <Link className="btn" to="/latihan">
            Latihan santai dulu
          </Link>
        </div>
      </div>
    )
  }

  // ---------------------------------------------------------------- result view
  if (phase === 'result') {
    const correctCount = questions.filter((q) => {
      const a = answers[q.id]
      return a !== undefined && isCorrect(q, a)
    }).length
    const pct = questions.length ? Math.round((correctCount / questions.length) * 100) : 0
    const wrong = questions.filter((q) => {
      const a = answers[q.id]
      return a === undefined || !isCorrect(q, a)
    })
    const duration = Date.now() - startedAt

    const circumference = 2 * Math.PI * 54
    const offset = circumference * (1 - pct / 100)

    return (
      <div className="page-narrow" style={{ margin: '0 auto' }}>
        <nav className="small muted" style={{ marginBottom: 12 }}>
          <Link to="/">Dasbor</Link> / Kuis
        </nav>

        <div
          className="card card-pad"
          style={{
            display: 'flex',
            gap: 24,
            alignItems: 'center',
            flexWrap: 'wrap',
            marginBottom: 22,
          }}
        >
          <div className="score-ring">
            <svg width="128" height="128" aria-hidden="true">
              <circle
                cx="64"
                cy="64"
                r="54"
                fill="none"
                stroke="var(--border)"
                strokeWidth="9"
              />
              <circle
                cx="64"
                cy="64"
                r="54"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="9"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
              />
            </svg>
            <span className="score-ring-label">{pct}%</span>
            <span className="score-ring-sub">skor</span>
          </div>

          <div style={{ flex: 1, minWidth: 220 }}>
            <h1 style={{ fontSize: '1.45rem' }}>Kuis selesai</h1>
            <div className="module-meta" style={{ marginTop: 10 }}>
              <span>
                {correctCount} benar dari {questions.length}
              </span>
              <span>{wrong.length} perlu ditinjau</span>
              <span>{formatClock(duration)}</span>
            </div>
            <div className="btn-row" style={{ marginTop: 16 }}>
              <button type="button" className="btn btn-primary btn-sm" onClick={start}>
                Ulangi dengan soal baru
              </button>
              <button
                type="button"
                className="btn btn-sm"
                onClick={() => {
                  setPhase('setup')
                  window.scrollTo({ top: 0 })
                }}
              >
                Ubah pengaturan
              </button>
            </div>
          </div>
        </div>

        <h2 style={{ marginBottom: 12 }}>
          {wrong.length > 0 ? 'Soal yang perlu ditinjau' : 'Semua jawaban benar'}
        </h2>

        {wrong.length === 0 ? (
          <div className="empty">Tidak ada kesalahan. Kerja bagus.</div>
        ) : (
          wrong.map((q) => {
            const given = answers[q.id]
            return (
              <div className="review-item" key={q.id}>
                <div className="review-q">
                  <Markdown md={q.prompt} className="prose" />
                </div>
                <div className="review-line">
                  <span className="review-key">Jawabanmu</span>
                  <span style={{ color: 'var(--bad)' }}>
                    {given === undefined ? (
                      'Tidak dijawab'
                    ) : q.type === 'mc' ? (
                      given.toUpperCase()
                    ) : q.type === 'tf' ? (
                      given === 'true' ? 'Benar' : 'Salah'
                    ) : (
                      given
                    )}
                  </span>
                </div>
                <div className="review-line">
                  <span className="review-key">Benar</span>
                  <span style={{ color: 'var(--ok)' }}>
                    <Markdown md={answerText(q)} className="" />
                  </span>
                </div>
                <div style={{ marginTop: 9 }}>
                  <Markdown md={q.explanation} className="prose" />
                </div>
                <div className="srcref">Sumber: {q.sourceRef}</div>
              </div>
            )
          })
        )}
      </div>
    )
  }

  // ------------------------------------------------------------------ run view
  const q = questions[current]
  if (!q) {
    return <div className="empty">Tidak ada soal.</div>
  }

  const answeredCount = Object.keys(answers).length
  const remaining = deadline === null ? null : deadline - now
  const lowTime = remaining !== null && remaining < 60_000

  return (
    <div className="page-narrow" style={{ margin: '0 auto' }}>
      <div className="quiz-bar">
        <div className="quiz-bar-inner">
          <span className="small muted">
            Soal {current + 1}/{questions.length}
          </span>
          <div className="quiz-dots">
            {questions.map((qq, i) => (
              <button
                key={qq.id}
                type="button"
                className="quiz-dot"
                data-state={
                  i === current ? 'current' : answers[qq.id] ? 'answered' : 'empty'
                }
                onClick={() => setCurrent(i)}
                aria-label={`Soal ${i + 1}${answers[qq.id] ? ', sudah dijawab' : ''}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <span className="spacer" />
          {remaining !== null && (
            <span className={`timer ${lowTime ? 'is-low' : ''}`}>
              {formatClock(remaining)}
            </span>
          )}
          <button type="button" className="btn btn-sm btn-primary" onClick={finish}>
            Selesai
          </button>
        </div>
      </div>

      <div className="card exercise">
        <div className="exercise-meta">
          <span className="chip chip-accent">
            {modules.find((m) => m.id === q.moduleId)?.code}
          </span>
          <span className="chip">{q.difficulty}</span>
        </div>
        <div className="exercise-prompt">
          <Markdown md={q.prompt} className="prose" />
        </div>

        {q.type === 'mc' && q.choices && (
          <ul className="choices">
            {q.choices.map((c) => (
              <li key={c.id}>
                <button
                  type="button"
                  className={`choice ${answers[q.id] === c.id ? 'is-picked' : ''}`}
                  onClick={() => setAnswers((a) => ({ ...a, [q.id]: c.id }))}
                  aria-pressed={answers[q.id] === c.id}
                >
                  <span className="choice-key">{c.id.toUpperCase()}</span>
                  <span className="choice-body">
                    <Markdown md={c.md} className="prose" />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}

        {q.type === 'tf' && (
          <div className="tf-row">
            {(['true', 'false'] as const).map((v) => (
              <button
                key={v}
                type="button"
                className={`btn ${answers[q.id] === v ? 'btn-primary' : ''}`}
                onClick={() => setAnswers((a) => ({ ...a, [q.id]: v }))}
                aria-pressed={answers[q.id] === v}
              >
                {v === 'true' ? 'Benar' : 'Salah'}
              </button>
            ))}
          </div>
        )}

        {q.type === 'short' && (
          <input
            className="short-input"
            value={answers[q.id] ?? ''}
            onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))}
            placeholder="Tulis jawaban singkat…"
            autoComplete="off"
          />
        )}

        <div className="btn-row" style={{ marginTop: 14 }}>
          <button
            type="button"
            className="btn btn-sm"
            disabled={current === 0}
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
          >
            ← Sebelumnya
          </button>
          {current < questions.length - 1 ? (
            <button
              type="button"
              className="btn btn-sm btn-primary"
              onClick={() => setCurrent((c) => Math.min(questions.length - 1, c + 1))}
            >
              Berikutnya →
            </button>
          ) : (
            <button type="button" className="btn btn-sm btn-primary" onClick={finish}>
              Selesai &amp; lihat hasil
            </button>
          )}
          <span className="spacer" />
          <span className="small muted">
            {answeredCount}/{questions.length} dijawab
          </span>
        </div>
      </div>
    </div>
  )
}
