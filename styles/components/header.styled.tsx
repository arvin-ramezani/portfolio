import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { theme } from '../themes/theme.styled';

export const StyledHeader = styled(motion.header)`
  font-family: Vazir;
  position: sticky;
  top: 0px;
  z-index: 1;
  transition: all 1s;

  & > div {
    flex-direction: row;
    align-items: center;
    /* justify-content: space-between; */
    gap: 1rem;
    padding: 1rem;
    width: 100%;
    position: relative;
  }

  & button {
    margin: 0 0.6rem;
    font-size: 0.8rem;
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    & > div {
      padding: 1.6rem 1rem;
      width: 90%;
    }
  }

  @media (min-width: ${theme.breakpoints.md}) {
    & > div {
      width: 80%;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    & button {
      font-size: 1rem;
    }
  }
`;

export const StyledArrowUp = styled(motion.div)`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  width: 64px;
  height: 64px;
  z-index: 5;
`;

export const MobileNavButton = styled(motion.div)`
  display: flex;

  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

export const Logo = styled(Image)<{ pagedir: 'rtl' | 'ltr' }>`
  cursor: pointer;

  width: fit-content;
  /* position: absolute;
  top: 50%;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%); */

  @media (min-width: ${theme.breakpoints.md}) {
    position: static;
    transform: translate(0, 0);
    width: 50px;
    height: 50px;
  }
`;

export const StyledLink = styled(Link)`
  margin-left: auto;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.textPrimary};
  color: ${({ theme }) => theme.backgroundColors.primary};
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  font-weight: 500;
`;
