import { CLOUD_NAME, UPLOAD_PRESET } from './env'

import { Advertisement } from '@prisma/client'
import { SORT_OPTION } from '@/types'

export const sortAds = (ads: Advertisement[], sortOption: SORT_OPTION) => {
  return ads.sort((a, b) => {
    // Sorting by favorite count
    if (a.favoriteCount !== b.favoriteCount) {
      return sortOption === SORT_OPTION.DESC
        ? b.favoriteCount - a.favoriteCount
        : a.favoriteCount - b.favoriteCount
    }

    // If favorite counts are the same, sort by update date
    const dateA = new Date(a.lastUpdated)
    const dateB = new Date(b.lastUpdated)

    return dateB.getTime() - dateA.getTime() // Most recent date first
  })
}

export const capitalizeFirstLetter = (string: string) => {
  return (
    string.charAt(0).toLocaleUpperCase() + string.slice(1).toLocaleLowerCase()
  )
}

export const uploadToCloudinary = async (file: File) => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', UPLOAD_PRESET)

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload/`,
    {
      method: 'POST',
      body: formData
    }
  )
  return response.json()
}

export const checkFile = (file?: File) => {
  if (!file) {
    return { error: 'Dosya seçilmedi.' }
  }

  if (file.size > 5 * 1024 * 1024) {
    return { error: "Görsel boyutu 5MB'dan büyük olamaz" }
  }

  if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
    return {
      error: 'Lütfen png veya jpeg formatında görsel yükleyiniz'
    }
  }

  return { isValid: true, file }
}
