import { Variants } from 'framer-motion';

export const footerContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    // transition: {
    //   when: 'beforeChildren',
    //   staggerChildren: 0.2,
    // },
  },
};

export const footerItemsVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      type: 'spring',
      stiffness: 250,
      damping: 10,
    },
  },
};
