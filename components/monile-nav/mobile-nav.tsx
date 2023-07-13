import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import {
  ActiveLinkStyle,
  CloseMenuButton,
  StyledMobileNav,
} from '@/styles/components/mobile-nav.styled';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import IconButton from '../ui/icon-button/icon-button';
import { NAV_LIST } from '@/utils/data/navigation.data';

const mobileNavVariants: Variants = {
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

const mobileNavListVariants: Variants = {
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

const mobileNavItemVariants: Variants = {
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

const closeMobileMenuBtnVariants: Variants = {
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

const activeLinkVariants: Variants = {
  hidden: {
    width: '0%',
  },

  show: {
    width: '60%',
  },
};

interface MobileNavProps {
  show: boolean;
  onCloseNav: () => void;
}

const MobileNav: FC<MobileNavProps> = ({ onCloseNav, show }) => {
  const [currentPath, setCurrentPath] = useState('/');
  const router = useRouter();
  const [pageDir, setPageDir] = useState<'rtl' | 'ltr'>(
    router.locale === 'fa' ? 'rtl' : 'ltr'
  );

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router.asPath]);

  useEffect(() => {
    setPageDir(router.locale === 'fa' ? 'rtl' : 'ltr');
  }, [router.locale]);

  return (
    <AnimatePresence>
      <StyledMobileNav
        key="mobileNave123"
        as={motion.nav}
        variants={mobileNavVariants}
        initial={'close'}
        animate={show ? 'open' : 'close'}
        exit={'close'}
        custom={pageDir}
        onClick={onCloseNav}
      >
        <CloseMenuButton
          as={motion.div}
          variants={closeMobileMenuBtnVariants}
          initial="initial"
          animate={show ? 'open' : 'close'}
          direction={pageDir}
        >
          <IconButton onClick={onCloseNav}>
            <Image
              src="/images/icons/close-menu.svg"
              alt="Close Menu"
              width={42}
              height={42}
            />
          </IconButton>
        </CloseMenuButton>

        <motion.ul
          variants={mobileNavListVariants}
          onClick={(e) => e.stopPropagation()}
        >
          {NAV_LIST.map((item) => (
            <motion.li
              key={item.name}
              variants={mobileNavItemVariants}
              onClick={onCloseNav}
              custom={pageDir}
            >
              <Link href={item.href}>{item.name}</Link>

              <AnimatePresence>
                {currentPath === item.href && (
                  <ActiveLinkStyle
                    as={motion.span}
                    variants={activeLinkVariants}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    key={`activeLinkStyle${item.name}`}
                    layoutId="mobileActiveNavItem"
                  />
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </motion.ul>
      </StyledMobileNav>
    </AnimatePresence>
  );
};

export default MobileNav;
