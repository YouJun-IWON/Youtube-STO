import { Metadata } from 'next';

import { columns } from './_components/columns';
import { DataTable } from './_components/data-table';

export const metadata: Metadata = {
  title: "Youtuber's STO Market",
  description: 'A page where you can buy and sell YouTubers’ STOs.',
};

export default async function TotalPage({ data }: any) {
  const isDataEmpty = !Array.isArray(data) || data?.length < 1 || !data;

  return (
    <>
      {!isDataEmpty ? (
        <div className=' h-full flex-1 flex-col space-y-8 p-8 md:flex'>
          <div className='flex items-center justify-start space-y-2'>
            <div>
              <h2 className='text-2xl font-bold tracking-tight'>전체 채널</h2>
              <p className='text-muted-foreground'>
                다양한 조건으로 검색하고 원하는 유튜브 채널을 찾아보세요!
              </p>
            </div>
          </div>
          <DataTable data={data} columns={columns} />
        </div>
      ) : (
        <div className='home__error-container'>No results</div>
      )}
    </>
  );
}
