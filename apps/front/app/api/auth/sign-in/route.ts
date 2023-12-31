import { prisma } from 'lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest, response: NextResponse) {
  const body = await request.json();

  const { email, password } = body;

  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json({ message: 'user not found' }, { status: 401 });
    }

    if (user.password === password) {
      const { password, ...rest } = user;

      return NextResponse.json({ data: rest, message: 'success' }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: 'failed to connect to db' }, { status: 400 });
  }
}
