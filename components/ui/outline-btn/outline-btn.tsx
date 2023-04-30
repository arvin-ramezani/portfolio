import React, { FC } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NextFont } from 'next/dist/compiled/@next/font';

import { buttonVariants } from './outline-btn.variants';
import { theme } from '@/styles/theme.styled';

interface OutlineBtnProps {
  text: string;
  onClick: () => void;
  color: string;
}

const OutlineBtn: FC<OutlineBtnProps> = ({ text, onClick, color }) => {
  return (
    <StyledOutlineBtnContainer onClick={onClick}>
      <StyledOutlineBtn
        variants={buttonVariants}
        whileHover={'hover'}
        whileTap={'tap'}
        color={color}
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
  padding: 0.1rem 1rem;
  cursor: pointer;
  font-size: 0.7rem;
  font-weight: 500;

  color: ${({ color }) => color};
  border: 1px solid ${({ color }) => color};

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.secondary};
  }

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

export default OutlineBtn;
