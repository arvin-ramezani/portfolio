import { Variants } from 'framer-motion';

export const projectsDescVariants: Variants = {
  less: { height: '200px' },
  more: (showFullText: boolean) =>
    showFullText ? { height: 'auto' } : { height: '200px' },
};
