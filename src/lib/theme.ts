// Theme handling: persisted preference with system default.

import { useCallback, useEffect, useState } from 'react'
import { loadTheme, saveTheme } from './storage'

type Theme = 'light' | 'dark'

function current(): Theme {
  const stored = loadTheme()
  if (stored) return stored
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(current)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    saveTheme(theme)
  }, [theme])

  // Follow the OS only while the user has not chosen explicitly.
  useEffect(() => {
    if (loadTheme()) return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const on = () => setTheme(mq.matches ? 'dark' : 'light')
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])

  const toggle = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggle }
}
