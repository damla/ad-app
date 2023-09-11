import { Advertisement } from '@prisma/client'
import prisma from './prisma'

export const getAdvertisements = async () => {
  try {
    const advertisements: Advertisement[] = await prisma.advertisement.findMany(
      {
        orderBy: [{ lastUpdated: 'desc' }]
      }
    )

    return advertisements
  } catch (error: any) {
    throw new Error(error)
  }
}
