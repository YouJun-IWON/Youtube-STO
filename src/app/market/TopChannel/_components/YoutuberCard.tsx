'use client';
import { Icons } from '@/components/icons';
import { HeartIcon } from '@/components/svgs/heartIcon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Data } from '@/data/schema';
import { Button, Card, CardBody, CardFooter, Chip } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

import React from 'react';

const YoutuberCard = ({ data, rank }: any) => {
  // const cardStyle = rank < 3 ? "top-rank-style" : "default-style";

  const router = useRouter();

  const cardData: Data = { ...data };

  const price = data.price.toString().replace('.00', '');

  const rate = Number(cardData.rate);

  const priceString = price!.toString().replace('.00', '');
  const formattedPrice = Number(`${priceString}`);

  return (
    <Card
      isBlurred
      className='border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]'
      shadow='md'
      isPressable
      onPress={() => router.push(`market/${data.id}`)}
    >
      <CardBody>
        <div className='data-card'>
          <div className='data-card__content justify-between'>
            <Chip
              variant='shadow'
              classNames={{
                base: 'bg-gradient-to-br text-lg p-4 from-red-500 to-pink-500 border-small border-white/50 shadow-pink-500/30',
                content: 'drop-shadow shadow-black text-white',
              }}
            >
              {cardData.label}
            </Chip>

            <Button
              isIconOnly
              className='text-default-900/60 data-[hover]:bg-foreground/10 translate-y-[2px] translate-x-2'
              radius='full'
              variant='light'
              onPress={() => console.log(cardData.id)}
            >
              <HeartIcon
                className={cardData.like ? '[&>path]:stroke-transparent' : ''}
                fill={cardData.like ? 'red' : 'none'}
              />
            </Button>
          </div>

          <span className='absolute flex min-w-max text-gray font-semibold  -top-[90px] -right-[0px] opacity-20  leading-0'>
            <span className='text-[180px]'>{rank + 1}</span>
          </span>

          <p className='flex text-[22px] font-extrabold'>
            <span className='self-start text-[14px] font-semibold'>￦</span>
            {Number(price).toLocaleString()}
          </p>

          <div className='relative flex flex-col w-full h-40 my-3 object-contain '>
            <Avatar className='flex items-center justify-center self-center h-full w-auto'>
              <AvatarImage src={cardData.image} />
            </Avatar>

            <div className='flex flex-col text-lg justify-center items-center mt-4'>
              {cardData.title}
            </div>
          </div>
          <CardFooter className='mt-5'>
            <div className='relative border-t-2 flex w-full mt-2 flex-col'>
              <div className='"flex mt-2 w-full justify-between'>
                <div className='flex text-lg justify-between items-center gap-2'>
                  <p className='text-[20px]'>
                    {rate == 0 ? (
                      `${formattedPrice * rate} 원`
                    ) : rate > 0 ? (
                      <span
                        style={{ color: 'red' }}
                        className='flex justify-center items-center'
                      >
                        +
                        {Number(
                          ((formattedPrice * rate) / 100).toFixed(0)
                        ).toLocaleString()}{' '}
                        원 (+
                        {rate}
                        %)
                        <Icons.up className='ml-2 h-4 w-3' />
                      </span>
                    ) : (
                      <span
                        style={{ color: 'blue' }}
                        className='flex justify-center items-center'
                      >
                        {Number(
                          ((formattedPrice * rate) / 100).toFixed(0)
                        ).toLocaleString()}{' '}
                        원 ({rate}
                        %)
                        <Icons.down className='ml-2 h-4 w-3' />
                      </span>
                    )}
                  </p>
                  <Icons.chart className='w-4' />
                </div>
              </div>

              <div className='"flex mt-2 w-full justify-between'>
                <div className='flex text-lg justify-between items-center gap-2'>
                  <p className='text-[20px]'>유튜브 조회수</p>
                  <Icons.youtube className='w-5' />
                </div>
              </div>
            </div>
          </CardFooter>
        </div>
      </CardBody>
    </Card>
  );
};

export default YoutuberCard;

// price skyrocketing / plunge
// views rate =

// image
// theme
// name
// price + fluctuation rate %

// views flow : total views + increase or decrease rate%
