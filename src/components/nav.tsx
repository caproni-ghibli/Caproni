'use client'

import { useEffect, useRef, useState } from 'react'
import { Link } from 'next-view-transitions'
import { ThemeSwitcher } from './theme-switcher'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { Logo } from '@react95/icons'

const textLinks = [
  { path: '/', text: 'Me' },
  { path: '/about-me', text: 'About Me' },
  { path: '/work', text: 'Work' },
  { path: '/blogs', text: 'Blogs' },
]

const logoPath = '/windows'

export default function Nav() {
  const path = usePathname()
  const [open, setOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  // Close the menu after navigating to another page
  useEffect(() => {
    setOpen(false)
  }, [path])

  // Close on outside click or Escape while the menu is open
  useEffect(() => {
    if (!open) return

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const linkClass = (active: boolean) =>
    clsx(
      'rounded-base border-2 px-2 py-1 transition-colors hover:border-border dark:hover:border-darkBorder',
      active ? 'border-border dark:border-darkBorder' : 'border-transparent',
    )

  return (
    <div className="fixed left-0 top-5 z-50 w-full px-3 sm:px-0 md:w-[calc(100vw-16px)]">
      <nav
        ref={navRef}
        className="relative mx-auto flex max-w-(--page-width) items-center gap-5 rounded-base border-2 border-border bg-main p-2.5 px-5 text-sm font-base text-text shadow-light dark:border-darkBorder dark:shadow-dark sm:text-base w450:gap-4"
      >
        {/* Menu button: phones only */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav-menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-base border-2 border-border p-1.5 transition-colors dark:border-darkBorder sm:hidden"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>

        {/* Desktop links: shown inline from the sm breakpoint up */}
        <div className="hidden sm:contents">
          {textLinks.map((link) => (
            <Link
              key={link.path}
              className={linkClass(path === link.path)}
              href={link.path}
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* Logo: first on phones, after the links on desktop */}
        <Link
          href={logoPath}
          aria-label="Windows"
          className="order-second sm:order-none"
        >
          <Logo className="mt-2" variant="32x32_4" />
        </Link>

        <div className="ml-auto flex items-center gap-3">
          <ThemeSwitcher />
        </div>

        {/* Dropdown: phones only */}
        {open && (
          <div
            id="mobile-nav-menu"
            className="absolute left-0 right-0 top-full mt-2 flex flex-col gap-1 rounded-base border-2 border-border bg-main p-2.5 shadow-light dark:border-darkBorder dark:shadow-dark sm:hidden"
          >
            {textLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setOpen(false)}
                aria-current={path === link.path ? 'page' : undefined}
                className={clsx(linkClass(path === link.path), 'py-2')}
              >
                {link.text}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  )
}
