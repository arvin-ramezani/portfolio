import styled from 'styled-components';
import { motion } from 'framer-motion';

import { theme } from '@/styles/themes/theme.styled';

export const GoToUpWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 2;

  @media (min-width: ${theme.breakpoints.md}) {
    right: 2rem;
    bottom: 2rem;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    right: 3rem;
    bottom: 3rem;
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    right: 10rem;
    bottom: 5rem;
  }
`;

export const StyledGoToUp = styled(motion.div)``;
