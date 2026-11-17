import { Link } from 'react-router-dom'
import { modules, totalUnits, totalPages, allExercises, moduleProgress } from '../content'
import { useProgress } from '../progress/ProgressContext'

export function Dashboard() {
  const { progress } = useProgress()
  const completed = progress.completedUnits
  const pct = totalUnits ? Math.round((completed.length / totalUnits) * 100) : 0

  const attempted = Object.keys(progress.attempts).length
  const correct = Object.values(progress.attempts).filter(
    (a) => a.status === 'correct',
  ).length
  const lastQuiz = progress.quizzes[0]

  const nextUnit = modules
    .flatMap((m) => m.units.map((u) => ({ u, m })))
    .find(({ u }) => !completed.includes(u.id))

  return (
    <>
      <section className="hero">
        <div className="hero-main">
          <span className="eyebrow">Matematika Dasar · PSIK.26A · Ganjil 26/27</span>
          <h1>Belajar &amp; Latihan MDAS</h1>
          <p className="lede">
            Materi lengkap 14 modul Matematika Dasar, disusun dari catatan kuliah asli —
            dengan latihan bertingkat, pembahasan tiap soal, dan mode kuis.
          </p>
          <div className="btn-row" style={{ marginTop: 18 }}>
            {nextUnit ? (
              <Link className="btn btn-primary" to={`/unit/${nextUnit.u.id}`}>
                Lanjutkan: {nextUnit.m.code} · Unit {nextUnit.u.number}
              </Link>
            ) : (
              <Link className="btn btn-primary" to="/kuis">
                Semua unit selesai — mulai kuis
              </Link>
            )}
            <Link className="btn" to="/latihan">
              Latihan soal
            </Link>
          </div>
        </div>

        <div className="card hero-side">
          <div>
            <div className="stat-row">
              <span className="stat-num">{pct}%</span>
              <span className="stat-label">
                materi selesai ({completed.length}/{totalUnits} unit)
              </span>
            </div>
            <div className="progress-track" style={{ marginTop: 10 }}>
              <div className="progress-fill" style={{ width: `${pct}%` }} />
            </div>
          </div>

          <div
            className="grid grid-2"
            style={{ gap: 12, borderTop: '1px solid var(--border)', paddingTop: 14 }}
          >
            <div>
              <div className="stat-num" style={{ fontSize: '1.15rem' }}>
                {attempted}
              </div>
              <div className="stat-label">soal dicoba</div>
            </div>
            <div>
              <div className="stat-num" style={{ fontSize: '1.15rem' }}>
                {attempted ? Math.round((correct / attempted) * 100) : 0}%
              </div>
              <div className="stat-label">akurasi terakhir</div>
            </div>
            <div>
              <div className="stat-num" style={{ fontSize: '1.15rem' }}>
                {allExercises.length}
              </div>
              <div className="stat-label">soal tersedia</div>
            </div>
            <div>
              <div className="stat-num" style={{ fontSize: '1.15rem' }}>
                {lastQuiz ? `${lastQuiz.correct}/${lastQuiz.total}` : '—'}
              </div>
              <div className="stat-label">kuis terakhir</div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12 }}>
            <div className="stat-label">
              {totalPages} halaman materi sumber · {modules.length} modul
            </div>
          </div>
        </div>
      </section>

      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 12,
          marginBottom: 14,
          flexWrap: 'wrap',
        }}
      >
        <h2>Modul</h2>
        <span className="small muted">14 modul · {totalUnits} unit</span>
      </div>

      <div className="grid grid-auto">
        {modules.map((m) => {
          const p = moduleProgress(m.id, completed)
          return (
            <article className="card module-card" key={m.id}>
              <div className="module-card-head">
                <div>
                  <span className="module-code">{m.code}</span>
                  <div style={{ marginTop: 8 }}>
                    <Link className="module-title" to={`/modul/${m.id}`}>
                      {m.title}
                    </Link>
                  </div>
                </div>
                {p.pct === 100 && <span className="chip chip-ok">Selesai</span>}
                {m.incomplete && <span className="chip chip-warn">Sebagian</span>}
              </div>

              <div className="module-meta">
                <span>{p.total} unit</span>
                <span>
                  hlm. {m.pageFrom}–{m.pageTo}
                </span>
                <span>{p.done} selesai</span>
              </div>

              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${p.pct}%` }} />
              </div>

              <div className="btn-row" style={{ marginTop: 'auto' }}>
                <Link className="btn btn-sm" to={`/modul/${m.id}`}>
                  Buka modul
                </Link>
                <Link className="btn btn-sm btn-ghost" to={`/modul/${m.id}/latihan`}>
                  Latihan
                </Link>
              </div>
            </article>
          )
        })}
      </div>
    </>
  )
}
