import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';
import { theme } from '../theme.styled';

export const StyledHeader = styled(motion.header)`
  font-family: Vazir;

  & > div {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    width: 100%;

    @media (min-width: ${theme.breakpoints.sm}) {
      padding: 1.6rem 0;
      width: 90%;
    }

    @media (min-width: ${theme.breakpoints.md}) {
      width: 80%;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  & button {
    margin: 0 0.4rem;
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

export const Logo = styled(Image)<{ pagedir: 'rtl' | 'ltr' }>`
  margin-right: -1rem;

  margin: ${({ pagedir }) => (pagedir === 'rtl' ? '0 0 0 auto' : '0 auto 0 0')};
  /* margin: ${({ pagedir }) =>
    pagedir === 'rtl' ? '0 0 0 auto' : '0 auto 0 0'}; */

  @media (min-width: ${theme.breakpoints.md}) {
    width: 145px;
    height: 50px;
  }
`;
