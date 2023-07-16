import { theme } from '@/styles/themes/theme.styled';
import { Variants } from 'framer-motion';

export const aboutItemsVariants: Variants = {
  initial: (dir) => {
    if (dir === 'left') {
      return { x: '100%', opacity: 0 };
    }

    if (dir === 'right') {
      return { x: '-50%', opacity: 0 };
    }

    return { opacity: 0 };
  },

  animate: {
    x: '0',
    opacity: 1,
    transition: { duration: 0.8, delay: 0.2 },
  },

  exit: { opacity: 0 },
};
