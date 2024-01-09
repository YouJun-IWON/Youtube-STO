import TopChannel from './TopChannel/page';
import TotalPage from './TotalChannel/page';
import Hero from './_components/Hero';
import { examples } from '@/test/example';
import { dataSchema } from '@/test/data-schema';
import { promises as fs } from 'fs';
import path from 'path';
import { z } from 'zod';
import LikeChannel from './LikeChannel/page';

// take data using SSR
async function getData() {
  // const data = await fs.readFile(
  //   path.join(process.cwd(), 'src/app/market/TotalChannel/data/data.json')
  // );

  // const data = JSON.parse(examples.toString());

  return z.array(dataSchema).parse(examples);
}

const Market = async () => {
  const data = await getData();

  return (
    <div>
      <Hero />
      <TopChannel data={data} />
      <LikeChannel data={data} />
      <TotalPage data={data} />
    </div>
  );
};

export default Market;
