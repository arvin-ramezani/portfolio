import { Variants } from 'framer-motion';

export const courseItemVariants: Variants = {
  close: { height: '420px' },
  open: { height: 'fit-content', paddingBottom: '100px' },
};

export const onCourseClickVariants: Variants = {
  initial: { x: 0 },
  animate: { x: [-20, 20, -20, 20, 0], transition: { duration: 0.4 } },
};
