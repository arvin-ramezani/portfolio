import { Variants } from 'framer-motion';

export const projectsDescVariants: Variants = {
  less: { height: '100px' },
  more: (showFullText: boolean) => {
    return showFullText ? { height: 'auto' } : { height: '100px' };
  },
};
