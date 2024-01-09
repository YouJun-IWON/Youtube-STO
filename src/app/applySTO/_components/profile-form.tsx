'use client';

import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import * as z from 'zod';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Textarea } from '@/components/ui/textarea';

import { toast } from '@/components/ui/use-toast';
import { auth } from '@/auth';
import { useSession } from 'next-auth/react';
import { useCurrentUser } from '@/hooks/use-current-user';

const profileFormSchema = z.object({
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
      required_error: 'Please select an email to display.',
    })
    .email(),
  bio: z.string().max(160).min(4),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: 'Please enter a valid URL.' }),
      })
    )
    .optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
  bio: '',
  urls: [{ value: '유튜브 채널 url' }],
};

export function ProfileForm() {
  const session: any = useCurrentUser();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { fields, append } = useFieldArray({
    name: 'urls',
    control: form.control,
  });

  const onSubmit = async (data: ProfileFormValues) => {
    console.log(data);
    toast({
      title: '신청 완료',
      description:
        '가치 산정 Protocol과 다양한 검증을 통해 합리적인 결과를 추후 알려드겠습니다.',
    });

    await fetch(`http://35.226.148.114:3004/sto/mint`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: session.id,
        stId: '5',
        offerPrice: 50000,
        offerQty: 1000,
      }),
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='이메일을 선택해주세요.' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='tndhworl1998@gmail.com'>
                    tndhworl1998@gmail.com
                  </SelectItem>
                </SelectContent>
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
          name='bio'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='본인이 현재 어떤 유튜버인지 서술해 주세요.'
                  className='resize-none'
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>
                You can <span>@mention</span> other users and organizations to
                link to them.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`urls.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && 'sr-only')}>
                    URLs
                  </FormLabel>
                  <FormDescription className={cn(index !== 0 && 'sr-only')}>
                    당신을 알 수 있는 다양한 url을 입력해주세요.
                  </FormDescription>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type='button'
            variant='outline'
            size='sm'
            className='mt-2'
            onClick={() => append({ value: '그 외의 링크' })}
          >
            URL 추가하기
          </Button>
        </div>
        <Button type='submit'>신청하기</Button>
      </form>
    </Form>
  );
}
