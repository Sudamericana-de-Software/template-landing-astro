'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { css } from '../../../styled-system/css'
import { Button } from '../ui/button'

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('light')

  // Cargar tema desde localStorage o media query
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
  }, [])

  // Aplicar clase `dark` al HTML
  useEffect(() => {
    const isDark =
      theme === 'dark' ||
      (theme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)

    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.classList.toggle('light', !isDark)
    localStorage.setItem('theme', theme)
  }, [theme])

  // Alternar modo: light → dark → system → light...
  const toggleTheme = () => {
    setTheme((prev) =>
      prev === 'light' ? 'dark' : prev === 'dark' ? 'system' : 'light'
    )
  }

  const icon = theme === 'dark' ? <Sun /> : theme === 'light' ? <Moon /> : <Moon className="opacity-60" />

  return (
    <Button
      variant="ghost"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={css({
        _hover:{
          bg:'none'
        }
      })}
    >
      {icon}
    </Button>
  )
}
