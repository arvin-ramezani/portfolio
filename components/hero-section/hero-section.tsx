import Image from 'next/image';
import React, { useRef } from 'react';

import {
  HeroImageContainer,
  HeroTextContainer,
  StyledHeroSection,
} from '@/styles/components/hero-section.styled';
import { Container } from '@/styles/global.styled';
import Button from '../ui/button/button';
import { theme } from '@/styles/theme.styled';
import { HeroImageVariants, HeroTextVariants } from './hero-section.variants';
import { useTranslation } from 'next-i18next';

function HeroSection() {
  const { t: translator } = useTranslation('home');
  const { t: translatorCommon } = useTranslation('common');

  return (
    <StyledHeroSection>
      <Container>
        <HeroTextContainer
          variants={HeroTextVariants}
          initial="hidden"
          animate="visible"
        >
          <p>{translator('hero_section_sub_heading')}</p>
          {/* <p>FAST WEB APPLICATIONS WITH REACT.JS AND NODE.JS</p> */}

          <h1>{translator('hero_section_heading')}</h1>
          {/* <h1>Bring your online dreams to life</h1> */}

          <Button
            text={translatorCommon('call_me_btn')}
            onClick={() => {
              console.log('first');
            }}
            color={theme.colors.primary}
            textColor={theme.colors.black}
          />
        </HeroTextContainer>

        <HeroImageContainer
          variants={HeroImageVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/images/freelancer.svg"
            alt="FreeLancer"
            fill
          />
        </HeroImageContainer>
      </Container>
    </StyledHeroSection>
  );
}

export default HeroSection;
