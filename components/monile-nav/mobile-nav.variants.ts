import { Variants } from 'framer-motion';

export const mobileNavVariants: Variants = {
  close: (direction: 'rtl' | 'ltr') => ({
    opacity: 0,
    background: '#0000000',
    display: 'none',

    transition: { when: 'afterChildren', staggerChildren: 0.3, duration: 0.8 },
  }),

  open: {
    opacity: 1,
    display: 'block',
    background: '#000000cc',

    transition: { when: 'beforeChildren', staggerChildren: 0.3 },
  },
};

export const mobileNavListVariants: Variants = {
  close: {
    opacity: 0,
    width: '0rem',
  },

  open: {
    opacity: 1,
    width: '20rem',
    transition: { when: 'beforeChildren', staggerChildren: 0.3 },
  },
};

export const mobileNavItemVariants: Variants = {
  close: (direction: 'ltr' | 'rtl') => {
    return {
      opacity: 0,
      scale: 0,
    };
  },

  open: {
    opacity: 1,
    scale: 1,
  },
};

export const closeMobileMenuBtnVariants: Variants = {
  close: {
    opacity: 0,
    scale: 1,
  },

  open: {
    opacity: 1,
    scale: 1,
  },

  tap: {
    scale: 0,
  },
};

export const activeLinkVariants: Variants = {
  hidden: {
    width: '0%',
  },

  show: {
    width: '60%',
  },
};
