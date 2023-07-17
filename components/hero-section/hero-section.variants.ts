import { Variants } from 'framer-motion';

export const heroTextVariants: Variants = {
  hidden: (pageDir: 'rtl' | 'ltr') => ({
    opacity: 0,
    x: pageDir === 'rtl' ? 200 : -200,
  }),

  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export const heroImageVariants: Variants = {
  hidden: (isMobile: boolean) => ({
    opacity: 0,
    y: isMobile ? 100 : -300,
  }),

  visible: (isMobile: boolean) => {
    return {
      opacity: 1,
      y: 0,

      transition: { stiffness: 200, damping: 20, delay: 0.4 },
    };
  },
};
