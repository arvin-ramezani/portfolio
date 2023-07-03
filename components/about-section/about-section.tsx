import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'next-i18next';

import {
  AboutImageBlock,
  AboutTextBlock,
  AboutTextItem,
  AboutTitle,
  StyledAboutSection,
  StyledBullet,
} from '@/styles/components/about-section.styled';
import { Container } from '@/styles/global.styled';
import {
  aboutItemsVariants,
  aboutTextBlockVariants,
  aboutTextItemsVariants,
  styledBulletVariants,
} from './about-section.variants';
import Skills from '../skills/skills';
import { theme } from '@/styles/themes/theme.styled';

const AboutSection = () => {
  const [aboutTextHover, setAboutTextHover] = useState<number>(0);
  const { t: translator } = useTranslation();
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const isImageInView = useInView(imageRef);
  const isTextInView = useInView(textRef);

  const onAboutTextHoverStart = (index: number) => setAboutTextHover(index);

  const onAboutTextHoverEnd = () => setAboutTextHover(0);

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
          variants={aboutTextBlockVariants}
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
