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
