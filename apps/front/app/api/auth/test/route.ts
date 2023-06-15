import { prisma } from 'lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const users = await prisma.user.findMany();

    return NextResponse.json({ data: users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'failed to connect db' }, { status: 400 });
  }
}
