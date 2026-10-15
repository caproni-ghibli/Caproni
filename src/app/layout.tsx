import './globals.css'
import { Montserrat } from 'next/font/google'
import { ViewTransitions } from 'next-view-transitions'
import type { Metadata } from 'next'
import LayoutWrapper from './layout-wrapper'
import '@react95/core'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zack',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ViewTransitions>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ViewTransitions>
      </body>
    </html>
  )
}