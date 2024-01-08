'use server';

import * as z from 'zod';
import { AuthError } from 'next-auth';

import { signIn } from '@/auth';
import { LoginSchema } from '@/schemas';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { generateVerificationToken } from '@/lib/token';
import { getUserByEmail } from '@/data/user';
import { sendVerificationEmail } from '@/lib/mail';

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: '유효하지 않는 정보입니다.' };
  }

  const { email, password } = validatedFields.data;

  const existingUser: any = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: '존재하지 않은 회원정보입니다.' };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    );

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    console.log('check');

    return { success: '확인 이메일을 전송했습니다.' };
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: '유효하지 않은 정보입니다.' };
        default:
          return { error: '이메일 인증을 하지 않은 정보입니다.' };
      }
    }

    throw error;
  }
};
