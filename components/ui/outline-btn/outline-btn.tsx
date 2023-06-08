import React, { FC } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { buttonVariants } from './outline-btn.variants';
import { theme } from '@/styles/theme.styled';

interface OutlineBtnProps {
  text: string;
  onClick: () => void;
  color: string;
  disabled?: boolean;
}

const OutlineBtn: FC<OutlineBtnProps> = ({
  text,
  onClick,
  color,
  disabled,
}) => {
  return (
    <StyledOutlineBtnContainer onClick={onClick}>
      <StyledOutlineBtn
        variants={disabled ? {} : buttonVariants}
        whileHover={'hover'}
        whileTap={'tap'}
        color={color}
        disabled={disabled}
      >
        {text}
      </StyledOutlineBtn>
    </StyledOutlineBtnContainer>
  );
};

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

export default OutlineBtn;
