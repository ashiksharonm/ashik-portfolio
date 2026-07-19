import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { getStoredTheme, setTheme, type Theme } from '../lib/theme'

export default function ThemeToggle() {
  const [theme, setLocalTheme] = useState<Theme>('light')

  useEffect(() => {
    setLocalTheme(getStoredTheme())
  }, [])

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    setLocalTheme(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-outline text-on-surface transition-colors hover:border-tertiary hover:text-tertiary"
    >
      {theme === 'dark' ? <Sun size={16} strokeWidth={1.75} /> : <Moon size={16} strokeWidth={1.75} />}
    </button>
  )
}
