import { Advertisement } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import prisma from './prisma'

export const getAdvertisements = async () => {
  try {
    const advertisements: Advertisement[] = await prisma.advertisement.findMany(
      {
        orderBy: [{ lastUpdated: 'desc' }]
      }
    )

    return advertisements
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error
    }
    if (error instanceof PrismaClientKnownRequestError) {
      throw error
    }
    throw new Error('An unexpected error occurred')
  }
}
