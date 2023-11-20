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
          <div className='min-h-[300px] -rotate-90'>
            <ResponsiveContainer width='100%' height='100%'>
              <BarChart width={150} height={100} data={askData}>
                <Bar dataKey='uv' fill='#bae6fd' />
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
            <p >8.4m</p>
            </span>
            <span className='flex justify-between'>
            <p className='text-slate-500'>저번주</p>
            <p >7.8m</p>
            </span>
          </div>


          <div className='grid grid-rows-6 py-2.5 gap-2.5 -mt-2'>
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
          </div>


          <div className='min-h-[300px] rotate-90 -mt-2'>
            <ResponsiveContainer width='100%' height='100%'>
              <BarChart width={150} height={100} data={askData}>
                <Bar dataKey='uv' fill='#fecaca' />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Transaction;
