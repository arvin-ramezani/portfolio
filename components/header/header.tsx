import React from 'react';

import {
  // Container,
  Logo,
  StyledHeader,
} from '@/styles/components/header.styled';
import OutlineBtn from '../common/outline-btn';
import { theme } from '@/styles/theme.styled';
import LangSelectBox from '../lang-select-box/lang-select-box';
import { Container } from '@/styles/global.styled';
import { HeaderItemsVariants } from './header.variants';

const Header = () => {
  return (
    <StyledHeader
      variants={HeaderItemsVariants}
      initial='initial'
      animate='animate'
    >
      <Container>
        <Logo
          alt='A Plus Logo'
          src='/images/a-plus-text-logo.svg'
          width={90}
          height={30}
          priority
        />

        <OutlineBtn
          onClick={() => {}}
          color={theme.colors.primary}
          text='My Projects'
        />
        <LangSelectBox />
      </Container>
    </StyledHeader>
  );
};

export default Header;
