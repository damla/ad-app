import { Advertisement } from '@prisma/client'
import prisma from './prisma'

export const getAdvertisements = async () => {
  try {
    const advertisements: Advertisement[] =
      await prisma.advertisement.findMany()

    return advertisements
  } catch (error: any) {
    throw new Error(error)
  }
}
