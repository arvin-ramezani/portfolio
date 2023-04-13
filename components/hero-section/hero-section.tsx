import React from 'react';

import {
  HeroImageContainer,
  HeroTextContainer,
  StyledHeroSection,
} from '@/styles/components/hero-section.styled';
import { Container } from '@/styles/global.styled';
import Button from '../common/Button';
import { theme } from '@/styles/theme.styled';
import Image from 'next/image';

function HeroSection() {
  return (
    <StyledHeroSection>
      <Container>
        <HeroTextContainer>
          <p>FAST WEB APPLICATIONS WITH REACT.JS AND NODE.JS</p>

          <h1>Bring your online dreams to life</h1>

          <Button
            text='Call Me'
            onClick={() => {}}
            color={theme.colors.primary}
            textColor={theme.colors.black}
          />
        </HeroTextContainer>

        <HeroImageContainer>
          <Image
            src='/images/free-lancer.svg'
            alt='FreeLancer'
            fill
          />
        </HeroImageContainer>
      </Container>
    </StyledHeroSection>
  );
}

export default HeroSection;
