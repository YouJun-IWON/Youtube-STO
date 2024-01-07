'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Transaction from './Transaction';

import BasicInfo from './BasicInfo';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import Rule from '../_components/Rule';
import Deal from './Deal';
import FilterDeal from './FilterDeal';

const OrderBook = () => {
  const MarketPrice = dynamic(
    // @ts-ignore
    () => import('./MarketPrice'),
    { loading: () => <p>loading...</p>, ssr: false }
  );

  return (
    <div>
      <Tabs defaultValue='transaction'>
        <TabsList className='bg-transparent grid grid-cols-3 '>
          <TabsTrigger
            className='border-r-1 border-b-2 rounded-none data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-red-500'
            value='transaction'
          >
            거래
          </TabsTrigger>
          <TabsTrigger
            className='border-r-1 border-b-2 rounded-none data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-red-500'
            value='marketprice'
          >
            시세
          </TabsTrigger>
          <TabsTrigger
            className=' border-b-2 rounded-none data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-red-500'
            value='basicinfo'
          >
            기본 정보
          </TabsTrigger>
        </TabsList>
        <TabsContent value='transaction'>
          <Transaction />
          <Rule />
        </TabsContent>
        <TabsContent value='marketprice'>
          <MarketPrice />
          <div
            id='chartcontrols'
            style={{ height: 'auto', padding: '5px 45px 0 15px' }}
          ></div>
          <div id='chartdiv' style={{ width: '100%', height: '500px' }}></div>
          <FilterDeal />
          <Deal />
        </TabsContent>
        <TabsContent value='basicinfo'>
          <BasicInfo />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OrderBook;
