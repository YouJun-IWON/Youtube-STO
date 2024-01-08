import Image from 'next/image';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='container relative flex-col items-center justify-center lg:grid h-[600px] sm:h-[800px] lg:max-w-none lg:grid-cols-2 px-0 '>
      <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
          <div className='absolute inset-0 bg-zinc-900' />
          <div className='relative z-20 flex items-center text-lg font-medium'>
            <svg
              className='w-6 h-6 mr-2 text-gray-100 dark:text-white'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 14'
            >
              <path
                fillRule='evenodd'
                d='M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z'
                clipRule='evenodd'
              />
            </svg>
            Youtube STO
          </div>
          <div className='relative z-20 mt-auto'>
            <blockquote className='space-y-2'>
              <p className='text-lg'>
                &ldquo;여러분의 한계는 오직 여러분의 능력에
                의해서만 정해질 수 있어야 합니다.&rdquo;
              </p>
              <footer className='text-sm'>Team Agenda</footer>
            </blockquote>
          </div>
        </div>
      <div className='relative flex flex-col items-center justify-center bg-gray-50 h-full px-6'>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
