import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Variants, motion } from 'framer-motion';
import { iconButtonVariants } from './icon-button.variants';
import { StyledIconButton } from '@/styles/components/ui/icon-button.styled';

interface IconButtonProps {
  onClick: () => void;
}

const IconButton: FC<PropsWithChildren<IconButtonProps>> = ({
  onClick,
  children,
}) => {
  return (
    <StyledIconButton onClick={onClick}>
      <motion.button
        variants={iconButtonVariants}
        initial={'initial'}
        animate={'animate'}
        whileHover={'hover'}
        whileTap={'tap'}
      >
        {children}
      </motion.button>
    </StyledIconButton>
  );
};

export default IconButton;
