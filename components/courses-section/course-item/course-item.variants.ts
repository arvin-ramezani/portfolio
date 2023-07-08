import { Variants } from 'framer-motion';

export const courseItemVariants: Variants = {
  close: ({ imageLoading }) => {
    return { height: '420px', opacity: `${imageLoading ? 0.6 : 1}` };
  },

  open: ({ imageLoading }) => {
    return {
      height: 'fit-content',
      paddingBottom: '100px',
      opacity: `${imageLoading ? 0.6 : 1}`,
    };
  },
};

export const onCourseClickVariants: Variants = {
  initial: { x: 0 },
  animate: { x: [-20, 20, -20, 20, 0], transition: { duration: 0.4 } },
};
