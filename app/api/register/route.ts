import { prisma } from '@/lib/prisma'
import { hash } from 'bcrypt'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()
    const hashed = await hash(password, 12)

    const user = await prisma.user.create({
      data: {
        email,
        password: hashed,
      },
    })

    return NextResponse.json(
      {
        user: {
          email: user.email,
        },
      },
      {
        status: 201,
      }
    )
  } catch (error) {
    return NextResponse.json(
      {
        error: (error as Error).message,
      },
      {
        status: 400,
      }
    )
  }
}
