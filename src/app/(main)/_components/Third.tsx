import Image from 'next/image';

const Third = () => {
  return (
    <div
      className='
    flex
    p-5    md:p-30
    flex-col md:flex-row md:justify-evenly
    '
    >
      <div className='flex-col md:flex-row gap-6 md:px-10 flex'>
        <div className='md:w-2/3 w-full'>
          <Image
            className='rounded-xl'
            src='/images/examples/2.jpg'
            width={1000}
            height={1000}
            alt='image'
          ></Image>
        </div>

        <div className='flex-col border p-4 rounded-xl md:w-2/5'>
          <div
            className='text-4xl flex justify-center text-center
                md:text-6xl
                bg-gradient-to-l
                from-orange-300
                to-red-700
                bg-clip-text
                font-bold
                text-transparent
                
                
                '
          >
            작동 방식 및 순서
          </div>

          <div className='md:px-20 space-y-6 flex-col items-center justify-center'>
            <div className='text-lg pt-10 flex gap-4'>
              <Image
                src='/images/logo/icon-store.png'
                alt='feature-1'
                width={70}
                height={70}
              />
              <div className='flex flex-col gap-2'>
                Choose from a variety of store templates to get started. And
                customize your store to fit your brand.
              </div>
            </div>

            <div className='flex-col'>
              <div className='text-lg flex items-center gap-5'>
                <Image
                  src='/images/logo/icon-product.png'
                  alt='feature-1'
                  width={70}
                  height={70}
                />
                <div>
                  Add unlimited products and variations. And manage your
                  inventory with ease.
                </div>
              </div>
            </div>

            <div className='flex-col'>
              <div className='text-lg flex items-center gap-5'>
                <Image
                  src='/images/logo/icon-analytics.png'
                  alt='feature-1'
                  width={70}
                  height={70}
                />
                <div>
                  Gain valuable insights into your customers and products with
                  our analytics tools.
                </div>
              </div>
            </div>

            <div className='flex-col'>
              <div className='text-lg flex items-center gap-5'>
                <Image
                  src='/images/logo/icon-shield.png'
                  alt='feature-1'
                  width={70}
                  height={70}
                />
                <div>
                  Best in class security to protect your data and your
                  customers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
