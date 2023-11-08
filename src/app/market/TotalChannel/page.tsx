import { promises as fs } from 'fs';
import path from 'path';
import { Metadata } from 'next';
import Image from 'next/image';
import { z } from 'zod';

import { columns } from './components/columns';
import { DataTable } from './components/data-table';

import { taskSchema } from './data/schema';


export const metadata: Metadata = {
  title: "Youtuber's STO Market",
  description: 'A page where you can buy and sell YouTubers’ STOs.',
};

// Simulate a database read for tasks.
async function getTasks() {

  const data = await fs.readFile(
    path.join(process.cwd(), 'src/app/market/TotalChannel/data/tasks.json')
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function TotalPage() {
  const tasks = await getTasks();

  return (
    <>
      {/* <div className='md:hidden'>
        <div>제작중...</div>
      </div> */}
      <div className=' h-full flex-1 flex-col space-y-8 p-8 md:flex'>
        <div className='flex items-center justify-start space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>전체 채널</h2>
            <p className='text-muted-foreground'>
              다양한 조건으로 검색하고 원하는 유튜브 채널을 찾아보세요!
            </p>
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
