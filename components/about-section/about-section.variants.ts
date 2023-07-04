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

export const aboutTextBlockVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.8, delay: 0.8, staggerChildren: 0.1 },
  },
};

export const aboutTextItemsVariants: Variants = {
  initial: {
    color: `${theme.colors.textSecondary}`,
    textShadow: '0 0 0px ${theme.colors.textPrimary}',
  },
  animate: {
    color: `${theme.colors.textPrimary}`,
    textShadow: `0 0 2px ${theme.colors.textPrimary}`,
  },
};

export const styledBulletVariants: Variants = {
  initial: {
    borderRadius: 0,
    scale: 1,
    backgroundColor: `${theme.colors.textSecondary}`,
    boxShadow: '0 0 0px 0px ${theme.colors.textPrimary}',
    margin: '0 0.5rem',
  },

  animate: {
    borderRadius: '50%',
    scale: 1.3,
    backgroundColor: `${theme.colors.textPrimary}`,
    boxShadow: `0 0 3px 1px ${theme.colors.textPrimary}`,
    marginRight: '0 0.7rem',
  },
};
