'use client'

import { Button } from '@/components/general/button/button'
import Icon from '@/components/general/icon/icon'
import { deleteAdvertisement } from '@/lib/query-service'
import styles from './styles.module.scss'
import { useMutation } from '@tanstack/react-query'
import { useQueryClientInstance } from '@/context/query-client.context'
import { useToast } from '@/hooks/use-toast'

interface Props {
  id: string
}

const DeleteAdButton = ({ id }: Props) => {
  const { showToast } = useToast()

  const { queryClient } = useQueryClientInstance()

  const { isLoading, mutate } = useMutation({
    mutationFn: deleteAdvertisement,
    onSuccess: () => {
      showToast('İlan başarıyla silindi.', 'success')
      queryClient.invalidateQueries({ queryKey: ['ads'] })
    },
    onError: () => {
      showToast('İlan silinirken bir sorun oluştu.', 'error')
    }
  })

  const handleDelete = () => {
    mutate({ id })
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
