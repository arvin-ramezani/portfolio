import {
  StyledButton,
  StyledButtonWrapper,
} from '@/styles/components/button.styled';
import { Variants, motion } from 'framer-motion';
import React, { CSSProperties, FC } from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  color: string;
  textColor: string;
  wrapperStyle?: CSSProperties;
}

const buttonVariants: Variants = {
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
  },
};

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
        as={motion.button}
        variants={buttonVariants}
        whileHover={'hover'}
        whileTap={'tap'}
        color={color}
        textcolor={textColor}
      >
        {text}
      </StyledButton>
    </StyledButtonWrapper>
  );
};

export default Button;
