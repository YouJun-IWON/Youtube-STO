import React from 'react';

const Hero = () => {
  return (
    <section className='bg-white  '>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative'>
        <a
          href='#'
          className='inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-red-700 bg-red-100 rounded-full dark:bg-red-900 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800'
        >
          <span className='text-xs bg-red-600 rounded-full text-white px-4 py-1.5 mr-3'>
            공지
          </span>{' '}
          <span className='text-sm font-medium'>
            새로운 유튜버 STO 상장 리스트 업데이트!
          </span>
          <svg
            className='w-2.5 h-2.5 ml-2'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 6 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 9 4-4-4-4'
            />
          </svg>
        </a>
        <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
          친근하고 무궁한 가능성에 투자하세요
        </h1>
        <p className='mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200'>
          ~~~~~ 법에 준수하여 여러분들의 투자를 안전하게 보호합니다.
        </p>
      </div>
    </section>
  );
};

export default Hero;
