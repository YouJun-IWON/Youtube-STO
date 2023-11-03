import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { randomUUID } from 'crypto';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  const { email, username, password } = body;

  if (!username || !email || !password) {
    return new NextResponse('Missing Fields', { status: 400 });
  }

  const exist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (exist) {
    throw new Error('Email already exists');
  }

  const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT));

  const user = await prisma.user.create({
    data: {
      email,
      name: username,
      hashedPassword,
    },
  });


  const token = await prisma.activateToken.create({
    data: {
      token: `${randomUUID()}${randomUUID()}`.replace(/-/g, ''),
      userId: user.id,
    }
  })

  return NextResponse.json(user);
}
