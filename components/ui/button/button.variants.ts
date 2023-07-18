import { Variants } from 'framer-motion';

export const buttonVariants: Variants = {
  initial: {
    opacity: 1,
  },
  disabled: {
    opacity: 0.4,
  },
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
  },
};
