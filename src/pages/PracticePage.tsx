import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { allExercises, getUnit, modules } from '../content'
import { ExerciseCard } from '../components/ExerciseCard'
import { useProgress } from '../progress/ProgressContext'

type Filter = 'all' | 'todo' | 'wrong'

export function PracticePage() {
  const [params, setParams] = useSearchParams()
  const unitFilter = params.get('unit')
  const moduleFilter = params.get('module')
  const { progress } = useProgress()

  const [difficulty, setDifficulty] = useState<'all' | 'mudah' | 'sedang' | 'sulit'>('all')
  const [scope, setScope] = useState<Filter>('all')
  const [origin, setOrigin] = useState<'all' | 'source' | 'application'>('all')

  const pool = useMemo(() => {
    let list = allExercises
    if (unitFilter) list = list.filter((e) => e.unitId === unitFilter)
    if (moduleFilter) list = list.filter((e) => e.moduleId === moduleFilter)
    if (difficulty !== 'all') list = list.filter((e) => e.difficulty === difficulty)
    if (origin !== 'all') list = list.filter((e) => e.origin === origin)
    if (scope === 'todo') list = list.filter((e) => !progress.attempts[e.id])
    if (scope === 'wrong')
      list = list.filter((e) => progress.attempts[e.id]?.status === 'incorrect')
    return list
  }, [unitFilter, moduleFilter, difficulty, origin, scope, progress.attempts])

  const ctx = unitFilter ? getUnit(unitFilter) : moduleFilter ? { module: modules.find((m) => m.id === moduleFilter)!, unit: null } : null

  const heading = unitFilter
    ? ctx && 'unit' in ctx && ctx.unit
      ? `${ctx.module.code} · Unit ${ctx.unit.number}`
      : 'Latihan'
    : moduleFilter
      ? ctx?.module.code
      : null

  return (
    <>
      <nav className="small muted" style={{ marginBottom: 12 }}>
        <Link to="/">Dasbor</Link> / Latihan
      </nav>

      <h1 style={{ marginBottom: 6 }}>Latihan soal</h1>
      <p className="lede" style={{ marginBottom: 18 }}>
        {heading ? `${heading} — ` : ''}
        {pool.length} soal. Setiap soal punya pembahasan dan rujukan halaman sumber.
      </p>

      <div className="toolbar">
        <div className="seg" role="group" aria-label="Cakupan">
          {(
            [
              ['all', 'Semua'],
              ['todo', 'Belum dicoba'],
              ['wrong', 'Salah'],
            ] as const
          ).map(([v, l]) => (
            <button
              key={v}
              type="button"
              aria-pressed={scope === v}
              onClick={() => setScope(v)}
            >
              {l}
            </button>
          ))}
        </div>

        <div className="seg" role="group" aria-label="Tingkat kesulitan">
          {(
            [
              ['all', 'Semua tingkat'],
              ['mudah', 'Mudah'],
              ['sedang', 'Sedang'],
              ['sulit', 'Sulit'],
            ] as const
          ).map(([v, l]) => (
            <button
              key={v}
              type="button"
              aria-pressed={difficulty === v}
              onClick={() => setDifficulty(v)}
            >
              {l}
            </button>
          ))}
        </div>

        <div className="seg" role="group" aria-label="Jenis soal">
          {(
            [
              ['all', 'Semua'],
              ['source', 'Dari sumber'],
              ['application', 'Penerapan'],
            ] as const
          ).map(([v, l]) => (
            <button
              key={v}
              type="button"
              aria-pressed={origin === v}
              onClick={() => setOrigin(v)}
            >
              {l}
            </button>
          ))}
        </div>

        {(unitFilter || moduleFilter) && (
          <button
            type="button"
            className="btn btn-sm btn-ghost"
            onClick={() => setParams({})}
          >
            Hapus filter halaman
          </button>
        )}
      </div>

      {pool.length === 0 ? (
        <div className="empty">
          Tidak ada soal yang cocok dengan filter ini.
          <div style={{ marginTop: 12 }}>
            <button
              type="button"
              className="btn btn-sm"
              onClick={() => {
                setScope('all')
                setDifficulty('all')
                setOrigin('all')
              }}
            >
              Reset filter
            </button>
          </div>
        </div>
      ) : (
        <div>
          {pool.map((e) => {
            const m = modules.find((mm) => mm.id === e.moduleId)
            const u = getUnit(e.unitId)
            return (
              <div key={e.id} style={{ marginBottom: 12 }}>
                <div className="exercise-meta" style={{ marginBottom: 6 }}>
                  <span className="small muted">
                    {m?.code} · Unit {u?.unit.number} · {u?.unit.title}
                  </span>
                </div>
                <ExerciseCard exercise={e} />
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}
