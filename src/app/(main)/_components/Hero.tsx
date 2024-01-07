'use client'
import { useRouter } from 'next/navigation'

const Hero = () => {

  const router = useRouter()


  return <section className='md:py-20 py-10 bg-gradient-to-r from bg-gray-100 to-gray-200 space-y-10'>

    <div className='container mx-auto text-center'>

      <div className='text-6xl flex justify-center font-bold md:px-20 pb-10 text-gradient bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent'>
        Build a STO of Youtuber and start selling or buying in seconds
      </div>

      <p className='text-lg md:text-xl mb-10 bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent font-bold'>
    유튜버와 구독자 / 시청자 간의 새로운 연결고리, 그리고 성장의 기회 

      </p>

      <div className='flex gap-4 justify-center '>
      <button onClick={() => router.push('/applySTO')} className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
<span className="absolute inset-0 w-full h-full bg-gradient-to-br from-red-600 via-purple-600 to-pink-700"></span>
<span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
<span className="relative text-white">나만의 STO 만들기</span>
</button>

<button onClick={() => router.push('/market')} className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
<span className="absolute inset-0 w-full h-full bg-gradient-to-br from-pink-700 via-blue-600 to-red-500"></span>
<span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
<span className="relative text-white">STO 마켓</span>
</button>

      </div>
      
    </div>
  </section>;
};

export default Hero;
