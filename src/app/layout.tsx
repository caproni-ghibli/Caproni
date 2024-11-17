import './globals.css'
import { Montserrat } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { ViewTransitions } from 'next-view-transitions'
import Links from '@/components/links'
import Nav from '@/components/nav'
import type { Metadata } from 'next'

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
