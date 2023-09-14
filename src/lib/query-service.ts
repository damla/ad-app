import { url } from '@/utils/env'

export const addAdvertisements = async ({
  title,
  isUrgent,
  imageUrl
}: {
  title: string
  isUrgent: NonNullable<boolean | undefined>
  imageUrl: string
}) => {
  const response = await fetch(`${url}/api/advertisements`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, isUrgent, imageUrl })
  })

  if (!response.ok) {
    return new Error('An error occurred while adding the advertisement.')
  }
  return
}

export const getAdvertisements = async () => {
  const response = await fetch(`${url}/api/advertisements`)
  const data = await response.json()
  return data
}

export const updateAdvertisements = async ({
  id,
  favoriteCount
}: {
  id: string
  favoriteCount: number
}) => {
  const response = await fetch(`${url}/api/advertisements/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ favoriteCount: favoriteCount + 1 })
  })

  if (!response.ok) {
    return new Error('An error occurred while updating the advertisement.')
  }
  return response.json()
}

export const deleteAdvertisement = async ({ id }: { id: string }) => {
  const response = await fetch(`${url}/api/advertisements/${id}`, {
    method: 'DELETE'
  })

  if (!response.ok) {
    return new Error('An error occurred while deleting the advertisement.')
  }
  return
}
