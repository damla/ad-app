export const getAdvertisements = async () => {
  const response = await fetch(`/api/advertisements`)
  const data = await response.json()
  console.log(response)
  return data
}

export const updateAdvertisements = async ({
  id,
  favoriteCount
}: {
  id: string
  favoriteCount: number
}) => {
  const response = await fetch(`/api/advertisements/${id}`, {
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
  const response = await fetch(`/api/advertisements/${id}`, {
    method: 'DELETE'
  })

  if (!response.ok) {
    console.log(response.text)
    return new Error('An error occurred while deleting the advertisement.')
  }
  return
}
