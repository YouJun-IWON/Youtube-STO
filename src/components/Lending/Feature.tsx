import { features } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Feature = () => {
  return (
    <div className='flex-col py-10 items-center justify-center'>
      <div
        className='
            text-3xl
            flex
            justify-center
            md:text-5xl
            font-bold
            pt-5
            pb-10
            bg-gradient-to-r
            from-orange-700
            to-red-600
            bg-clip-text
            text-transparent

            '
      >
        상품 특징
      </div>

      <div className='grid grid-cols-1 p-4 md:grid md:grid-cols-3 gap-4 md:px-40'>
        {features.map((feature, index) => (
          <div
            key={index}
            className='flex-col space-y-6 pb-10 border
                    
                    p-8 rounded-xl items-center justify-center w-full hover:scale-105 transform transition-all duration-500 ease-in-out
                    '
          >
            <div
              className='
                        text-gray-600 text-3xl font-bold
                        '
            >
              <Image
                src={feature.image}
                alt={feature.alt}
                width={1000}
                height={1000}
                className='object-contain h-20 w-20 items-center justify-center flex mb-10'
              />
              <div>
                <div
                  className='text-2xl pb-4 bg-gradient-to-t
                                from-black
                                to-gray-400
                                bg-clip-text
                                text-transparent

                                
                                
                                '
                >
                  {feature.name}
                </div>

                <div className='bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent text-lg'>
                  {feature.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
