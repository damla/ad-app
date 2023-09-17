'use client'

import { startTransition, useState } from 'react'

import { Button } from '@/components/general/button/button'
import Icon from '@/components/general/icon/icon'
import styles from './styles.module.scss'
import { useRouter } from 'next/navigation'
import { useToast } from '@/hooks/use-toast'

interface Props {
  id: string
}

const DeleteAdButton = ({ id }: Props) => {
  const router = useRouter()
  const { showToast } = useToast()

  const [isDeleting, setIsDeleting] = useState<boolean>(false)

  const handleDelete = async (id: string) => {
    setIsDeleting(true)
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
      setIsDeleting(false)
      return
    }
    setIsDeleting(false)
    showToast('İlan başarıyla silindi.', 'success')
    startTransition(() => {
      router.refresh()
    })
  }

  return (
    <Button
      className={styles.button}
      onClick={() => handleDelete(id)}
      disabled={isDeleting}
    >
      <Icon name='TrashIcon' size={20} className={styles.icon} />
    </Button>
  )
}

export default DeleteAdButton
