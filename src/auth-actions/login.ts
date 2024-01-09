'use server';

import * as z from 'zod';
import { AuthError } from 'next-auth';

import { signIn } from '@/auth';
import { LoginSchema } from '@/schemas';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { generateVerificationToken, generateTwoFactorToken } from '@/lib/token';
import { getUserByEmail } from '@/data/user';
import { getTwoFactorTokenByEmail } from '@/data/two-factor-token';
import { sendVerificationEmail, sendTwoFactorTokenEmail } from '@/lib/mail';
import { db } from '@/lib/db';
import { getTwoFactorConfirmationByUserId } from '@/data/two-factor-confirmation';

export const login = async (values: z.infer<typeof LoginSchema>, callbackUrl?: string | null) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: '유효하지 않는 정보입니다.' };
  }

  const { email, password, code } = validatedFields.data;

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

  if (existingUser.isTwoFactorEnabled && existingUser.email) {
    if (code) {
      const twoFactorToken = await getTwoFactorTokenByEmail(existingUser.email);

      if (!twoFactorToken) {
        return { error: '인증할 코드가 생성되지 않았습니다.' };
      }

      if (twoFactorToken.token !== code) {
        return { error: '유효하지 않은 코드입니다.' };
      }

      const hasExpired = new Date(twoFactorToken.expires) < new Date();

      if (hasExpired) {
        return {
          error: '코인 인증 유효 기간이 만료되었습니다. 재로그인 해주세요.',
        };
      }

      await db.twoFactorToken.delete({
        where: { id: twoFactorToken.id },
      });

      const existingConfirmation = await getTwoFactorConfirmationByUserId(
        existingUser.id
      );

      if (existingConfirmation) {
        await db.twoFactorConfirmation.delete({
          where: { id: existingConfirmation.id },
        });
      }

      await db.twoFactorConfirmation.create({
        data: {
          userId: existingUser.id,
        },
      });
    } else {
      const twoFactorToken = await generateTwoFactorToken(existingUser.email);

      await sendTwoFactorTokenEmail(twoFactorToken.email, twoFactorToken.token);

      return { twoFactor: true };
    }
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
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
