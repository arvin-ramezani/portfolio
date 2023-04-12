import React from 'react';

import {
  Container,
  Logo,
  StyledHeader,
} from '@/styles/components/header.styled';
import OutlineBtn from '../common/outline-btn';
import { theme } from '@/styles/theme.styled';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo
          alt='A Plus Logo'
          src='/images/a-plus-text-logo.svg'
          width={145}
          height={50}
        />

        <OutlineBtn
          onClick={() => {}}
          color={theme.colors.primary}
          text='My Projects'
        />
      </Container>
    </StyledHeader>
  );
};

export default Header;
