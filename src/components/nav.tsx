'use client'

import { Link } from 'next-view-transitions'
import { ThemeSwitcher } from './theme-switcher'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { Logo } from '@react95/icons'

export default function Nav() {
  const path = usePathname()

  const links = [
    {
      path: '/',
      text: 'Me',
    },
    {
      path: '/about',
      text: 'About',
    },
    {
      path: '/work',
      text: 'Work',
    },
    {
      path: '/windows',
      text: '',
    },
  ]

  return (
    <div className="fixed left-0 top-5 z-50 w-full md:w-[calc(100vw-16px)]">
      <nav className="w450:gap-4 mx-auto flex max-w-[--page-width] gap-5 rounded-base border-2 border-border bg-main p-2.5 px-5 text-sm font-base text-text shadow-light dark:border-darkBorder dark:shadow-dark sm:text-base">
        {links.map((link) => {
          return (
            (link.text.length && (
              <Link
                key={link.path}
                className={clsx(
                  'rounded-base border-2 px-2 py-1 transition-colors hover:border-border dark:hover:border-darkBorder',
                  path === link.path
                    ? 'border-border dark:border-darkBorder'
                    : 'border-transparent',
                )}
                href={link.path}
              >
                {link.text}
              </Link>
            )) ||
            (!link.text.length && (
              <Link key={link.path} href={link.path}>
                <Logo className="mt-2" variant="32x32_4" />
              </Link>
            ))
          )
        })}
        <div className="my-auto ml-auto">
          <ThemeSwitcher />
        </div>
      </nav>
    </div>
  )
}
