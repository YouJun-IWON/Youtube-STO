import { Metadata } from 'next';

import { UserAuthForm } from '@/app/auth/_components/user-auth-form';

export const metadata: Metadata = {
  title: '로그인',
};

export default function AuthenticationPage() {
  return (
    <>
      <div className='mx-auto w-full sm:w-[350px]'>
        <UserAuthForm />
      </div>
    </>
  );
}
