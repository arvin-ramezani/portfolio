import { useRouter } from 'next/router';
import React from 'react';

import { Logo, StyledHeader } from '@/styles/components/header.styled';
import OutlineBtn from '../ui/outline-btn/outline-btn';
import { theme } from '@/styles/theme.styled';
import LangSelectBox from '../lang-select-box/lang-select-box';
import { Container } from '@/styles/global.styled';
import { HeaderItemsVariants } from './header.variants';

const Header = () => {
  const router = useRouter();

  return (
    <StyledHeader
      variants={HeaderItemsVariants}
      initial="initial"
      animate="animate"
    >
      <Container>
        <Logo
          alt="A Plus Logo"
          src="/images/a-plus-text-logo.svg"
          width={90}
          height={30}
          priority
          pagedir={'rtl'}
        />

        <OutlineBtn
          onClick={() => router.push('/', '/#projects', { scroll: false })}
          color={theme.colors.primary}
          text={'پروژه ها'}
        />

        <LangSelectBox />
      </Container>
    </StyledHeader>
  );
};

export default Header;
