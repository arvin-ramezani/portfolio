import Image from 'next/image';
import React from 'react';
import { isMobile } from 'react-device-detect';

import {
  HeroImageContainer,
  HeroTextContainer,
  StyledHeroSection,
} from '@/styles/components/hero-section.styled';
import { Container } from '@/styles/global.styled';
import Button from '../ui/button/button';
import { theme } from '@/styles/theme.styled';
import { HeroImageVariants, HeroTextVariants } from './hero-section.variants';
import { useRouter } from 'next/router';

function HeroSection() {
  const router = useRouter();

  const onCall = () => {
    if (isMobile) {
      window.open('tel:+989361599686');

      return;
    }

    router.push('/#contact');
  };

  return (
    <StyledHeroSection>
      <Container>
        <HeroTextContainer
          variants={HeroTextVariants}
          initial="hidden"
          animate="visible"
        >
          <p>برنامه های کاربردی وب سریع با REACT.JS و NODE.JS</p>

          <h1>رویاهای آنلاین خود را به واقعیت تبدیل کنید</h1>

          <Button
            text={'تماس بگیرید'}
            onClick={onCall}
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
