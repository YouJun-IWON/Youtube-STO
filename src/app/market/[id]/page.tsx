import YoutuberInfo from './_components/YoutuberInfo';

import Rule from './_components/Rule';
import OrderBook from './(orderbook)/OrderBook';
import SellBuy from './_components/SellBuy';
import { auth } from '@/auth';

const page = async({ params }: { params: { id: number } }) => {

  const session : any = await auth();
  const user = session.user

  console.log('id', params.id);
  

  return (
    <section>
      <div className='mx-auto max-w-4xl  lg:py-3'>
        <YoutuberInfo />
        <OrderBook />
      </div>
      <SellBuy user={user}/>
    </section>
  );
};

export default page;
