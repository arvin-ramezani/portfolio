import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';
import { theme } from '../theme.styled';

export const StyledHeader = styled(motion.header)`
  & > div {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    width: 100%;

    @media (min-width: ${theme.breakpoints.sm}) {
      width: 90%;
    }
  }
`;

export const Logo = styled(Image)`
  margin-right: auto;

  @media (min-width: ${theme.breakpoints.md}) {
    width: 145px;
    height: 50px;
  }
`;
