import { motion } from 'framer-motion';
import styles from './style.module.scss';

export default function Button({ isActive, toggleMenu }: any) {
  return (
    <div className={styles.button}>
      <motion.div
        className={styles.slider}
        animate={{ top: isActive ? '-100%' : '0%' }}
        transition={{ duration: 0.5, type: 'tween', ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className={styles.el}
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label='STO 거래 생성하기' />
        </div>
        <div
          className={styles.el}
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label='STO 거래 종료하기' />
        </div>
      </motion.div>
    </div>
  );
}

function PerspectiveText({ label }: any) {
  return (
    <div className={`${styles.perspectiveText} text-white font-bold `}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
