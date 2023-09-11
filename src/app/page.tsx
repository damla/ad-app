import HomePage from '@/components/homepage/homepage'
import { NextPage } from 'next'
import { Suspense } from 'react'

const Home: NextPage = () => {
  return (
    <Suspense fallback={<div>İlanlar yükleniyor...</div>}>
      <HomePage />
    </Suspense>
  )
}

export default Home
