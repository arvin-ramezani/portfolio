import {
  StyledButton,
  StyledButtonWrapper,
} from '@/styles/components/button.styled';
import React, { CSSProperties, FC } from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  color: string;
  textColor: string;
  wrapperStyle?: CSSProperties;
}

const Button: FC<ButtonProps> = ({
  text,
  onClick,
  color,
  textColor,
  wrapperStyle,
}) => {
  return (
    <StyledButtonWrapper
      id="#buttonWrapper"
      onClick={onClick}
      style={wrapperStyle}
    >
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
