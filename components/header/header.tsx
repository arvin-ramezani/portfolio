import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

import { Logo, StyledHeader } from '@/styles/components/header.styled';
import OutlineBtn from '../ui/outline-btn/outline-btn';
import { theme } from '@/styles/themes/theme.styled';
import LangSelectBox from '../lang-select-box/lang-select-box';
import { Container } from '@/styles/global.styled';
import { HeaderItemsVariants } from './header.variants';
import { useScroll, useTransform } from 'framer-motion';

const Header = () => {
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
      <Container>
        <Logo
          alt="A Plus Logo"
          src="/images/a-plus-text-logo.svg"
          width={90}
          height={30}
          priority
          pagedir={pageDir}
          onClick={router.push.bind(null, '/') as () => void}
        />

        <OutlineBtn
          onClick={() => router.push('/', '/#projects', { scroll: false })}
          color={theme.colors.primary}
          text={translator('common:projects_btn')}
        />

        <LangSelectBox />
      </Container>
    </StyledHeader>
  );
};

export default Header;
