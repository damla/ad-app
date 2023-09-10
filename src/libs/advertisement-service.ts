import { url } from '@/utils/env'

export const getAdvertisements = async () => {
  // set no-cache to fetch updated data everytime
  const res = await fetch(`${url}/api/advertisements`, { cache: 'no-cache' })

  if (!res.ok) {
    throw new Error('Failed to fetch ads')
  }

  return await res.json()
}
