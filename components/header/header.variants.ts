import { theme } from '@/styles/theme.styled';
import { Variants } from 'framer-motion';

export const HeaderItemsVariants: Variants = {
  initial: { background: `${theme.colors.primary}` },
  animate: {
    background: `${theme.backgroundColors.primary}`,
    transition: { duration: 1.4 },
  },
};
