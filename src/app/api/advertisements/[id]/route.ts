import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id
    const post = await prisma.advertisement.findUnique({
      where: {
        id
      }
    })

    if (!post) {
      return new NextResponse('No post with the ID found', {
        status: 404
      })
    }
    return NextResponse.json(post)
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
      return new NextResponse('No post with the ID found', { status: 404 })
    }

    return new NextResponse(error.message, { status: 500 })
  }
}
