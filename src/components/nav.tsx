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
      text: 'Home',
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
    <div className="fixed left-0 top-5 z-50 w-full">
      <nav className="text-text border-border dark:border-darkBorder shadow-light dark:shadow-dark mx-auto flex w-max gap-5 rounded-base border-2 bg-main p-2.5 px-5 text-sm font-base sm:text-base w450:gap-4">
        {links.map((link) => {
          return (
            <Link
              key={link.path}
              className={clsx(
                'border-border dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText shadow-light dark:shadow-dark cursor-pointer rounded-base border-2 bg-white px-4 py-2 text-center text-sm font-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none sm:text-base dark:hover:shadow-none',
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
        <ThemeSwitcher />
      </nav>
    </div>
  )
}
