'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Select } from '@/components/ui/select';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { cn } from '@/lib/utils';
import { registerSchema } from '@/schemas';
import { register } from '@/actions/register';
import { useState, useTransition } from 'react';
import { FormError } from '../../_components/form-error';
import { FormSuccess } from '../../_components/form-success';

type RegisterFormValues = z.infer<typeof registerSchema>;

export function UserRegisterForm() {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (values: RegisterFormValues) => {
    setError('');

    startTransition(() => {
      register(values).then((data) => {
        if (data.error) {
          setError(data.error);
        } else if (data.success) {
          setSuccess(data.success);
        }
      });
    });
  };

  return (
    <div className={cn('grid gap-6')}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>이름</FormLabel>
                <FormControl>
                  <Input placeholder='홍길동' {...field} />
                </FormControl>
                {/* <FormDescription>
                  주민등록상에 나와있는 실제 본인이름이야 합니다.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>이메일</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <Input placeholder='email@gmail.com' {...field} />
                  </FormControl>
                </Select>
                {/* <FormDescription>
                  이 이메일은 본인인증과 추후 알람에 사용되므로 자주 사용하는
                  이메일로 진행할 것을 추천합니다.{' '}
                </FormDescription> */}
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
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='password123!'
                      {...field}
                    />
                  </FormControl>
                </Select>
                <FormDescription className='text-xs'>
                  최소 12자, 소문자 / 숫자 / 특수기호 하나씩 포함
                </FormDescription>
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

          <FormError message={error} />
          <FormSuccess message={success} />

          <Button
            type='submit'
            disabled={isPending}
            className='w-full translate-y-4 '
          >
            {isPending ? (
              <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            ) : (
              <div className='mr-2 h-4 w-4' />
            )}{' '}
            가입하기
          </Button>
        </form>
      </Form>
    </div>
  );
}
