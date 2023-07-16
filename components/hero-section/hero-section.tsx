import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import {
  HeroImageContainer,
  StyledHeroSection,
} from '@/styles/components/hero-section.styled';
import { Container } from '@/styles/global.styled';
import { heroImageVariants } from './hero-section.variants';
import HeroSectionText from './hero-section-text/hero-section-text';

function HeroSection() {
  const router = useRouter();
  const [pageDir, setPageDir] = useState<'rtl' | 'ltr'>(
    router.locale === 'fa' ? 'rtl' : 'ltr'
  );

  useEffect(() => {
    console.log(router.locale, 'locale');
    setPageDir(router.locale === 'fa' ? 'rtl' : 'ltr');
  }, [router.locale]);

  return (
    <StyledHeroSection>
      <Container>
        <HeroSectionText pageDir={pageDir} />

        <HeroImageContainer
          variants={heroImageVariants}
          initial="hidden"
          animate="visible"
          custom={pageDir}
          pagedir={pageDir}
        >
          <Image
            id="freelancerImageSm"
            src="/images/freelancer-sm.svg"
            priority
            alt="FreeLancer"
            fill
          />
          <Image
            id="freelancerImageLg"
            src="/images/freelancer-lg.svg"
            priority
            alt="FreeLancer"
            fill
          />
        </HeroImageContainer>
      </Container>
    </StyledHeroSection>
  );
}

export default HeroSection;
