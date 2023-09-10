import { prisma } from './prisma'

export const getAdvertisement = async () => {
  try {
    const ads = await prisma.advertisement.findMany()

    return ads
  } catch (error: any) {
    throw new Error('Failed to fetch ads')
  }
}
