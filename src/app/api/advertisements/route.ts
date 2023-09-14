import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const ads = await prisma.advertisement.findMany({
      orderBy: [{ lastUpdated: 'desc' }]
    })

    return NextResponse.json(ads)
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const ad = await prisma.advertisement.create({
      data: { ...json }
    })

    return new NextResponse(JSON.stringify(ad), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 })
  }
}
