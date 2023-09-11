import { NextResponse } from 'next/server'
import moment from 'moment-timezone'
import prisma from '@/lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id
    const ad = await prisma.advertisement.findUnique({
      where: {
        id
      }
    })

    if (!ad) {
      return new NextResponse('No advertisement with the ID found', {
        status: 404
      })
    }
    return NextResponse.json(ad)
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 })
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id
    let req = await request.json()
    const date = moment(new Date()).tz('Europe/Istanbul')

    const updated_ad = await prisma.advertisement.update({
      where: { id },
      data: {
        title: req.title || undefined,
        favoriteCount: req.favoriteCount || undefined,
        isUrgent: req.isUrgent || undefined,
        imageUrl: req.imageUrl || undefined,
        lastUpdated: date.toDate()
      }
    })

    if (!updated_ad) {
      return new NextResponse('No advertisement with the ID found', {
        status: 404
      })
    }

    return NextResponse.json(updated_ad)
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id
    await prisma.advertisement.delete({
      where: { id }
    })

    return new NextResponse(null, { status: 204 })
  } catch (error: any) {
    if (error.code === 'P2025') {
      return new NextResponse('No advertisement with the ID found', {
        status: 404
      })
    }

    return new NextResponse(error.message, { status: 500 })
  }
}
