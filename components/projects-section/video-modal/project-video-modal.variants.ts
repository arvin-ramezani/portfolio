import { Variants } from 'framer-motion';

export const videoModalVariants: Variants = {
  hidden: { opacity: 0, width: '100vw', height: '0' },
  visible: {
    opacity: 1,
    height: '100vh',
    transition: {
      when: 'beforeChildren',
      duration: 0.6,
      staggerChildren: 0.5,
      staggerDirection: -1,
    },
  },
};

export const videoVariants: Variants = {
  initial: { scale: 0 },
  animate: { scale: 1, transition: { delay: 0.4 } },
};
