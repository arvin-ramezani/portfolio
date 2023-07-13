import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import {
  AnimatePresence,
  Variants,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';

import {
  Logo,
  MobileNavButton,
  StyledHeader,
} from '@/styles/components/header.styled';
import { theme } from '@/styles/themes/theme.styled';
import LangSelectBox from '../lang-select-box/lang-select-box';
import { Container } from '@/styles/global.styled';
import { HeaderItemsVariants } from './header.variants';
import MobileNav from '../monile-nav/mobile-nav';
import Navbar from '../navbar/navbar';

const mobileNavBtnVariants: Variants = {
  initial: {
    scale: 1,
  },

  tap: {
    scale: 0,
  },
};

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const router = useRouter();
  const [pageDir, setPageDir] = useState<'rtl' | 'ltr'>(
    router.locale === 'fa' ? 'rtl' : 'ltr'
  );
  const { t: translator } = useTranslation();

  const { scrollY } = useScroll();
  const bgColor = useTransform(
    scrollY,
    [0, 50],
    ['transparent', theme.backgroundColors.primary]
  );

  const shadow = useTransform(
    scrollY,
    [0, 50],
    ['none', `0 4px 6px 2px #03142c`]
  );

  const onCloseMobileNav = () => {
    console.log('close clicked');
    setShowMobileNav(false);
  };

  useEffect(() => {
    setPageDir(router.locale === 'fa' ? 'rtl' : 'ltr');
  }, [router.locale]);

  return (
    <StyledHeader
      variants={HeaderItemsVariants}
      initial="initial"
      animate="animate"
      style={{ background: bgColor, boxShadow: shadow }}
    >
      <AnimatePresence>
        <MobileNav
          key="mobileNav00000"
          onCloseNav={onCloseMobileNav}
          show={showMobileNav}
        />
      </AnimatePresence>

      <Container>
        <MobileNavButton onClick={setShowMobileNav.bind(null, true)}>
          <motion.img
            src="/images/icons/menu.svg"
            alt="Menu"
            width={24}
            height={24}
            variants={mobileNavBtnVariants}
            initial="initial"
            whileTap={'tap'}
          />
        </MobileNavButton>

        <Logo
          alt="A Plus Logo"
          src="/images/a-plus-main-logo.svg"
          width={30}
          height={30}
          priority
          pagedir={pageDir}
          onClick={router.push.bind(null, '/') as () => void}
        />

        <Navbar />

        <LangSelectBox />
      </Container>
    </StyledHeader>
  );
};

export default Header;
