'use client';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { signIn } from 'next-auth/react';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

const Social = ({ isPending }: any) => {
  const onClick = async (provider: 'google') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <Button
      variant='outline'
      className=' rounded-md text-lg'
      type='button'
      disabled={isPending}
      onClick={() => onClick('google')}
    >
      {isPending ? (
        <Icons.spinner className='mr-2 h-6 w-6 animate-spin' />
      ) : (
        <FcGoogle className='mr-2 h-8 w-8' />
      )}
      Google
    </Button>
  );
};

export default Social;
