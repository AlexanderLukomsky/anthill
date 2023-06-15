import { NextRequest, NextResponse } from 'next/server';

import { PrismaClient } from '@prisma/client';

type RegistrationBody = {
  email: string;
  userName: string;
  password: string;
};

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const body: RegistrationBody = await request.json();

  const { email, userName, password } = body;

  if (!email) {
    return NextResponse.json({ message: 'email is required' }, { status: 400 });
  }

  if (!userName) {
    return NextResponse.json({ message: 'userName is required' }, { status: 400 });
  }

  if (!password) {
    return NextResponse.json({ message: 'password is required' }, { status: 400 });
  }

  try {
    const isRegisteredUser = await prisma.user.findFirst({
      where: { email },
    });

    if (isRegisteredUser) {
      return NextResponse.json({ message: 'user already registered' }, { status: 400 });
    }

    await prisma.user.create({
      data: {
        email,
        userName,
        password,
      },
    });

    return NextResponse.json({ message: 'created' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'failed to connect to db' }, { status: 400 });
  }
}
