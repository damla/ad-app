'use client'

import { startTransition, useState } from 'react'

import { Button } from '@/components/general/button/button'
import Icon from '@/components/general/icon/icon'
import styles from './styles.module.scss'
import { useRouter } from 'next/navigation'
import { useToast } from '@/hooks/use-toast'

interface Props {
  id: string
  favoriteCount: number
}

const FavoriteAdButton = ({ id, favoriteCount }: Props) => {
  const router = useRouter()
  const { showToast } = useToast()

  const [isFavoriting, setIsFavoriting] = useState<boolean>(false)

  const handleFavorite = async (id: string) => {
    setIsFavoriting(true)
    if (!id) {
      showToast('İlan favorilenirken bir sorun oluştu.', 'error')
      return
    }

    const response = await fetch(`/api/advertisements/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ favoriteCount: favoriteCount + 1 })
    })

    if (!response.ok) {
      const errorMessage = await response.text()
      showToast(`Favori işleminde bir sorun oluştu: ${errorMessage}`, 'error')
      setIsFavoriting(false)
      return
    }

    setIsFavoriting(false)
    showToast('İlan başarıyla favorilendi.', 'success')
    startTransition(() => {
      router.refresh()
    })
  }

  return (
    <Button
      className={styles.button}
      onClick={() => handleFavorite(id)}
      disabled={isFavoriting}
    >
      <Icon name='HeartIcon' size={20} />
    </Button>
  )
}

export default FavoriteAdButton
