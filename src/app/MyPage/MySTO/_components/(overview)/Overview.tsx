import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { OverviewText } from '@/app/MyPage/MySTO/_components/(overview)/overview-text';
import { RecentSales } from '@/app/MyPage/MySTO/_components/(overview)/recent-sales';

const Overview = () => {
  return (
    <>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>총 수익금</CardTitle>
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
            <div className='text-2xl font-bold'>￦3,034,900</div>
            <p className='text-xs text-muted-foreground'>저번 달 대비 +20.1%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              현재 보유한 자산 총액
            </CardTitle>
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
            <div className='text-2xl font-bold'>￦8,034,900</div>
            <p className='text-xs text-muted-foreground'>
              저번 달 대비 +180.1%
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              현재 보유한 STO 총평가액
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
            <div className='text-2xl font-bold'>￦4,034,900</div>
            <p className='text-xs text-muted-foreground'>저번 달 대비 +19%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              현재 보유한 STO 총수익률
            </CardTitle>
            <svg
              className='w-5 h-5 text-gray-800 dark:text-white'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 21 21'
            >
              <g
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
              >
                <path d='M9 4.025A7.5 7.5 0 1 0 16.975 12H9V4.025Z' />
                <path d='M12.5 1c-.169 0-.334.014-.5.025V9h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 12.5 1Z' />
              </g>
            </svg>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>+57.3%</div>
            <p className='text-xs text-muted-foreground'>저번 달 대비 +19%</p>
          </CardContent>
        </Card>
      </div>
      <div className='grid grid-cols-1  gap-4 md:grid-cols-2 lg:grid-cols-7'>
        <Card className='col-span-4'>
          <CardHeader>
            <CardTitle>월별 수익률</CardTitle>
          </CardHeader>
          <CardContent className='pl-2'>
            <OverviewText />
          </CardContent>
        </Card>
        <Card className='col-span-3'>
          <CardHeader>
            <CardTitle>총 수익금 TOP 5 STO</CardTitle>
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

export default Overview;
