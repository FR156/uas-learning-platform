import { useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { adjacentUnits, exercisesForUnit, getUnit, modules } from '../content'
import { SectionView } from '../components/SectionView'
import { useProgress } from '../progress/ProgressContext'

export function UnitPage() {
  const { unitId = '' } = useParams()
  const found = getUnit(unitId)
  const { progress, toggleComplete } = useProgress()

  // Reset scroll when navigating between units.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [unitId])

  const nav = useMemo(() => adjacentUnits(unitId), [unitId])

  if (!found) {
    return (
      <div className="empty">
        Unit tidak ditemukan. <Link to="/">Kembali ke dasbor</Link>
      </div>
    )
  }

  const { unit, module } = found
  const isDone = progress.completedUnits.includes(unit.id)
  const unitExercises = exercisesForUnit(unit.id)

  return (
    <div className="reader">
      <aside className="side" aria-label="Navigasi modul">
        {modules.map((m) => {
          const isCurrent = m.id === module.id
          return (
            <div className="side-group" key={m.id}>
              <div className="side-label">
                {m.code}
                {isCurrent ? ` · ${m.title.slice(0, 22)}…` : ''}
              </div>
              {m.units.map((u) => (
                <Link
                  key={u.id}
                  to={`/unit/${u.id}`}
                  className="side-link"
                  aria-current={
                    u.id === unit.id ? 'page' : progress.completedUnits.includes(u.id) ? undefined : undefined
                  }
                >
                  {u.number}. {u.title}
                  {progress.completedUnits.includes(u.id) && (
                    <span className="tick" aria-label="selesai">
                      ✓
                    </span>
                  )}
                </Link>
              ))}
            </div>
          )
        })}
      </aside>

      <article>
        <nav className="small muted" style={{ marginBottom: 12 }}>
          <Link to="/">Dasbor</Link> / <Link to={`/modul/${module.id}`}>{module.code}</Link> / Unit{' '}
          {unit.number}
        </nav>

        <header className="unit-head">
          <span className="eyebrow">
            {module.code} · Unit {unit.number} · hlm. {unit.pageFrom}–{unit.pageTo}
          </span>
          <h1>{unit.title}</h1>
          <div className="btn-row" style={{ marginTop: 16 }}>
            <button
              type="button"
              className={`btn btn-sm ${isDone ? '' : 'btn-primary'}`}
              onClick={() => toggleComplete(unit.id)}
            >
              {isDone ? '✓ Sudah dipelajari — tandai belum' : 'Tandai selesai'}
            </button>
            {unitExercises.length > 0 && (
              <Link className="btn btn-sm" to={`/latihan?unit=${unit.id}`}>
                Latihan unit ini ({unitExercises.length})
              </Link>
            )}
          </div>
        </header>

        {unit.sections.map((s, i) => (
          <SectionView section={s} index={i} key={`${s.kind}-${i}`} />
        ))}

        <footer className="unit-foot">
          {nav.prev ? (
            <Link className="btn btn-sm" to={`/unit/${nav.prev.unit.id}`}>
              ← {nav.prev.module.code} Unit {nav.prev.unit.number}
            </Link>
          ) : (
            <span />
          )}
          {nav.next ? (
            <Link className="btn btn-sm btn-primary" to={`/unit/${nav.next.unit.id}`}>
              {nav.next.module.code} Unit {nav.next.unit.number} →
            </Link>
          ) : (
            <Link className="btn btn-sm btn-primary" to="/kuis">
              Selesai — coba kuis
            </Link>
          )}
        </footer>
      </article>
    </div>
  )
}
