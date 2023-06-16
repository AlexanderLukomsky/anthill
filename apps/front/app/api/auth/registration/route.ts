import { prisma } from 'lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

type RegistrationBody = {
  email: string;
  password: string;
};

export async function POST(request: NextRequest) {
  const body: RegistrationBody = await request.json();

  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json({ message: 'all fields is required' }, { status: 400 });
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
        name: '',
        password,
      },
    });

    return NextResponse.json({ message: 'created' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'failed to connect to db' }, { status: 500 });
  }
}
