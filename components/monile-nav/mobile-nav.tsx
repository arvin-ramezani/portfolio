import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import {
  ActiveLinkStyle,
  CloseMenuButton,
  StyledMobileNav,
} from '@/styles/components/mobile-nav.styled';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import IconButton from '../ui/icon-button/icon-button';
import { NAV_LIST } from '@/utils/data/navigation.data';
import {
  activeLinkVariants,
  closeMobileMenuBtnVariants,
  mobileNavItemVariants,
  mobileNavListVariants,
  mobileNavVariants,
} from './mobile-nav.variants';

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
  const { t: translator } = useTranslation();

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
              <Link href={item.href}>
                {translator(`common:${item.translatorName}`)}
              </Link>

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
