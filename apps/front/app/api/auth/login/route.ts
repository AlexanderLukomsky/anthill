import { NextRequest, NextResponse } from 'next/server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest, response: NextResponse) {
  const body = await request.json();

  const { email, password } = body;

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (user) {
    if (user.password === password) {
      return NextResponse.json({ data: user, message: 'success' }, { status: 200 });
    }
    return NextResponse.json({ message: 'incorrect password' }, { status: 400 });
  }
}
