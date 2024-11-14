'use client'

import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { ThemeSwitcher } from './theme-switcher'

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
  ]

  return (
    <div className="fixed left-0 top-5 z-50 md:w-[calc(100vw-16px)] w-full">
      <nav className="text-text border-border dark:border-darkBorder shadow-light dark:shadow-dark mx-auto flex max-w-[750px] gap-5 rounded-base border-2 bg-main p-2.5 px-5 text-sm font-base sm:text-base w450:gap-4">
        {links.map((link) => {
          return (
            <Link
              key={link.path}
              className={clsx(
                'hover:border-border dark:hover:border-darkBorder rounded-base border-2 px-2 py-1 transition-colors',
                path === link.path
                  ? 'border-border dark:border-darkBorder'
                  : 'border-transparent',
              )}
              href={link.path}
            >
              {link.text}
            </Link>
          )
        })}
        <div className="ml-auto my-auto">
          <ThemeSwitcher />
        </div>
      </nav>
    </div>
  )
}
