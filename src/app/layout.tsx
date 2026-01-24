import './globals.css'
import { Montserrat } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { ViewTransitions } from 'next-view-transitions'
import Links from '@/components/links'
import Nav from '@/components/nav'
import type { Metadata } from 'next'
import LayoutWrapper from './layout-wrapper'

import '@react95/core'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ViewTransitions>
      <link rel="shortcut icon" href="/favicon.ico" type="any" />
      <html lang="en">
        <body className={montserrat.className}>
          <LayoutWrapper>{children}</LayoutWrapper>
        </body>
      </html>
    </ViewTransitions>
  )
}
