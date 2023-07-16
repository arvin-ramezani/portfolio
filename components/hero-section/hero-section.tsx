import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useInView } from 'framer-motion';

import {
  HeroImageContainer,
  StyledHeroSection,
} from '@/styles/components/hero-section.styled';
import { Container } from '@/styles/global.styled';
import { heroImageVariants } from './hero-section.variants';
import HeroSectionText from './hero-section-text/hero-section-text';
import usePageDir from '@/hooks/use-page-dir/use-page-dir';

function HeroSection() {
  const router = useRouter();
  const pageDir = usePageDir();
  // const [pageDir, setPageDir] = useState<'rtl' | 'ltr'>(
  //   router.locale === 'fa' ? 'rtl' : 'ltr'
  // );
  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef);

  // useEffect(() => {
  //   setPageDir(router.locale === 'fa' ? 'rtl' : 'ltr');
  // }, [router.locale]);

  useEffect(() => {
    console.log(isImageInView, 'view');
  }, [isImageInView]);

  return (
    <StyledHeroSection>
      <Container>
        <HeroSectionText pageDir={pageDir} />

        <HeroImageContainer
          variants={heroImageVariants}
          initial="hidden"
          animate={isImageInView ? 'visible' : 'hidden'}
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
        <div ref={imageRef} />
      </Container>
    </StyledHeroSection>
  );
}

export default HeroSection;
