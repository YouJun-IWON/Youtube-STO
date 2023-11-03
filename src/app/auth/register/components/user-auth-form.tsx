'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';

import { Label } from '@/components/ui/label';

import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Textarea } from '@/components/ui/textarea';

import { toast } from '@/components/ui/use-toast';

import { useRouter } from 'next/navigation';

const registerFormSchema = z
  .object({
    username: z
      .string()
      .min(2, {
        message: 'Username must be at least 2 characters.',
      })
      .max(30, {
        message: 'Username must not be longer than 30 characters.',
      }),
    email: z
      .string({
        required_error: 'Please check your email to display.',
      })
      .email(),
    password: z
      .string()
      .min(12, {
        message: 'Password must be at least 12 characters long.',
      })
      .max(30, {
        message: 'Password must not be longer than 30 characters.',
      })
      .regex(/[A-Z]/, {
        message: 'Password must contain at least one uppercase letter.',
      })
      .regex(/[a-z]/, {
        message: 'Password must contain at least one lowercase letter.',
      })
      .regex(/[0-9]/, {
        message: 'Password must contain at least one number.',
      })
      .regex(/[@#$%^&+=~!]/, {
        message: 'Password must contain at least one special character.',
      }),
    confirmPassword: z.string().min(12),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: 'Passwords must match!',
      path: ['confirmPassword'],
    }
  );
type RegisterFormValues = z.infer<typeof registerFormSchema>;

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserRegisterForm({ className, ...props }: UserAuthFormProps) {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
    mode: 'onChange',
  });

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const router = useRouter();

  async function onSubmit(data: RegisterFormValues) {
    setIsLoading(true);
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log(response);

      router.push('/auth');
    } catch (err) {
      console.log(err);
    }
  }



  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form
         
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-4'
        >
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>이름</FormLabel>
                <FormControl>
                  <Input placeholder='홍길동' {...field} />
                </FormControl>
                <FormDescription>
                  주민등록상에 나와있는 실제 본인이름이야 합니다.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <Input placeholder='email@gmail.com' {...field} />
                  </FormControl>
                </Select>
                <FormDescription>
                  이 이메일은 본인인증과 추후 알람에 사용되므로 자주 사용하는
                  이메일로 진행할 것을 추천합니다.{' '}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='$Password123!'
                      {...field}
                    />
                  </FormControl>
                </Select>
                <FormDescription>
                  최소 12자, 최대 30자, 소문자 / 대문자 / 숫자 / 특수기호 최소
                  하나씩 포함
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
                <FormLabel>Password Confirm</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <Input type='password' placeholder='' {...field} />
                  </FormControl>
                </Select>
                <FormDescription>
                  비밀번호를 한 번 더 입력하세요.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit' disabled={isLoading} className='w-full'>
            {isLoading ? (
              <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            ) : (
              <Icons.logo className='mr-2 h-4 w-4' />
            )}{' '}
            가입하기
          </Button>
        </form>
      </Form>
    </div>
  );
}
