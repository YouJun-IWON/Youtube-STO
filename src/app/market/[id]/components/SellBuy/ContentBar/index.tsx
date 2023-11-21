'use client';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { footerLinks } from './data';
import { perspective, slideIn } from './anim';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import {Buy} from './Buy';
import Sell from './Sell';
import SimpleOrder from './SimpleOrder';
import Receipt from './Receipt';

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selected, isSelected] = useState(0);

  return (
    <div className={styles.nav}>
      <motion.div className={` ${styles.footer}`}>
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.span
              onClick={() => isSelected(i)}
              variants={slideIn}
              custom={i}
              initial='initial'
              animate='enter'
              exit='exit'
              key={`f_${i}`}
              className={`cursor-pointer mb-2  p-2 font-semibold transition-all duration-300 ease-in-out ${
                selected === i
                  ? 'text-white border-b-2 border-b-white p-2 '
                  : 'border-b-2 border-b-black'
              }`}
            >
              {title}
            </motion.span>
          );
        })}
      </motion.div>

      <div className={styles.body}>
        {selected === 0 ? (
          <Buy />
        ) : selected === 1 ? (
          <Sell />
        ) : selected === 2 ? (
          <SimpleOrder />
        ) : (
          <Receipt />
        )}
        
      </div>
    </div>
  );
}
