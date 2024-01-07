'use client';
import { Icons } from '@/components/icons';
import Link from 'next/link';
import { Image, Button, Chip } from '@nextui-org/react';
import { HeartIcon } from '@/components/svgs/heartIcon';
import React from 'react';
import { orderbookExample } from '@/data/orderBookExample';

const YoutuberInfo = () => {
  const [liked, setLiked] = React.useState(false);

  return (
    <section className='border-b-3 pb-8'>
      <Link
        href='/market'
        className='mb-2 text-sm leading-none w-fit text-gray-600 md:text-md flex items-center'
      >
        <Icons.leftarrow className='text-gray-800 w-5 h-5' />
        채널 마켓
      </Link>

      <section>
        <div className='grid md:grid-cols-12 items-center justify-center gap-4'>
          <div className='col-span-3 p-2'>
            <Image
              alt='Youtuber Image'
              className='object-cover'
              height={200}
              width='100%'
              src={orderbookExample.image}
            />
          </div>

          <div className='flex flex-col col-span-6 md:col-span-9'>
            <div className='flex justify-between items-start'>
              <div className='flex flex-col gap-0'>
                <span className='text-lg flex w-fit text-foreground/80 gap-1 items-center'>
                  <Icons.youtube />
                  {orderbookExample.label}
                </span>

                <h3 className='font-semibold text-4xl'>
                  {orderbookExample.title}
                </h3>
              </div>

              <div className='flex items-center justify-center gap-4'>
                <Chip radius='sm' className='rtl bg-green-200 text-green-800'>
                  판매중
                </Chip>

                <div className='flex flex-col justify-center items-center '>
                  <Button
                    isIconOnly
                    className='text-default-900/60 data-[hover]:bg-foreground/10 flex'
                    radius='full'
                    variant='light'
                    onPress={() => setLiked((v) => !v)}
                  >
                    <HeartIcon
                      className={
                        orderbookExample.like
                          ? '[&>path]:stroke-transparent'
                          : ''
                      }
                      fill={orderbookExample.like ? 'red' : 'none'}
                    />
                  </Button>

                  <span className='-mt-2 text-red-500'>200</span>
                </div>
              </div>
            </div>

            <div className='py-3 flex items-center text-md text-slate-500 gap-2'>
              <Icons.subscriber />
              <span className='text-sm text-slate-500 '>구독자 300,000 명</span>

              <Icons.diamond />
              <span className='text-sm text-slate-500 '>
                가치평가금액 16,106,822 ￦
              </span>
            </div>

            <div className='flex border-t-2 flex-col mt-3 gap-1'>
              <div className='flex mt-3 items-center justify-between'>
                <span className='ltr:ml-3 items-center flex gap-3'>
                  <span className='text-2xl flex font-semibold'>
                    21,050<p className='font-normal'>&nbsp;원</p>
                  </span>

                  <span className='text-lg flex text-red-500 items-center gap-1 '>
                    <Icons.up className='ml-2 h-4 w-3' />
                    2,050<p className='font-normal'>+(1.9)%</p>
                  </span>

                  <p className='text-sm text-slate-400'>11월 18일 기준</p>
                </span>

                <span className='text-small text-foreground/50 ltl rtl:mr-3'>
                  등록일 : 2023.10.25
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default YoutuberInfo;
