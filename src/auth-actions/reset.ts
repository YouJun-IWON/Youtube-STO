'use server';

import * as z from 'zod';

import { ResetSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';
import { sendPasswordResetEmail } from '@/lib/mail';
import { generatePasswordResetToken } from '@/lib/token';

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: '유효하지 않은 이메일 입니다.' };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: '없는 이메일입니다.' };
  }

  const passwordResetToken = await generatePasswordResetToken(email);
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token,
  );

  return { success: '초기화 이메일이 전송되었습니다.' };
};
