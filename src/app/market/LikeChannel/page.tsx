'use client'
import { Data } from '@/data/schema';
import React, { useState } from 'react'
import LikeCard from './components/LikeCard';

const LikeChannel = ({data}: any) => {

  const isDataEmpty = !Array.isArray(data) || data?.length < 1 || !data;


  const [sortedData, setSortedData] = useState([]);

  const likedData = data?.filter((d: any) => d.like == 1).slice(0, 8);

  

  return (
    <div className='mt-12 padding-x padding-y max-width '>
      <div className='home__text-container'>
        <h1 className='text-4xl font-extrabold'>내가 찜한 채널 목록</h1>

        
      </div>
        
     

      {!isDataEmpty ? (
        <section>
          <div className='home__data-wrapper'>
            {likedData?.map((data: Data, index: any) => (
              <LikeCard data={data} key={index} count={index} />
            ))}
          </div>
        </section>
      ) : (
        <div className='home__error-container'>No results</div>
      )}
    </div>
  );
}

export default LikeChannel