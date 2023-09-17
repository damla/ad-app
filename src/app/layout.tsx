import '@/styles/main.scss'

import Footer from '@/components/layout/footer/footer'
import Header from '@/components/layout/header/header'
import { Inter } from 'next/font/google'
import Main from '@/components/layout/main/main'
import type { Metadata } from 'next'
import { SortOptionProvider } from '@/context/sort-option.context'
import Toast from '@/components/general/toast/toast'
import { ToastProvider } from '@/context/toast.context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'İlan Pazarı',
  description: 'İlanlarınızı yayınlayın, ürünlerinizi satın',
  icons: {
    icon: 'favicon.ico'
  }
}

interface Props {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ToastProvider>
          <Toast />
          <Header />
          <SortOptionProvider>
            <Main>{children}</Main>
            <Footer />
          </SortOptionProvider>
        </ToastProvider>
      </body>
    </html>
  )
}

export default RootLayout
