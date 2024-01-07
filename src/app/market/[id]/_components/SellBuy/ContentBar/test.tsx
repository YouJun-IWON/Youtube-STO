// import styles from './style.module.scss';
// import { motion } from 'framer-motion';
// import { links, footerLinks } from './data';
// import { perspective, slideIn } from './anim';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// export default function index() {
//   return (
//     <div className={styles.nav}>
//       <motion.div className={styles.footer}>
//         {footerLinks.map((link, i) => {
//           const { title, href } = link;
//           return (
//             <motion.span
//               variants={slideIn}
//               custom={i}
//               initial='initial'
//               animate='enter'
//               exit='exit'
//               key={`f_${i}`}
//             >
//               {title}
//             </motion.span>
//           );
//         })}
//       </motion.div>

//       <div className={styles.body}>
//         {links.map((link, i) => {
//           const { title, href } = link;

//           if (i == 1) {
//             return (
//               <div key={`b_${i}`} className={styles.linkContainer}>
//                 <motion.div
//                   // href={href}
//                   custom={i}
//                   variants={perspective}
//                   initial='initial'
//                   animate='enter'
//                   exit='exit'
//                 >
//                   <a>{title}</a>
//                 </motion.div>
//               </div>
//             );
//           }

//           if (i == 2) {
//             return (
//               <div key={`b_${i}`} className={styles.linkContainer}>
//                 <motion.div
//                   // href={href}
//                   custom={i}
//                   variants={perspective}
//                   initial='initial'
//                   animate='enter'
//                   exit='exit'
//                 >
//                   <a>{title}</a>
//                 </motion.div>
//               </div>
//             );
//           }


//           if (i == 3) {
//             return (
//               <div key={`b_${i}`} className={styles.linkContainer}>
//                 <motion.div
//                   // href={href}
//                   custom={i}
//                   variants={perspective}
//                   initial='initial'
//                   animate='enter'
//                   exit='exit'
//                 >
//                   <a>{title}</a>
//                 </motion.div>
//               </div>
//             );
//           }


//         })}
//       </div>
//     </div>
//   );
// }
