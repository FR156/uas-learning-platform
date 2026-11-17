import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../lib/theme'
import type { ReactNode } from 'react'

export function Layout({ children }: { children: ReactNode }) {
  const { theme, toggle } = useTheme()

  return (
    <div className="shell">
      <header className="topbar">
        <div className="topbar-inner">
          <Link to="/" className="brand">
            <span className="brand-mark" aria-hidden="true">
              ∑
            </span>
            <span>MDAS · Belajar</span>
          </Link>

          <nav className="nav" aria-label="Navigasi utama">
            <NavLink to="/" end className="nav-link">
              Dasbor
            </NavLink>
            <NavLink to="/latihan" className="nav-link">
              Latihan
            </NavLink>
            <NavLink to="/kuis" className="nav-link">
              Kuis
            </NavLink>
            <NavLink to="/progres" className="nav-link">
              Progres
            </NavLink>
            <button
              type="button"
              className="btn btn-sm btn-ghost"
              onClick={toggle}
              aria-label={theme === 'dark' ? 'Ganti ke tema terang' : 'Ganti ke tema gelap'}
              title={theme === 'dark' ? 'Tema terang' : 'Tema gelap'}
              style={{ marginLeft: 4 }}
            >
              {theme === 'dark' ? '☀' : '☾'}
            </button>
          </nav>
        </div>
      </header>

      <main className="page">{children}</main>

      <footer className="footer">
        <div className="footer-inner">
          <span>
            Materi Matematika Dasar — PSIK.26A, Ganjil 26/27. Disusun ulang dari catatan
            kuliah P01–P14.
          </span>
          <span>Data progres tersimpan lokal di browser ini.</span>
        </div>
      </footer>
    </div>
  )
}
