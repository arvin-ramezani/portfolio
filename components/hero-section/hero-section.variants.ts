import { Variants } from 'framer-motion';

export const heroTextVariants: Variants = {
  hidden: (pageDir: 'rtl' | 'ltr') => ({
    opacity: 0,
    x: pageDir === 'rtl' ? 200 : -200,
  }),

  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export const heroImageVariants: Variants = {
  hidden: (pageDir: 'rtl' | 'ltr') => ({
    opacity: 0,
    rotate: 0,
    x: pageDir === 'rtl' ? -400 : 400,
  }),

  visible: (pageDir: 'rtl' | 'ltr') => {
    if (pageDir === 'rtl') {
      return {
        opacity: 1,
        x: [-400, 0],
        rotate: [0, 360],

        transition: { duration: 0.8, delay: 0.4 },
      };
    }

    return {
      opacity: 1,
      x: [400, 0],
      rotate: [0, -360],

      transition: { duration: 0.8, delay: 0.4 },
    };
  },

  // visible: (pageDir: 'rtl' | 'ltr') => ({
  //   opacity: 1,
  //   x: 0,

  //   rotate: pageDir === 'rtl' ? [0, 360] : [0, -360],

  //   transition: { duration: 0.8 },
  // }),
};
