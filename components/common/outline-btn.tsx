import React, { FC } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface OutlineBtnProps {
  text: string;
  onClick: () => void;
  color: string;
}

const OutlineBtn: FC<OutlineBtnProps> = ({ text, onClick, color }) => {
  return (
    <StyledOutlineBtnContainer onClick={onClick}>
      <StyledOutlineBtn color={color}>{text}</StyledOutlineBtn>
    </StyledOutlineBtnContainer>
  );
};

export const StyledOutlineBtnContainer = styled.div``;

export const StyledOutlineBtn = styled(motion.button)<{ color: string }>`
  border-radius: 0.3rem;
  background-color: transparent;
  padding: 0.5rem 1rem;
  cursor: pointer;
  /* outline: 1px solid ${({ theme }) => theme.colors.secondary}; */

  color: ${({ color, theme }) => (color ? color : theme.colors.primary)};
  border: 1px solid
    ${({ color, theme }) => (color ? color : theme.colors.primary)};
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export default OutlineBtn;
