import { useState } from 'react'
import { Link } from 'react-router-dom'
import { modules, totalUnits, allExercises, getUnit } from '../content'
import { useProgress } from '../progress/ProgressContext'
import { formatClock } from '../lib/quiz'

export function ProgressPage() {
  const { progress, resetAll, storageOk } = useProgress()
  const [confirming, setConfirming] = useState(false)

  const completed = progress.completedUnits
  const pct = totalUnits ? Math.round((completed.length / totalUnits) * 100) : 0
  const attempts = Object.values(progress.attempts)
  const correct = attempts.filter((a) => a.status === 'correct').length
  const wrongIds = Object.entries(progress.attempts)
    .filter(([, a]) => a.status === 'incorrect')
    .map(([id]) => id)

  return (
    <div className="page-narrow" style={{ margin: '0 auto' }}>
      <nav className="small muted" style={{ marginBottom: 12 }}>
        <Link to="/">Dasbor</Link> / Progres
      </nav>

      <h1>Progres belajar</h1>
      <p className="lede" style={{ marginBottom: 20 }}>
        Semua data disimpan di browser ini saja (localStorage) — tidak dikirim ke mana pun.
      </p>

      {!storageOk && (
        <div className="banner" style={{ marginBottom: 16 }}>
          <span aria-hidden="true">⚠</span>
          <span>
            Penyimpanan browser tidak dapat ditulis (mungkin mode privat atau kuota penuh).
            Progres hanya bertahan selama tab ini terbuka.
          </span>
        </div>
      )}

      <div className="grid grid-3" style={{ marginBottom: 20 }}>
        <div className="card card-pad">
          <div className="stat-num">{pct}%</div>
          <div className="stat-label">materi selesai</div>
          <div className="progress-track" style={{ marginTop: 9 }}>
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <div className="small muted" style={{ marginTop: 7 }}>
            {completed.length} dari {totalUnits} unit
          </div>
        </div>

        <div className="card card-pad">
          <div className="stat-num">
            {attempts.length ? Math.round((correct / attempts.length) * 100) : 0}%
          </div>
          <div className="stat-label">akurasi latihan</div>
          <div className="small muted" style={{ marginTop: 9 }}>
            {correct} benar · {attempts.length - correct} salah · {allExercises.length} soal
            tersedia
          </div>
        </div>

        <div className="card card-pad">
          <div className="stat-num">{progress.quizzes.length}</div>
          <div className="stat-label">kuis dikerjakan</div>
          <div className="small muted" style={{ marginTop: 9 }}>
            {progress.quizzes[0]
              ? `Terakhir: ${progress.quizzes[0].correct}/${progress.quizzes[0].total}`
              : 'Belum ada kuis'}
          </div>
        </div>
      </div>

      {wrongIds.length > 0 && (
        <div style={{ marginBottom: 22 }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'baseline', marginBottom: 8 }}>
            <h2 style={{ fontSize: '1.1rem' }}>Perlu diulang</h2>
            <Link className="small" to="/latihan?filter=wrong">
              Latih semua soal salah →
            </Link>
          </div>
          <p className="small muted" style={{ marginTop: 0 }}>
            {wrongIds.length} soal terakhir kali dijawab salah.
          </p>
        </div>
      )}

      <h2 style={{ fontSize: '1.1rem', marginBottom: 10 }}>Rincian per modul</h2>
      <div className="card" style={{ overflow: 'hidden', marginBottom: 24 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
          <thead>
            <tr style={{ background: 'var(--bg-sunken)', textAlign: 'left' }}>
              <th style={{ padding: '9px 14px', fontWeight: 620 }}>Modul</th>
              <th style={{ padding: '9px 14px', fontWeight: 620 }}>Unit selesai</th>
              <th style={{ padding: '9px 14px', fontWeight: 620, width: 120 }}>Progres</th>
              <th style={{ padding: '9px 14px' }} />
            </tr>
          </thead>
          <tbody>
            {modules.map((m) => {
              const done = m.units.filter((u) => completed.includes(u.id)).length
              const p = m.units.length ? Math.round((done / m.units.length) * 100) : 0
              return (
                <tr key={m.id} style={{ borderTop: '1px solid var(--border)' }}>
                  <td style={{ padding: '9px 14px' }}>
                    <span className="module-code" style={{ marginRight: 8 }}>
                      {m.code}
                    </span>
                    {m.title}
                  </td>
                  <td style={{ padding: '9px 14px' }}>
                    {done}/{m.units.length}
                  </td>
                  <td style={{ padding: '9px 14px' }}>
                    <div className="progress-track">
                      <div className="progress-fill" style={{ width: `${p}%` }} />
                    </div>
                  </td>
                  <td style={{ padding: '9px 14px', textAlign: 'right' }}>
                    <Link className="small" to={`/modul/${m.id}`}>
                      Buka
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {completed.length > 0 && (
        <div style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: '1.1rem', marginBottom: 8 }}>Unit yang sudah dipelajari</h2>
          <ul style={{ margin: 0, paddingLeft: 18 }} className="small">
            {completed.map((id) => {
              const f = getUnit(id)
              if (!f) return null
              return (
                <li key={id} style={{ marginBottom: 3 }}>
                  <Link to={`/unit/${id}`}>
                    {f.module.code} · {f.unit.number}. {f.unit.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}

      {progress.quizzes.length > 0 && (
        <div style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: '1.1rem', marginBottom: 8 }}>Riwayat kuis</h2>
          <div className="card" style={{ overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
              <thead>
                <tr style={{ background: 'var(--bg-sunken)', textAlign: 'left' }}>
                  <th style={{ padding: '9px 14px', fontWeight: 620 }}>Waktu</th>
                  <th style={{ padding: '9px 14px', fontWeight: 620 }}>Skor</th>
                  <th style={{ padding: '9px 14px', fontWeight: 620 }}>Durasi</th>
                  <th style={{ padding: '9px 14px', fontWeight: 620 }}>Modul</th>
                </tr>
              </thead>
              <tbody>
                {progress.quizzes.slice(0, 12).map((q) => (
                  <tr key={q.id} style={{ borderTop: '1px solid var(--border)' }}>
                    <td style={{ padding: '9px 14px' }}>
                      {new Date(q.at).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </td>
                    <td style={{ padding: '9px 14px', fontVariantNumeric: 'tabular-nums' }}>
                      {q.correct}/{q.total} (
                      {q.total ? Math.round((q.correct / q.total) * 100) : 0}%)
                    </td>
                    <td style={{ padding: '9px 14px' }}>{formatClock(q.durationMs)}</td>
                    <td style={{ padding: '9px 14px' }} className="small muted">
                      {q.moduleIds.length === modules.length
                        ? 'Semua modul'
                        : q.moduleIds.join(', ')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div
        className="card card-pad"
        style={{ borderColor: 'var(--border-strong)', marginTop: 8 }}
      >
        <h2 style={{ fontSize: '1rem', marginBottom: 6 }}>Reset progres</h2>
        <p className="small muted" style={{ marginTop: 0 }}>
          Menghapus seluruh catatan unit selesai, jawaban latihan, dan riwayat kuis di
          browser ini. Materi tidak terpengaruh.
        </p>
        {confirming ? (
          <div className="btn-row">
            <button
              type="button"
              className="btn btn-sm"
              style={{
                borderColor: 'var(--bad)',
                color: 'var(--bad)',
              }}
              onClick={() => {
                resetAll()
                setConfirming(false)
              }}
            >
              Ya, hapus semua progres
            </button>
            <button
              type="button"
              className="btn btn-sm btn-ghost"
              onClick={() => setConfirming(false)}
            >
              Batal
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="btn btn-sm"
            onClick={() => setConfirming(true)}
          >
            Reset progres…
          </button>
        )}
      </div>
    </div>
  )
}
