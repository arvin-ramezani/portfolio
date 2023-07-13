import { motion } from 'framer-motion';
import styled from 'styled-components';

import { theme } from '@/styles/themes/theme.styled';

export const StyledOutlineBtnContainer = styled.div``;

export const StyledOutlineBtn = styled(motion.button)<{ color: string }>`
  border-radius: 0.3rem;
  background-color: transparent;
  padding: 0.2rem 1rem;
  cursor: pointer;
  font-size: 0.98rem;
  font-weight: 500;
  letter-spacing: 0.1rem;

  color: ${({ color }) => color};
  border: 1px solid ${({ color }) => color};

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 1.2rem;
  }
`;
