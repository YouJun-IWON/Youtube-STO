'use server';

import * as z from 'zod';
import bcrypt from 'bcryptjs';

import { registerSchema } from '@/schemas';
import { db } from '@/lib/db';
import { getUserByEmail } from '@/data/user';
import { generateVerificationToken } from '@/lib/token';
import { sendVerificationEmail } from '@/lib/mail';

export const register = async (values: z.infer<typeof registerSchema>) => {

  const validatedFields = registerSchema.safeParse(values);
  

  if (!validatedFields.success) {
    return { error: '유효하지 않는 정보입니다.' };
  }

  const { email, password, name } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT));

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: '이미 사용중인 이메일입니다.' };
  }

  try {
    const response = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const verificationToken = await generateVerificationToken(email);

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return { success: '이메일을 확인해주세요!' };

    // await fetch(`http://35.226.148.114:3004/wallet/create`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     userId: response.id,
    //   }),
    // });
  } catch (err) {
    console.error('register' + err);
    throw 500;
  }

  return { success: '회원가입 완료' };
};
