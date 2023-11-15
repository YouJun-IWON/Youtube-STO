'use client'
import React, { useEffect, useState } from 'react';

import CustomFilter from './components/CustomFilter';
import { Data } from '@/data/schema';
import YoutuberCard from './components/YoutuberCard';

const TopChannel = ({ data }: any) => {
  const isDataEmpty = !Array.isArray(data) || data.length < 1 || !data;

  const [selected, setSelected] = React.useState(0);
  console.log("CustomFilter", selected)

  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    if (selected == 0) {
      setSortedData(data.sort((a :any, b: any) => b.rate - a.rate).slice(0, 8));
    } else if (selected == 1) {
      const negativeRateData = data.filter((d: any) => d.rate < 0);
      setSortedData(negativeRateData.sort((a: any, b: any) => a.rate - b.rate).slice(0, 8));
    }
  }, [selected, data]);
//! top rand 적용시키기 

  return (
    <div className='mt-12 padding-x padding-y max-width '>
      <div className='home__text-container'>
        <h1 className='text-4xl font-extrabold'>실시간 Top 8</h1>

        <p>시장에서 크게 주목받고 있는 유튜버 STO를 확인해보세요!</p>
      </div>

      
        <CustomFilter selected={selected} setSelected={setSelected}/>
        
     

      {!isDataEmpty ? (
        <section>
          <div className='home__data-wrapper'>
            {sortedData?.map((data: Data, index) => (
              <YoutuberCard data={data} key={index} rank={index}/>
            ))}
          </div>
        </section>
      ) : (
        <div className='home__error-container'>No results</div>
      )}
    </div>
  );
};

export default TopChannel;
