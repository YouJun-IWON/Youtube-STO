'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

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
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from '@/components/ui/use-toast';
import { useState } from 'react';
import { perspective, slideIn } from './anim';
import { motion } from 'framer-motion';

const profileFormSchema = z.object({
  buyPrice: z
    .number()
    .min(10, {
      message: '최소 1 이상의 수가 필요합니다.',
    })
    .max(999999999999, {
      message: '해당 금액은 지원하지 않습니다.',
    }),

  buyAmount: z
    .number()
    .min(1, {
      message: '최소 1개 이상의 수량이 필요합니다.',
    })
    .max(999999999999, {
      message: '해당 금액은 지원하지 않습니다.',
    }),

  totalPrice: z
    .number()
    .min(5000, {
      message: '5000원 이상이어야 합니다.',
    })
    .max(999999999999, {
      message: '해당 금액은 지원하지 않습니다.',
    }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const defaultValues: Partial<ProfileFormValues> = {
  buyPrice: 23700,
  buyAmount: 0,
  totalPrice: 0,
};

export function Buy() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { watch, reset, setValue } = form;

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: '당신의 계약 내용은 다음과 같습니다.',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

                //       <motion.div
          
                //   custom={1}
                //   variants={perspective}
                //   initial='initial'
                //   animate='enter'
                //   exit='exit'
                // >
                
                // </motion.div>

  const buyPrice = watch('buyPrice', 0); // Provide a default value
  const buyAmount = watch('buyAmount', 0); // Provide a default value

  return (
    <motion.div
          
    custom={1}
    variants={perspective}
    initial='initial'
    animate='enter'
    exit='exit'
  >
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5 '>
        <div className='flex flex-between text-[14px] text-white font-semibold'>
          <p>주문 구분</p>
          <div className='flex items-center space-x-2 rtl'>
            <RadioGroup defaultValue='comfortable' className='flex '>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem
                  className='bg-white  '
                  value='default'
                  id='r1'
                />
                <Label htmlFor='r1'>지정가</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem
                  className='bg-white  '
                  value='comfortable'
                  id='r2'
                />
                <Label htmlFor='r2'>시장가</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem
                  className='bg-white  '
                  value='compact'
                  id='r3'
                />
                <Label htmlFor='r3'>예약-지정가</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className='flex flex-between items-center text-[14px] text-white font-semibold'>
          <p>주문가능 (KRW)</p>
          <p>10,000,000 ￦</p>
        </div>
        <FormField
          control={form.control}
          name='buyPrice'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-white'>매수가격 (KRW)</FormLabel>
              <FormControl>
                <Input
                  type='number'
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>

              <FormMessage className='text-white' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='buyAmount'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-white'>주문수량</FormLabel>
              <FormControl>
                <Input
                  type='number'
                  {...field}
                  onChange={(e) => {
                    field.onChange(Number(e.target.value));
                    setValue('totalPrice', buyPrice * buyAmount);
                  }}
                />
              </FormControl>

              <FormMessage className='text-white' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='totalPrice'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-white'>주문총액 (KRW)</FormLabel>
              <FormControl>
                <Input
                  disabled
                  className='disabled:opacity-100'
                  type='number'
                  {...field}
                  value={Number(buyPrice * buyAmount)}
                />
              </FormControl>
              <FormDescription className='text-white'>
                ∙ 최소주문금액: 5000 ￦ ∙ 수수료(부가세 포함): 0.05%
              </FormDescription>
              <FormMessage className='text-white' />
            </FormItem>
          )}
        />

        <div className='grid grid-cols-4 gap-2'>
          <Button
            className='bg-white text-black hover:bg-slate-300'
            type='button'
            onClick={() =>
              reset({
                buyPrice: 0,
                buyAmount: 0,
                totalPrice: 0,
              })
            }
          >
            초기화
          </Button>
          <Button type='submit' className='col-span-3'>
            매수
          </Button>
        </div>
      </form>
    </Form>
    </motion.div>

  );
}
