'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Alliance } from '@/constants';

const Partners = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex: any) =>
        prevIndex === Alliance?.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className='mt-20 items-center justify-center flex text-3xl md:text-5xl font-bold md:pb-10 px-10 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent'>
        Partners or Youtubers
      </div>

      <div className='grid grid-cols-3 p-4 md:flex  md:items-center md:justify-center'>
        <AnimatePresence custom={currentImageIndex}>
          {Alliance.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0.8,
                scale: index === currentImageIndex ? 1.4 : 1,
                transition: { duration: 0.5 },
              }}
              className='flex items-center justify-center h-40 w-40'
              exit={{ opacity: 0 }}
              custom={index}
              transition={{ opacity: { duration: 0.5 } }}
            >
              <Image
                src={image.url}
                alt={image.alt}
                width={200}
                height={200}
                className='object-contain h-20 w-20 items-center justify-center flex mx-auto'
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Partners;
