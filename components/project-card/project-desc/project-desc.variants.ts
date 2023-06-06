import { Variants } from 'framer-motion';

export const projectsVariants: Variants = {
  // less: { height: '100px' },
  less: { height: '430px' },
  more: (showFullText: boolean) =>
    showFullText ? { height: 'auto' } : { height: '430px' },
};
