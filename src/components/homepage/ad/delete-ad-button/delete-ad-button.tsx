'use client'

import { Button } from '@/components/general/button/button'
import Icon from '@/components/general/icon/icon'
import { deleteAdvertisement } from '@/lib/query-service'
import { startTransition } from 'react'
import styles from './styles.module.scss'
import { useMutation } from '@tanstack/react-query'
import { useQueryClientInstance } from '@/context/query-client.context'
import { useRouter } from 'next/navigation'
import { useToast } from '@/hooks/use-toast'

interface Props {
  id: string
}

const DeleteAdButton: React.FC<Props> = ({ id }) => {
  const router = useRouter()
  const { showToast } = useToast()

  const { queryClient } = useQueryClientInstance()

  const { isLoading, mutate } = useMutation({
    mutationFn: deleteAdvertisement,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ads'] })
      showToast('İlan başarıyla silindi.', 'success')
    },
    onError: () => {
      showToast('İlan silinirken bir sorun oluştu.', 'error')
    }
  })

  const handleDelete = () => {
    mutate(
      { id },
      {
        onSuccess: () => {
          startTransition(() => {
            router.refresh()
          })
        }
      }
    )
  }

  return (
    <Button
      className={styles.button}
      onClick={handleDelete}
      disabled={isLoading}
    >
      <Icon name='TrashIcon' size={20} className={styles.icon} />
    </Button>
  )
}

export default DeleteAdButton
