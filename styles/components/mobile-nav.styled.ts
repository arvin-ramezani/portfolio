import { motion } from 'framer-motion';
import styled from 'styled-components';

import { theme } from '../themes/theme.styled';

export const StyledMobileNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;

  & > ul {
    width: 28rem;
    max-width: 80%;
    height: 100%;
    padding: 1rem;
    font-size: 1.2rem;

    background-color: ${({ theme }) => theme.backgroundColors.primary};
  }

  & > ul > li {
    margin: 0.8rem 0;

    color: ${({ theme }) => theme.colors.textPrimary};
  }

  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

export const ActiveLinkStyle = styled(motion.span)`
  border-radius: 0.5rem;
  height: 0.2rem;
  display: block;
  margin-top: 0.4rem;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const CloseMenuButton = styled(motion.div)<{ direction: 'ltr' | 'rtl' }>`
  position: fixed;
  top: 1.5rem;

  right: ${({ direction }) => (direction === 'rtl' ? 'unset' : '0.7rem')};
  left: ${({ direction }) => (direction === 'rtl' ? '0.7rem' : 'unset')};
`;
