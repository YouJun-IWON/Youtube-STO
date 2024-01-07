import YoutuberInfo from './_components/YoutuberInfo';

import Rule from './_components/Rule';
import OrderBook from './(orderbook)/OrderBook';
import SellBuy from './_components/SellBuy';

const page = ({ params }: { params: { id: number } }) => {
  console.log('id', params.id);

  return (
    <section>
      <div className='mx-auto max-w-4xl  lg:py-3'>
        <YoutuberInfo />
        <OrderBook />
      </div>
      <SellBuy />
    </section>
  );
};

export default page;
