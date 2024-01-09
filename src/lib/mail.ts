import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

// TODO: Modify after set domain

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: 'onboarding@resend.dev', //
    to: email,
    subject: 'BAY Youtube STO 인증 이메일입니다.',
    html: `<p>2채널 인증코드는 ${token} 입니다.</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`; //

  await resend.emails.send({
    from: 'onboarding@resend.dev', //
    to: email,
    subject: 'BAY Youtube STO 확인 이메일입니다.',
    html: `<p>비밀번호 수정을 위해 <a href="${resetLink}">여기</a>를 클릭해주세요.</p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`; //

  await resend.emails.send({
    from: 'onboarding@resend.dev', //
    to: email,
    subject: 'BAY Youtube STO 확인 이메일입니다.',
    html: `<p>인증을 위해 <a href="${confirmLink}">여기</a>를 클릭해주세요.</p>`,
  });
};
