import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
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
import DownloadResume from './download-resume/download-resume';

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
          <AboutTextItem
            variants={aboutTextItemsVariants}
            initial={'initial'}
            animate={aboutTextHover === 1 ? 'animate' : 'initial'}
            onHoverStart={onAboutTextHoverStart.bind(null, 1)}
            onHoverEnd={onAboutTextHoverEnd}
          >
            <StyledBullet
              variants={styledBulletVariants}
              initial="initial"
              animate={aboutTextHover === 1 ? 'animate' : 'initial'}
            />
            {translator('home:about_text_1')}
          </AboutTextItem>

          <AboutTextItem
            variants={aboutTextItemsVariants}
            initial={'initial'}
            animate={aboutTextHover === 2 ? 'animate' : 'initial'}
            onHoverStart={onAboutTextHoverStart.bind(null, 2)}
            onHoverEnd={onAboutTextHoverEnd}
          >
            <StyledBullet
              variants={styledBulletVariants}
              initial="initial"
              animate={aboutTextHover === 2 ? 'animate' : 'initial'}
            />
            {translator('home:about_text_2')}
          </AboutTextItem>

          <AboutTextItem
            variants={aboutTextItemsVariants}
            initial={'initial'}
            animate={aboutTextHover === 3 ? 'animate' : 'initial'}
            onHoverStart={onAboutTextHoverStart.bind(null, 3)}
            onHoverEnd={onAboutTextHoverEnd}
          >
            <StyledBullet
              variants={styledBulletVariants}
              initial="initial"
              animate={aboutTextHover == 3 ? 'animate' : 'initial'}
            />
            {translator('home:about_text_3')}
          </AboutTextItem>

          <DownloadResume />
        </AboutTextBlock>

        <Skills />
      </Container>
    </StyledAboutSection>
  );
};

export default AboutSection;
