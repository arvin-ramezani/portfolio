import { NextFont } from 'next/dist/compiled/@next/font';

import {
  StyledButton,
  StyledButtonWrapper,
} from '@/styles/components/button.styled';
import { Variants, motion } from 'framer-motion';
import React, { CSSProperties, FC } from 'react';
import { buttonVariants } from './button.variants';
import Image from 'next/image';

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
        {/* <Image
          src="images/loading.svg"
          alt="Loading"
          width={16}
          height={16}
        /> */}

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
