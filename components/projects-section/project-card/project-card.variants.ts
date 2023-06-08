import { Variants } from 'framer-motion';

export const projectsVariants: Variants = {
  less: { gridColumn: 'span 1' },
  more: ({
    showMore,
    windowWidth,
  }: {
    showMore: boolean;
    windowWidth: number;
  }) => {
    console.log(windowWidth, 'windowWidth');
    if (windowWidth < 768) return { gridColumn: 'span 1' };
    console.log(windowWidth, 'windowWidth', showMore);

    return showMore ? { gridColumn: 'span 3' } : { gridColumn: 'span 1 ' };
  },
};
