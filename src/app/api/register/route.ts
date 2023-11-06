import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { randomUUID } from 'crypto';
import { NextResponse } from 'next/server';
import Mailgun from 'mailgun.js';
import formData from 'form-data';
const API_KEY = process.env.MAILGUN_API_KEY || '';
const DOMAIN = process.env.MAILGUN_DOMAIN || '';

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
     return new NextResponse('Email already exists', { status: 400 });
    // return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
    // throw new Error('Email already exists');
  }

  const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT));

  const user = await prisma.user.create({
    data: {
      email,
      name: username,
      hashedPassword,
    },
  });

    //! 확인 가능한 실재 도메인(MAILGUN_DOMAIN)이 있을 때만 가능하다.
  // const token = await prisma.activateToken.create({
  //   data: {
  //     token: `${randomUUID()}${randomUUID()}`.replace(/-/g, ''),
  //     userId: user.id,
  //   },
  // });

  // const mailgun = new Mailgun(formData);
  // const client = mailgun.client({ username: 'api', key: API_KEY });

  // const messageData = {
  //   from: `Example Email <hello@${DOMAIN}>`,
  //   to: user.email!,
  //   subject: 'Please Activate Your Account',
  //   text: `Hello ${user.name}, please activate your account by clicking this link: http://localhost:3000/activate/${token.token}`,
  // };

  // await client.messages
  //   .create(DOMAIN, messageData)
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });

  return NextResponse.json(user);
}
