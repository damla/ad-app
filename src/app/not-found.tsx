'use client'

import { Button } from '@/components/general/button/button'

interface Props {
  error: Error
  reset: () => void
}

const Error: React.FC<Props> = ({ error, reset }) => {
  return (
    <div className='textCenter'>
      <h2 className='mb3xl'>Sayfa bulunamadı!</h2>
      <Button onClick={reset}>Tekrar Dene</Button>
    </div>
  )
}

export default Error
