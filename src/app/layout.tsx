import '@/styles/main.scss'

import Footer from '@/components/layout/footer/footer'
import Header from '@/components/layout/header/header'
import { Inter } from 'next/font/google'
import Main from '@/components/layout/main/main'
import type { Metadata } from 'next'
import Toast from '@/components/general/toast/toast'
import { ToastContextProvider } from '@/context/toast.context'

const inter = Inter({ subsets: ['latin'] })

// TODO: add site config
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

interface Props {
  children: React.ReactNode
}
export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ToastContextProvider>
          <Toast />
          <Header />
          <Main>{children}</Main>
          <Footer />
        </ToastContextProvider>
      </body>
    </html>
  )
}
