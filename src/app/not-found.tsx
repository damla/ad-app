'use client'

import Button from '@/components/general/button/button'

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className='textCenter'>
      <h2 className='mb3xl'>Sayfa bulunamadı!</h2>
      <Button onClick={reset}>Tekrar Dene</Button>
    </div>
  )
}
