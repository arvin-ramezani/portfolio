import { motion } from 'framer-motion';
import styled from 'styled-components';

import { theme } from '../themes/theme.styled';

export const StyledLangSelectBox = styled(motion.select)<{
  direction: 'ltr' | 'rtl';
}>`
  border-radius: 0.3rem;
  background: url('/images/icons/earth.svg');
  background-size: 16px 16px;
  background-repeat: no-repeat;
  font-size: 0.5rem;
  cursor: pointer;

  background-position: ${({ direction }) =>
    direction === 'rtl' ? '93%' : '7%'};

  padding: ${({ direction }) =>
    direction === 'rtl'
      ? '0.2rem 1.4rem 0.2rem 0.2rem'
      : '0.2rem .2rem 0.2rem 1.4rem'};

  color: ${({ theme }) => theme.colors.textPrimary};

  &:focus {
    outline: 1px solid;
  }

  & option {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.backgroundColors.primary};
  }

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 0.25rem 0.7rem;
    font-size: 0.8rem;

    background-position: ${({ direction }) =>
      direction === 'rtl' ? '93%' : '7%'};

    padding: ${({ direction }) =>
      direction === 'rtl'
        ? '0.4rem 1.5rem 0.2rem 0.2rem'
        : '0.4rem .2rem 0.2rem 1.4rem'};
  }
`;
