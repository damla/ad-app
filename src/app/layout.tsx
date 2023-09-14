import '@/styles/main.scss'

import Footer from '@/components/layout/footer/footer'
import Header from '@/components/layout/header/header'
import { Inter } from 'next/font/google'
import Main from '@/components/layout/main/main'
import type { Metadata } from 'next'
import { ReactQueryProviders } from '@/context/react-query.context'
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

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ReactQueryProviders>
          <ToastProvider>
            <Toast />
            <Header />
            <SortOptionProvider>
              <Main>{children}</Main>
              <Footer />
            </SortOptionProvider>
          </ToastProvider>
        </ReactQueryProviders>
      </body>
    </html>
  )
}

export default RootLayout
