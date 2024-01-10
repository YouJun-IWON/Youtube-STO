import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import MyAsset from './holding-rate';
import GreedRate from './greed-rate';
import { RecentSales } from './holding-stos';

const Balance = ({ data }: any) => {
  return (
    <>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <div className='grid gap-4 grid-cols-1 grid-rows-4'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>보유 KRW</CardTitle>
              <svg
                className='w-4 h-4 text-gray-800 dark:text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 18 16'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 1v14h16M4 10l3-4 4 4 5-5m0 0h-3.207M16 5v3.207'
                />
              </svg>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>￦4,000,000</div>
              <p className='text-xs text-muted-foreground'>
                저번 달 대비 +5.0%
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>총 보유자산</CardTitle>
              <svg
                className='w-4 h-4 text-gray-800 dark:text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M11.905 1.316 15.633 6M18 10h-5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h5m0-5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1m0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-3m-6.367-9L7.905 1.316 2.352 6h9.281Z'
                />
              </svg>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>￦5,000,000</div>
              <p className='text-xs text-muted-foreground'>
                저번 달 대비 +2.1%
              </p>
            </CardContent>
          </Card>

          <Card className='row-span-2'>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                나의 상대적 탐욕지표
              </CardTitle>
              <svg
                className='w-5 h-5 text-gray-800 dark:text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 16'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z'
                />
              </svg>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>일반적</div>
              <p className='text-xs mt-2 text-muted-foreground'>
                다른 사용자와 비슷한 매매를 강도를 보이고 있습니다.
              </p>
              <GreedRate />
            </CardContent>
          </Card>
        </div>

        <Card className=' relative col-span-3'>
          <CardHeader>
            <CardTitle>보유 비중</CardTitle>
          </CardHeader>
          <CardContent className='pl-2'>
            <div className='absolute flex flex-col gap-5 inset-0  justify-center ml-20'>
              <span className='flex items-center gap-5'>
                {' '}
                <span className='w-3 h-3 bg-blue-600'></span> <p>KWR</p>
              </span>
              <span className='flex items-center gap-5'>
                {' '}
                <span className='w-3 h-3 bg-green-600'></span> <p>Hoho STO</p>
              </span>
            </div>
            <div className='absolute flex flex-col gap-5 inset-0 items-center justify-center ml-20'>
              <span className='flex items-center gap-5'>
                {' '}
                <span className='w-3 h-3 bg-purple-400'></span>{' '}
                <p>BJ ∙ 크리에이터</p>
              </span>
            </div>
            <MyAsset />
          </CardContent>
        </Card>
        <Card className='col-span-4'>
          <CardHeader>
            <CardTitle>소유한 토큰 리스트</CardTitle>
            {/* <CardDescription>이번 달에 34번의 거래 진행</CardDescription> */}
          </CardHeader>
          <CardContent>
            <RecentSales />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Balance;
