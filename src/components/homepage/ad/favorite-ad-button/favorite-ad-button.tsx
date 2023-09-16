'use client'

import { Button } from '@/components/general/button/button'
import Icon from '@/components/general/icon/icon'
import styles from './styles.module.scss'
import { updateAdvertisements } from '@/lib/query-service'
import { useMutation } from '@tanstack/react-query'
import { useQueryClientInstance } from '@/context/query-client.context'
import { useToast } from '@/hooks/use-toast'

interface Props {
  id: string
  favoriteCount: number
}

const FavoriteAdButton = ({ id, favoriteCount }: Props) => {
  const { showToast } = useToast()

  const { queryClient } = useQueryClientInstance()

  const { isLoading, mutate } = useMutation({
    mutationFn: updateAdvertisements,
    onSuccess: () => {
      showToast('İlan başarıyla favorilendi.', 'success')
      queryClient.invalidateQueries({ queryKey: ['ads'] })
    },
    onError: () => {
      showToast('İlan favorilenirken bir sorun oluştu.', 'error')
    }
  })

  const handleFavorite = () => {
    mutate({ id, favoriteCount })
  }

  return (
    <Button
      className={styles.button}
      onClick={handleFavorite}
      disabled={isLoading}
    >
      <Icon name='HeartIcon' size={20} />
    </Button>
  )
}

export default FavoriteAdButton
