import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../theme.styled';

export const StyledLangSelectBox = styled(motion.select)`
  padding: 0.4rem 0.7rem;
  border-radius: 0.3rem;
  background: transparent;
  font-family: Roboto, Vazir;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.textPrimary};

  & option {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.backgroundColors.primary};
  }

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 0.6rem 0.7rem;
  }
`;
