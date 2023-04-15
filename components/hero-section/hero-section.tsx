import Image from 'next/image';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

import {
  HeroImageContainer,
  HeroTextContainer,
  StyledHeroSection,
} from '@/styles/components/hero-section.styled';
import { Container } from '@/styles/global.styled';
import Button from '../common/button';
import { theme } from '@/styles/theme.styled';
import { HeroImageVariants, HeroTextVariants } from './hero-section.variants';

function HeroSection() {
  return (
    <StyledHeroSection>
      <Container>
        <HeroTextContainer
          variants={HeroTextVariants}
          initial='hidden'
          animate='visible'
        >
          <p>FAST WEB APPLICATIONS WITH REACT.JS AND NODE.JS</p>

          <h1>Bring your online dreams to life</h1>

          <Button
            text='Call Me'
            onClick={() => {}}
            color={theme.colors.primary}
            textColor={theme.colors.black}
          />
        </HeroTextContainer>

        <HeroImageContainer
          variants={HeroImageVariants}
          initial='hidden'
          animate='visible'
        >
          <Image
            src='/images/freelancer.svg'
            alt='FreeLancer'
            fill
          />
        </HeroImageContainer>
      </Container>
    </StyledHeroSection>
  );
}

export default HeroSection;
