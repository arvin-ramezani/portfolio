import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledLangSelectBox = styled(motion.select)`
  padding: 0.3rem 0.7rem;
  border-radius: 0.3rem;
  background: transparent;
  font-family: Roboto, Vazir;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.textPrimary};

  & option {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.backgroundColors.primary};
  }
`;
