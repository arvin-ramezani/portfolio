import { useRouter } from 'next/router';
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
import Link from 'next/link';

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
        />

        {/* <Link
          href={'/#projects'}
          passHref
          legacyBehavior
        > */}
        <OutlineBtn
          onClick={() => router.push('/#projects')}
          color={theme.colors.primary}
          text="My Projects"
        />
        {/* </Link> */}
        <LangSelectBox />
      </Container>
    </StyledHeader>
  );
};

export default Header;
