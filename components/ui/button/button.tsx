import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { CSSProperties, FC, MouseEventHandler } from 'react';

import {
  StyledButton,
  StyledButtonWrapper,
} from '@/styles/components/ui/button.styled';
import { buttonVariants } from './button.variants';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  color?: string;
  textColor?: string;
  wrapperStyle?: CSSProperties;
  buttonStyles?: CSSProperties;
  loading?: boolean;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  text,
  onClick,
  color,
  textColor,
  wrapperStyle,
  buttonStyles,
  loading,
  disabled,
}) => {
  const onClickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();

    if (disabled) return;

    onClick && onClick();
  };

  return (
    <StyledButtonWrapper
      id="#buttonWrapper"
      onClick={onClickHandler}
      style={wrapperStyle}
    >
      <StyledButton
        as={motion.button}
        variants={buttonVariants}
        animate={disabled ? 'disabled' : 'initial'}
        whileHover={'hover'}
        whileTap={'tap'}
        color={color || 'unset'}
        textcolor={textColor || 'unset'}
        style={buttonStyles}
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
