'use client'

import { Button } from '@/components/general/button/button'
import { useState } from 'react'

interface Props {
  error: Error
  reset: () => void
}

const Error = ({ error, reset }:Props) => {
  const [show, setShow] = useState(false)
  const showError = () => {
    setShow(true)
  }

  return (
    <div className='textCenter'>
      <h2 className='mb3xl'>Hata oluştu!</h2>
      <Button onClick={reset}>Tekrar Dene</Button>
      <Button onClick={showError} className='ml2xl'>
        Hatayı Göster
      </Button>
      {show && <pre className='mt3xl pre'>{error.message}</pre>}
    </div>
  )
}

export default Error
