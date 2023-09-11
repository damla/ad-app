'use client'

import Button from '@/components/general/button/button'
import { Icon } from '@/components/general/icon/icon'
import { startTransition } from 'react'
import styles from './styles.module.scss'
import { useRouter } from 'next/navigation'
import { useToast } from '@/hooks/use-toast'

interface Props {
  id: string
}

const DeleteAdButton: React.FC<Props> = ({ id }) => {
  const router = useRouter()
  const { showToast } = useToast()

  const handleDelete = async (id: string) => {
    if (!id) {
      showToast('İlan silinirken bir sorun oluştu.', 'error')
      return
    }

    const response = await fetch(`/api/advertisements/${id}`, {
      method: 'DELETE'
    })

    if (!response.ok) {
      const errorMessage = await response.text()
      showToast(`İlan silinirken bir sorun oluştu: ${errorMessage}`, 'error')
      return
    }

    showToast('İlan başarıyla silindi.', 'success')
    startTransition(() => {
      router.refresh()
    })
  }

  return (
    <Button className={styles.button} onClick={() => handleDelete(id)}>
      <Icon name='TrashIcon' size={20} />
    </Button>
  )
}

export default DeleteAdButton
