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

    const updatedUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        password,
      },
    });

    const data = {
      id: updatedUser.id,
      email: updatedUser.email,
      name: updatedUser.name,
    };

    return NextResponse.json({ data, message: 'success' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'failed to connect to db' }, { status: 400 });
  }
}
