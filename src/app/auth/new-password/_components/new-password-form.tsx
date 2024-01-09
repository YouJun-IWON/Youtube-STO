'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

import { NewPasswordSchema } from '@/schemas';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { FormError } from '../../_components/form-error';
import { FormSuccess } from '../../_components/form-success';
import { Select } from '@/components/ui/select';
import { newPassword } from '@/auth-actions/new-password';
import Link from 'next/link';

export const NewPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      newPassword(values, token).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <div className='flex flex-col items-center w-full justify-center gap-10 '>
      <div className='text-center space-y-4'>
        <div className='text-6xl'>🔑</div>
        <div className='text-xl font-bold text-slate-700'>
          새로운 비밀번호를 설정해주세요.
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-6  w-[300px]'
        >
          <div className='space-y-4'>
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder='******'
                      type='password'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='confirmPassword'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호 확인</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <Input type='password' placeholder='' {...field} />
                    </FormControl>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button disabled={isPending} type='submit' className='w-full'>
            비밀번호 초기화
          </Button>
        </form>
      </Form>
      <Link href='/auth' className='underline underline-offset-2'>
        로그인으로 돌아가기
      </Link>
    </div>
  );
};
