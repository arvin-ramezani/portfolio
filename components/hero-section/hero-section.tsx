import Image from 'next/image';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { isMobile } from 'react-device-detect';

import {
  HeroImageContainer,
  StyledHeroSection,
} from '@/styles/components/hero-section.styled';
import { Container } from '@/styles/global.styled';
import { heroImageVariants } from './hero-section.variants';
import HeroSectionText from './hero-section-text/hero-section-text';
import usePageDir from '@/hooks/use-page-dir/use-page-dir';

function HeroSection() {
  const pageDir = usePageDir();
  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef);

  return (
    <StyledHeroSection>
      <Container>
        <HeroSectionText pageDir={pageDir} />

        <HeroImageContainer
          variants={heroImageVariants}
          initial="hidden"
          animate={isImageInView ? 'visible' : 'hidden'}
          custom={isMobile}
          pagedir={pageDir}
        >
          {/* <Image
            id="codingImageSm"
            src={`/images/coding-sm-transparent-${pageDir}.gif`}
            priority
            alt="FreeLancer"
            // fill
            width={256}
            height={144}
            unoptimized
          /> */}

          <Image
            id="codingImageLg"
            src={`/images/coding-transparent-${pageDir}.gif`}
            priority
            alt="FreeLancer"
            fill
            unoptimized
          />
        </HeroImageContainer>
        <div ref={imageRef} />
      </Container>
    </StyledHeroSection>
  );
}

export default HeroSection;
