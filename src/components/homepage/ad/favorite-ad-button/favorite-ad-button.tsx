'use client'

import Button from '@/components/general/button/button'
import { Icon } from '@/components/general/icon/icon'
import { startTransition } from 'react'
import styles from './styles.module.scss'
import { useRouter } from 'next/navigation'
import { useToast } from '@/hooks/use-toast'

interface Props {
  id: string
  favoriteCount: number
}

const FavoriteAdButton: React.FC<Props> = ({ id, favoriteCount }) => {
  const router = useRouter()
  const { showToast } = useToast()

  const handleFavorite = async (id: string) => {
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
      return
    }

    showToast('İlan başarıyla favorilendi.', 'success')
    startTransition(() => {
      router.refresh()
    })
  }

  return (
    <Button className={styles.button} onClick={() => handleFavorite(id)}>
      <Icon name='HeartIcon' size={20} />
    </Button>
  )
}

export default FavoriteAdButton
