import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import {
  HeroImageContainer,
  HeroTextContainer,
  StyledHeroSection,
} from '@/styles/components/hero-section.styled';
import { Container } from '@/styles/global.styled';
import Button from '../ui/button/button';
import { theme } from '@/styles/themes/theme.styled';
import { heroImageVariants, heroTextVariants } from './hero-section.variants';

function HeroSection() {
  const router = useRouter();
  const { t: translator } = useTranslation();
  const [pageDir, setPageDir] = useState<'rtl' | 'ltr'>(
    router.locale === 'fa' ? 'rtl' : 'ltr'
  );

  const onCall = () => {
    if (isMobile) {
      window.open('tel:+989361599686');

      return;
    }

    router.push('/#contact');
  };

  useEffect(() => {
    setPageDir(router.locale === 'fa' ? 'rtl' : 'ltr');
  }, [router.locale]);

  return (
    <StyledHeroSection>
      <Container>
        <HeroTextContainer
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          custom={pageDir}
        >
          <h1>{translator('home:hero_section_heading')}</h1>

          <h2>{translator('home:hero_section_sub_heading_1')}</h2>
          <p>{translator('home:hero_section_sub_heading_2')}</p>

          {pageDir === 'ltr' && (
            <p>{translator('home:hero_section_sub_heading_3')}</p>
          )}

          <Button
            text={`${translator('common:call_me_btn')}${
              pageDir === 'rtl' ? 'بگیرید' : ''
            }`}
            onClick={onCall}
            color={theme.colors.primary}
            textColor={theme.colors.black}
          />
        </HeroTextContainer>

        <HeroImageContainer
          variants={heroImageVariants}
          initial="hidden"
          animate="visible"
          custom={pageDir}
          pagedir={pageDir}
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
