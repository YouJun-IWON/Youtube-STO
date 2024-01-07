import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from '@nextui-org/react';
import { HeartIcon } from '@/components/svgs/heartIcon';

export default function LikeCard({data, count} : any) {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <>
    {
      count == 7 ? <Card isPressable onPress={() => console.log("item pressed")} className='flex items-center justify-center'>더보기...</Card> :   <Card className='max-w-[340px]'>
      <CardHeader className='justify-between'>
        <div className='flex gap-5'>
          <Avatar
            isBordered
            radius='full'
            size='md'
            src={data.image}
          />
          <div className='flex flex-col gap-1 items-start justify-center'>
            <h4 className='text-small font-semibold leading-none text-default-600'>
              {data.title}
            </h4>
            <h5 className='text-small tracking-tight text-default-400'>
              {data.label}
            </h5>
          </div>
        </div>
       
        <Button
              isIconOnly
              className='text-default-900/60 data-[hover]:bg-foreground/10 translate-y-[2px] translate-x-2'
              radius='full'
              variant='light'
              onPress={() => console.log(data.id)}
            >
              <HeartIcon
                className={data.like ? '[&>path]:stroke-transparent' : ''}
                fill={data.like ? 'red' : 'none'}
              />
            </Button>
      </CardHeader>
      <CardBody className='px-3 py-0 text-small text-default-400'>
        
        <span className='pt-2'>
          #유튜브 채널 링크
          {/* <span className='py-2' aria-label='computer' role='img'>
            
          </span> */}
        </span>
      </CardBody>
      <CardFooter className='gap-3'>
        <div className='flex gap-1'>
          <p className='font-semibold text-default-400 text-small'>4</p>
          <p className=' text-default-400 text-small'>총 찜한 횟수</p>
        </div>
        <div className='flex gap-1'>
          <p className='font-semibold text-default-400 text-small'>97.1K</p>
          <p className='text-default-400 text-small'>구독자</p>
        </div>
      </CardFooter>
    </Card>
    }
    </>
  
  );
}
