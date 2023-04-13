import {
  StyledButton,
  StyledButtonWrapper,
} from '@/styles/components/button.styled';
import React, { FC } from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  color: string;
  textColor: string;
}

const Button: FC<ButtonProps> = ({ text, onClick, color, textColor }) => {
  return (
    <StyledButtonWrapper onClick={onClick}>
      <StyledButton
        color={color}
        textColor={textColor}
      >
        {text}
      </StyledButton>
    </StyledButtonWrapper>
  );
};

export default Button;
