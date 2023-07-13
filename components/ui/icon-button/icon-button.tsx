import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Variants, motion } from 'framer-motion';

interface IconButtonProps {
  onClick: () => void;
}

const iconButtonVariants: Variants = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  tap: { scale: 0.5 },
  hover: { scale: 1.2 },
};

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

const StyledIconButton = styled.div`
  & button {
    background: transparent;
    border: none;
  }
`;

export default IconButton;
