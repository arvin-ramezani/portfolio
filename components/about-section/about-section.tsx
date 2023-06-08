import Image from 'next/image';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useTranslation } from 'next-i18next';

import {
  AboutImageBlock,
  AboutTextBlock,
  AboutTitle,
  StyledAboutSection,
} from '@/styles/components/about-section.styled';
import { Container } from '@/styles/global.styled';
import {
  aboutItemsVariants,
  aboutTextItemsVariants,
} from './about-section.variants';
import Skills from '../skills/skills';

const AboutSection = () => {
  const { t: translator } = useTranslation();
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const isImageInView = useInView(imageRef);
  const isTextInView = useInView(textRef);

  return (
    <StyledAboutSection>
      <Container>
        <AboutImageBlock
          variants={aboutItemsVariants}
          ref={imageRef}
          custom={'left'}
          initial="initial"
          animate={isImageInView ? 'animate' : 'exit'}
          exit={'exit'}
        >
          <Image
            src="/images/profile.svg"
            alt="Arvin Ramezani"
            fill
          />
        </AboutImageBlock>

        <AboutTextBlock
          variants={aboutTextItemsVariants}
          ref={textRef}
          custom={null}
          initial="initial"
          animate={isTextInView ? 'animate' : 'exit'}
          exit={'exit'}
        >
          <AboutTitle>{translator('home:about_title')}</AboutTitle>
          <p>
            <Image
              src="/images/Bullet.svg"
              alt="bullet"
              width={10}
              height={10}
              style={{ display: 'inline-block', margin: '0 0.4rem' }}
            />
            {translator('home:about_text_1')}
          </p>

          <p>
            <Image
              src="/images/Bullet.svg"
              alt="bullet"
              width={10}
              height={10}
              style={{ display: 'inline-block', margin: '0 0.4rem' }}
            />
            {translator('home:about_text_2')}
          </p>

          <p>
            <Image
              src="/images/Bullet.svg"
              alt="bullet"
              width={10}
              height={10}
              style={{ display: 'inline-block', margin: '0 0.4rem' }}
            />

            {translator('home:about_text_3')}
          </p>
        </AboutTextBlock>

        <Skills />
      </Container>
    </StyledAboutSection>
  );
};

export default AboutSection;
