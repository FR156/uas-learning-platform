import { Link, useParams } from 'react-router-dom'
import { getModule, exercisesForModule } from '../content'
import { useProgress } from '../progress/ProgressContext'

export function ModulePage() {
  const { moduleId = '' } = useParams()
  const mod = getModule(moduleId)
  const { progress } = useProgress()

  if (!mod) {
    return (
      <div className="empty">
        Modul tidak ditemukan. <Link to="/">Kembali ke dasbor</Link>
      </div>
    )
  }

  const done = mod.units.filter((u) => progress.completedUnits.includes(u.id)).length
  const pct = mod.units.length ? Math.round((done / mod.units.length) * 100) : 0
  const exCount = exercisesForModule(mod.id).length

  return (
    <>
      <nav className="small muted" style={{ marginBottom: 12 }}>
        <Link to="/">Dasbor</Link> / {mod.code}
      </nav>

      <header style={{ marginBottom: 22 }}>
        <span className="module-code">{mod.code}</span>
        <h1 style={{ marginTop: 10 }}>{mod.title}</h1>
        <div className="module-meta" style={{ marginTop: 10 }}>
          <span>{mod.units.length} unit</span>
          <span>
            halaman {mod.pageFrom}–{mod.pageTo} sumber
          </span>
          <span>{exCount} soal</span>
          <span>{done} selesai</span>
        </div>
      </header>

      {mod.incomplete && (
        <div className="banner" style={{ marginBottom: 18 }}>
          <span aria-hidden="true">⚠</span>
          <span>{mod.incomplete}</span>
        </div>
      )}

      <div className="progress-track" style={{ marginBottom: 22 }}>
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          gap: 12,
          marginBottom: 10,
          flexWrap: 'wrap',
        }}
      >
        <h2>Unit</h2>
        <Link className="btn btn-sm" to={`/modul/${mod.id}/latihan`}>
          Latihan modul ini
        </Link>
      </div>

      <ul className="unit-list">
        {mod.units.map((u) => {
          const isDone = progress.completedUnits.includes(u.id)
          return (
            <li key={u.id}>
              <Link className={`unit-row ${isDone ? 'done' : ''}`} to={`/unit/${u.id}`}>
                <span className="unit-num">{u.number}</span>
                <span className="unit-name">{u.title}</span>
                <span className="small muted">
                  hlm. {u.pageFrom}–{u.pageTo}
                </span>
                {isDone && <span className="chip chip-ok">selesai</span>}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
