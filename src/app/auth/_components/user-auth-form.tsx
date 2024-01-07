'use client';

import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { useState, useTransition } from 'react';

import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { FcGoogle } from 'react-icons/fc';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { SiNaver } from 'react-icons/si';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { LoginSchema } from '@/schemas';
import { FormError } from './form-error';
import { login } from '@/actions/login';

export function UserAuthForm() {
  const [error, setError] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError('');

    startTransition(() => {
      login(values).then((data) => {
        if (data) {
          setError(data.error);
        }
      });
    });
  };

  const router = useRouter();

  return (
    <div className={cn('grid gap-6')}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <div className='space-y-4'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이메일</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='test@example.com'
                      type='email'
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='******'
                      type='password'
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='flex flex-col gap-5 '>
            <FormError message={error} />
            <Button disabled={isPending} className='flex-1 mt-2' type='submit'>
              {isPending && (
                <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
              )}
              로그인
            </Button>
          </div>
        </form>
      </Form>

      <div className='grid grid-cols-2 text-center gap-8 text-sm text-muted-foreground '>
        <Link
          href='/auth/register'
          className='underline underline-offset-4 hover:text-primary '
        >
          회원가입
        </Link>

        <Link
          href='/auth/TermsOfService'
          className='underline underline-offset-4 hover:text-primary '
        >
          아이디/비밀번호 찾기
        </Link>
      </div>

      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-sm uppercase'>
          <span className='bg-gray-50 px-2 text-muted-foreground'>또는</span>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-8'>
        <div className='flex flex-col text-center gap-1 font-semibold'>
          <Button
            variant='outline'
            className=' rounded-full'
            // onClick={() =>
            //   signIn('google', {
            //     redirect: true,
            //     callbackUrl: '/',
            //   })
            // }
            type='button'
            disabled={isPending}
          >
            {isPending ? (
              <Icons.spinner className=' h-6 w-6 animate-spin' />
            ) : (
              <FcGoogle className=' h-8 w-8' />
            )}
          </Button>
          <p>Google</p>
        </div>

        <div className='flex flex-col text-center gap-1 font-semibold'>
          <Button
            variant='outline'
            className=' rounded-full'
            // onClick={() =>
            //   signIn('google', {
            //     redirect: true,
            //     callbackUrl: '/',
            //   })
            // }
            type='button'
            disabled={isPending}
          >
            {isPending ? (
              <Icons.spinner className=' h-6 w-6 animate-spin' />
            ) : (
              <RiKakaoTalkFill className='h-8 w-8' />
            )}
          </Button>
          <p>Kakao</p>
        </div>

        <div className='flex flex-col text-center gap-1 font-semibold'>
          <Button
            variant='outline'
            className=' rounded-full'
            // onClick={() =>
            //   signIn('google', {
            //     redirect: true,
            //     callbackUrl: '/',
            //   })
            // }
            type='button'
            disabled={isPending}
          >
            {isPending ? (
              <Icons.spinner className=' h-6 w-6 animate-spin' />
            ) : (
              <SiNaver className='text-green-500 h-6 w-6' />
            )}
          </Button>
          <p>Naver</p>
        </div>
      </div>
    </div>
  );
}
