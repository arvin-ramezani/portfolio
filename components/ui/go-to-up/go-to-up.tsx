import {
  AnimatePresence,
  Variants,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';

import { theme } from '@/styles/theme.styled';

const goToUpVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

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
    <AnimatePresence>
      <GoToUpWrapper
        onClick={onGoToUp}
        variants={goToUpVariants}
        initial="hidden"
        animate={showIcon ? 'visible' : 'hidden'}
        exit="hidden"
      >
        <StyledGoToUp
          initial="hidden"
          animate={showIcon ? 'visible' : 'hidden'}
          whileTap={{ opacity: 1, scale: [0, 1] }}
          whileHover={{ opacity: 1, scale: [1, 1.2] }}
          exit="hidden"
        >
          <Image
            src={'/images/icons/arrow-up.svg'}
            alt="Arrow Up Icon"
            width={48}
            height={48}
          />
        </StyledGoToUp>
      </GoToUpWrapper>
    </AnimatePresence>
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
