import YoutuberInfo from './components/YoutuberInfo';

import Rule from './components/Rule';
import OrderBook from './(orderbook)/OrderBook';

const page = ({ params }: { params: { id: number } }) => {
  console.log('id', params.id);

  return (
    <section>
      <div className='mx-auto max-w-4xl  lg:py-3'>
        <YoutuberInfo />
        <OrderBook />
        
      </div>
    </section>
  );
};

export default page;
