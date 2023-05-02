import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { CSSProperties, FC } from 'react';

import {
  StyledButton,
  StyledButtonWrapper,
} from '@/styles/components/button.styled';
import { buttonVariants } from './button.variants';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  color: string;
  textColor: string;
  wrapperStyle?: CSSProperties;
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({
  text,
  onClick,
  color,
  textColor,
  wrapperStyle,
  loading,
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
        layout
      >
        {loading ? (
          <Image
            src="/images/icons/spinner-lg.svg"
            alt="Loading"
            width={30}
            height={30}
          />
        ) : (
          text
        )}
      </StyledButton>
    </StyledButtonWrapper>
  );
};

export default Button;
