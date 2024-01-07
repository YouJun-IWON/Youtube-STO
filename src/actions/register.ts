'use server';

import * as z from 'zod';
import bcrypt from 'bcryptjs';

import { registerSchema } from '@/schemas';
import { db } from '@/lib/db';
import { getUserByEmail } from '@/data/user';

export const register = async (values: z.infer<typeof registerSchema>) => {
  const validatedFields = registerSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: '유효하지 않는 정보입니다.' };
  }

  const { email, password, name } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 13);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: '이미 사용중인 이메일입니다.' };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: '회원가입 완료' };
};
