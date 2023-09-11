import { NextRequest, NextResponse } from 'next/server'

import prisma from '@/lib/prisma'

export async function GET(request: Request) {
  try {
    const posts = await prisma.advertisement.findMany()

    return NextResponse.json(posts)
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const post = await prisma.advertisement.create({
      data: { ...json }
    })

    return new NextResponse(JSON.stringify(post), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 })
  }
}
