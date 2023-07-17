import React, { useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'framer-motion';

import {
  AboutImageBlock,
  StyledAboutSection,
} from '@/styles/components/about-section.styled';
import { Container } from '@/styles/global.styled';
import { aboutItemsVariants } from './about-section.variants';
import Skills from '../skills/skills';
import AboutText from './about-text/about-text';
import usePageDir from '@/hooks/use-page-dir/use-page-dir';

const AboutSection = () => {
  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef);
  const pageDir = usePageDir();

  return (
    <StyledAboutSection id="about">
      <Container>
        <AboutImageBlock
          variants={aboutItemsVariants}
          custom={pageDir === 'rtl' ? 'left' : 'right'}
          initial="initial"
          animate={isImageInView ? 'animate' : 'exit'}
          exit={'exit'}
        >
          <Image
            src="/images/profile.svg"
            alt="Arvin Ramezani"
            fill
          />

          <div ref={imageRef} />
        </AboutImageBlock>

        <AboutText />

        <Skills />
      </Container>
    </StyledAboutSection>
  );
};

export default AboutSection;
