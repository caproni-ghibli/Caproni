'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import * as React from 'react'

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  return (
    <>
      <button 
        className='border-border dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText shadow-light dark:shadow-dark cursor-pointer rounded-base border-2 bg-white px-4 py-2 text-center text-sm font-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none sm:text-base dark:hover:shadow-none'
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        <Sun className="m500:h-4 m500:w-4 text-darkText hidden h-6 w-6 dark:inline" />
        <Moon className="m500:h-4 m500:w-4 stroke-text inline h-6 w-6 dark:hidden" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </>
  )
}
