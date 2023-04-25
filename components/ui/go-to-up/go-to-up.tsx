import { theme } from '@/styles/theme.styled';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const GoToUp = () => {
  const { scrollY } = useScroll();
  const [showIcon, setShowIcon] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 600) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  });

  const onGoToUp = () => {
    typeof window !== 'undefined' && window.scrollTo(0, 0);
  };

  return (
    <GoToUpWrapper onClick={onGoToUp}>
      <StyledGoToUp
        initial={{ opacity: 0, scale: 0 }}
        animate={showIcon ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        whileTap={{ opacity: 1, scale: [0, 1] }}
        whileHover={{ opacity: 1, scale: [1, 1.2] }}
      >
        <Image
          src={'/images/icons/arrow-up.svg'}
          alt="Arrow Up Icon"
          width={40}
          height={40}
        />
      </StyledGoToUp>
    </GoToUpWrapper>
  );
};

const GoToUpWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 2;

  @media (min-width: ${theme.breakpoints.md}) {
    right: 2rem;
    bottom: 2rem;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    right: 3rem;
    bottom: 3rem;
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    right: 10rem;
    bottom: 5rem;
  }
`;

const StyledGoToUp = styled(motion.div)``;

export default GoToUp;
