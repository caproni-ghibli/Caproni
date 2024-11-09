import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import { ViewTransitions } from 'next-view-transitions'
import { ThemeProvider } from '@/components/theme-provider'
import Links from '@/components/links'

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
    <ViewTransitions>
      <link rel="shortcut icon" href="/favicon.ico" type="any"/>
      <html lang="en">
        <body className={montserrat.className}>
          <div className="h-max">
            <ThemeProvider attribute="class" disableTransitionOnChange>
              <Nav />
              <div className="text-text dark:text-darkText mx-auto w-[750px] max-w-full px-5 pb-10 pt-28">
                {children}
              </div>
              <Links />
            </ThemeProvider>
          </div>
        </body>
      </html>
    </ViewTransitions>
  )
}
