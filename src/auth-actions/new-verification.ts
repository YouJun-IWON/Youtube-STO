'use server';

import { db } from '@/lib/db';
import { getUserByEmail } from '@/data/user';
import { getVerificationTokenByToken } from '@/data/verification-token';

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return { error: '토큰이 존재하지 않습니다.' };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: '토큰이 만료되었습니다.' };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: '유저가 존재하지 않습니다.' };
  }

  await db.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  await db.verificationToken.delete({
    where: { id: existingToken.id },
  });

  return { success: '확인되었습니다.' };
};
