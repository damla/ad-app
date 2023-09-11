import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  try {
    const posts = await prisma.advertisement.findMany()

    return NextResponse.json(posts)
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 })
  }
}
