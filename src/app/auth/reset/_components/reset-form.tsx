'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

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
import { ResetSchema } from '@/schemas';
import Link from 'next/link';
import { reset } from '@/auth-actions/reset';
import { Icons } from '@/components/icons';

export const ResetForm = () => {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      reset(values).then((data) => {
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
          비밀번호를 잃어버리셨나요?
        </div>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-6 w-[300px]'
        >
          <div className='space-y-4'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder='john.doe@example.com'
                      type='email'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />

          <Button disabled={isPending} className='flex-1 w-full' type='submit'>
            {isPending && (
              <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            )}
            이메일 인증하기
          </Button>
        </form>
      </Form>

      <Link href='/auth' className='underline underline-offset-2'>
        로그인으로 돌아가기
      </Link>
    </div>
  );
};
