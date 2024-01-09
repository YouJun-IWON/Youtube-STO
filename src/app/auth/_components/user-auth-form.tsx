'use client';

import { useState, useTransition } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

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
import { login } from '@/auth-actions/login';
import Social from './social';
import { FormSuccess } from './form-success';

export function UserAuthForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');
  console.log('callbackUrl', callbackUrl);

  const urlError =
    searchParams.get('error') === 'OAuthAccountNotLinked'
      ? '이미 존재하는 이메일 입니다.'
      : '';

  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
      code: '',
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      login(values, callbackUrl)
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data.error);
          }

          if (data?.success) {
            form.reset();
            setSuccess(data.success);
          }

          if (data?.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch(() => setError('오류가 생겼습니다.'));
    });
  };

  const router = useRouter();

  return (
    <div className={cn('grid gap-6')}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          {}
          {!showTwoFactor ? (
            <>
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
            </>
          ) : (
            <>
              <FormField
                control={form.control}
                name='code'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>2중 인증 코드</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder='123456'
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          <div className='flex flex-col gap-5 '>
            <FormError message={error || urlError} />
            <FormSuccess message={success} />
            <Button disabled={isPending} className='flex-1 mt-2' type='submit'>
              {isPending && (
                <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
              )}
              {showTwoFactor ? '입력하기' : '로그인'}
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
          href='/auth/reset'
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

      <div className='flex flex-col text-center gap-1 font-semibold'>
        <Social isPending={isPending} />
      </div>
    </div>
  );
}
