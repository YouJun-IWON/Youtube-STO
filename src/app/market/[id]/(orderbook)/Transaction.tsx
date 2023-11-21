'use client';

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { askData } from './example';

const Transaction = () => {
  return (
    <div>
      <div className='mt-3'>
        <div className='grid grid-cols-3 h-7 text-center text-small border-b-1 border-b-gray-400'>
          <div className='border-r-2 border-r-gray-400 text-red-600'>
            판매 수량 20
          </div>

          <div className='border-r-2 border-r-gray-400'>가격</div>

          <div className='text-blue-600'>구매 수량 9</div>
        </div>

        <div className='grid grid-cols-3 text-center  border-b-1 border-b-gray-400'>
          <div className='min-h-[300px]'>
            <ResponsiveContainer width='100%' height='100%'>
              <BarChart
                layout='vertical'
                width={150}
                height={100}
                data={askData}
              >
                <XAxis
                  reversed={true}
                  type='number'
                  width={0}
                  height={0}
                  className='hidden'
                />
                <YAxis
                  type='category'
                  className='hidden'
                  width={0}
                  height={0}
                />
                <Bar
                  dataKey='uv'
                  fill='#bae6fd'
                  label={{ position: 'insideLeft' }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className='grid grid-rows-6 py-2.5 gap-2.5 '>
            <div className='row-span-1 bg-sky-200  text-red-500 font-light flex items-center justify-center'>
              23,700 + 1.9%
            </div>
            <div className='row-span-1 bg-sky-200  text-red-500 font-light flex items-center justify-center'>
              23,700 + 1.9%
            </div>
            <div className='row-span-1 bg-sky-200  text-red-500 font-light flex items-center justify-center'>
              23,700 + 1.9%
            </div>
            <div className='row-span-1 bg-sky-200  text-red-500 font-light flex items-center justify-center'>
              23,700 + 1.9%
            </div>
            <div className='row-span-1 bg-sky-200  text-red-500 font-light flex items-center justify-center'>
              23,700 + 1.9%
            </div>
            <div className='row-span-1 bg-sky-200  text-red-500 font-light flex items-center justify-center'>
              23,700 + 1.9%
            </div>
          </div>

          <div className='p-4 grid grid-cols-1 content-end'>
            <span className='flex justify-between'>
              <p className='text-slate-500'>상한가</p>
              <p className='text-red-500'>28,400</p>
            </span>
            <span className='flex justify-between'>
              <p className='text-slate-500'>최고가</p>
              <p className='text-red-500'>22,000</p>
            </span>
            <br />
            <span className='flex justify-between'>
              <p className='text-slate-500'>하한가</p>
              <p className='text-blue-500'>28,400</p>
            </span>
            <span className='flex justify-between'>
              <p className='text-slate-500'>최저가</p>
              <p className='text-blue-500'>28,400</p>
            </span>
            <span className='flex justify-between'>
              <p className='text-slate-500'>전일종가</p>
              <p className=''>28,400</p>
            </span>
          </div>

          <div className='p-4 -mt-2'>
            <span className='flex '>
              <p className='text-slate-500'>최근 거래량</p>
            </span>
            <span className='flex justify-between'>
              <p className='text-slate-500'>이번주</p>
              <p>8.4m</p>
            </span>
            <span className='flex justify-between'>
              <p className='text-slate-500'>저번주</p>
              <p>7.8m</p>
            </span>
          </div>

          <div className='relative grid grid-rows-6 py-2.5 gap-2.5 -mt-2'>
            <div className='row-span-1 bg-red-200  text-blue-600 font-light flex items-center justify-center'>
              23,700 + 1.9%
            </div>
            <div className='row-span-1 bg-red-200  text-blue-600 font-light flex items-center justify-center'>
              23,700 + 1.9%
            </div>
            <div className='row-span-1 bg-red-200  text-blue-600 font-light flex items-center justify-center'>
              23,700 + 1.9%
            </div>
            <div className='row-span-1 bg-red-200  text-blue-600 font-light flex items-center justify-center'>
              23,700 + 1.9%
            </div>
            <div className='row-span-1 bg-red-200  text-blue-600 font-light flex items-center justify-center'>
              23,700 + 1.9%
            </div>
            <div className='row-span-1 bg-red-200  text-blue-600 font-light flex items-center justify-center'>
              23,700 + 1.9%
            </div>
            {/* <span className='absolute text-end mt-4 translate-x-15 gap-2 inset-0 grid grid-rows-6'>
                <p>40</p>
                <p>30</p>
                <p>20</p>
                <p>28</p>
                <p>19</p>
                <p>24</p>
            </span> */}
          </div>

          <div className='min-h-[300px] -mt-2 '>
            <ResponsiveContainer width='100%' height='100%'>
              <BarChart
                layout='vertical'
                width={150}
                height={100}
                data={askData}
              >
                <XAxis type='number' width={0} height={0} className='hidden' />
                <YAxis
                  type='category'
                  className='hidden'
                  width={0}
                  height={0}
                />
                <Bar
                  dataKey='uv'
                  fill='#fecaca'
                  label={{ position: 'insideLeft' }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className='flex flex-col p-3 border-b-1 border-b-gray-500 space-y-2'>
          <span className='flex justify-between'>
            <p>평균 구매 가격</p>
            <p>0 ￦</p>
          </span>

          <span className='flex justify-between'>
            <p>보유 수량 (매도 가능 수량)</p>
            <p>0주 (0주)</p>
          </span>

          <span className='flex justify-between'>
            <p>미체결</p>
            <span className='rtl flex gap-3'>
              <p className='text-red-500'>0주(구매)</p>{' '}
              <p className='text-blue-500'>0주(판매)</p>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
