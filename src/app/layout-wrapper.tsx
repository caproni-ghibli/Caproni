'use client'

import { usePathname } from 'next/navigation'
import Nav from '@/components/nav'
import Links from '@/components/links'
import { ThemeProvider } from '@/components/theme-provider'
import Windows95 from './windows/page'

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  if (pathname === '/windows') {
    return <Windows95 />
  }

  return (
    <div className="h-max">
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <Nav />
        <div className="ml-auto w-full place-items-center pb-10 pt-28 text-text dark:text-darkText">
          {children}
        </div>
        <Links />
      </ThemeProvider>
    </div>
  )
}
