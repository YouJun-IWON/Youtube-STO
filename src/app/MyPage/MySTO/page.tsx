import { Metadata } from 'next';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import Overview from './_components/(overview)/Overview';
import Balance from './_components/(balance)/Balance';
import History from './_components/(history)/History';
import OpenOrders from './_components/(openOrders)/OpenOrders';
import PendingDW from './_components/(pendingDW)/PendingDW';
import { auth } from '@/auth';
import { useCurrentUser } from '@/hooks/use-current-user';

export const metadata: Metadata = {
  title: 'My STO',
  description: '자신의 Youtube STO 투자내역을 확인하고 관리하세요.',
};

export default async function DashboardPage() {
  const session = await auth();

  const response = await fetch(
    `http://35.226.148.114:3004/users/balance?userId=${session?.user.id}`
  );


    const data = await response.json()

  console.log('wef', data )

  return (
    <>
      <div className='flex-col md:flex'>
        <div className='flex-1 space-y-4 p-8 pt-6'>
          <div className='flex items-center justify-between space-y-2'>
            <h2 className='text-3xl font-bold tracking-tight'>
              ***님의 STO
              <p className='text-lg font-medium'>
                나의 STO를 확인하고 투자내역을 확인하세요.
              </p>
            </h2>
          </div>
          <Tabs defaultValue='overview' className='space-y-4'>
            <TabsList>
              <TabsTrigger value='overview'>Overview</TabsTrigger>
              <TabsTrigger value='Balance'>보유자산</TabsTrigger>
              <TabsTrigger value='History'>거래내역</TabsTrigger>
              <TabsTrigger value='OpenOrders'>미체결</TabsTrigger>
              <TabsTrigger value='PendingDW'>입출금대기</TabsTrigger>
            </TabsList>
            <TabsContent value='overview' className='space-y-4'>
              <Overview />
            </TabsContent>

            <TabsContent value='Balance' className='space-y-4'>
              <Balance data={data}/>
            </TabsContent>
            <TabsContent value='History' className='space-y-4'>
              <History />
            </TabsContent>
            <TabsContent value='OpenOrders' className='space-y-4'>
              <OpenOrders />
            </TabsContent>
            <TabsContent value='PendingDW' className='space-y-4'>
              <PendingDW />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
