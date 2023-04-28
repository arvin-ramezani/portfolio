import Image from 'next/image';
import React from 'react';

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

  return (
    <StyledHeroSection>
      <Container>
        <HeroTextContainer
          variants={HeroTextVariants}
          initial="hidden"
          animate="visible"
        >
          <p>برنامه های کاربردی وب سریع با REACT.JS و NODE.JS</p>

          {/* <h1>رویاهای آنلاین خود را به واقعیت تبدیل کنید</h1> */}

          <h1>{translator('hero_section_heading')}</h1>

          <Button
            text={'تماس بگیرید'}
            onClick={() => {}}
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
