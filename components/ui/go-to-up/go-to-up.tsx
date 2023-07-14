import React, { useState, FC } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';

import {
  GoToUpWrapper,
  StyledGoToUp,
} from '@/styles/components/ui/go-to-up.styled';
import { goToUpVariants } from './go-to-up.variants';

interface GoToUpProps {
  onClick?: () => void;
}

const GoToUp: FC<GoToUpProps> = ({ onClick }) => {
  const { scrollY } = useScroll();
  const [showIcon, setShowIcon] = useState(false);
  const router = useRouter();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 600) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  });

  const onGoToUp = () => {
    document && document.documentElement.scrollTo(0, 0);

    onClick && onClick();
  };

  return (
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
  );
};

export default GoToUp;
