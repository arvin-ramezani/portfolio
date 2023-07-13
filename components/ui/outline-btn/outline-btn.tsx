import React, { FC } from 'react';

import { buttonVariants } from './outline-btn.variants';
import {
  StyledOutlineBtn,
  StyledOutlineBtnContainer,
} from '@/styles/components/ui/outline-button.styled';

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

export default OutlineBtn;
