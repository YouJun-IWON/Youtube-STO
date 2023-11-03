'use client';

import { HiDownload } from 'react-icons/hi';
import { features } from '@/constants';
import Image from 'next/image';

const Second = () => {
  return (
    <div className='py-10'>
      <div
        className='
text-center
flex-col
items-center
flex  justify-center pb-10
    
    '
      >
        <div className='p-5 justify-center '>
          <p className='p-3 text-lg font-bold text-indigo-600'>What is</p>
          <div
            className='
            bg-gradient-to-r
            from-red-800
            to-red-300
            bg-clip-text
            text-transparent
            text-4xl
            md:text-6xl
            font-bold
            pb-10
            
            '
          >
            유튜브 채널 증권이 뭐에요?
          </div>
          <div className='text-2xl mb-8'>
            옥션 참여를 위해 꼭 알아야 하는 채널 수익 증권
          </div>
        </div>
        <div className='text-4xl font-semibold mb-8'>
          수익 분배 / 정산 방식에 대한 고지
        </div>

        <Image
          alt='image'
          src='/images/examples/1.jpg'
          width={500}
          height={500}
          className='rounded-xl md:w-2/5 p-4 md:p-0 '
        />
        <a
          href='/Youtube-STO.pdf'
          className='mt-10 gap-2 items-center bg-red-500 text-white p-4 justify-center flex md:w-1/3 rounded-full hover:bg-red-600'
          target='_blank'
        >
          채널 저작권 투자 백서 다운로드
          <HiDownload className='opacity-100' />
        </a>
      </div>
    </div>
  );
};

export default Second;
