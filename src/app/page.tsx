import HomePage from '@/components/homepage/homepage'
import { Suspense } from 'react'

export default function Home() {
  return (
    <Suspense fallback={<div>İlanlar yükleniyor...</div>}>
      <HomePage />
    </Suspense>
  )
}
