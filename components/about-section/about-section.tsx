import Image from 'next/image';
import React, { useRef } from 'react';
import { Variants, useInView } from 'framer-motion';

import {
  AboutImageBlock,
  AboutSkill,
  AboutSkillsItem,
  AboutSkillsContainer,
  AboutSkillsItemBlock,
  AboutSkillsTitle,
  AboutTextBlock,
  AboutTitle,
  StyledAboutSection,
} from '@/styles/components/about-section.styled';
import { Container } from '@/styles/global.styled';
import { AboutItemsVariants } from './about-section.variants';
import { useTranslation } from 'next-i18next';

const AboutSection = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const skillsRef = useRef(null);
  const isImageInView = useInView(imageRef);
  const isTextInView = useInView(textRef);
  const isSkillsInView = useInView(skillsRef);
  const { t: translator } = useTranslation('home');

  return (
    <StyledAboutSection>
      <Container>
        <AboutImageBlock
          variants={AboutItemsVariants}
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
          variants={AboutItemsVariants}
          ref={textRef}
          custom={null}
          initial="initial"
          animate={isTextInView ? 'animate' : 'exit'}
          exit={'exit'}
        >
          <AboutTitle>{translator('about_title')}</AboutTitle>
          <p>
            <Image
              src="/images/Bullet.svg"
              alt="bullet"
              width={14}
              height={14}
              style={{ display: 'inline-block', margin: '0 0.4rem' }}
            />
            {/* Hello! My name is <strong>Arvin Ramezani</strong>. I’m 30 years old
            living in Iran / Mazandaran / Babolsar. */}
            {translator('about_text_1')}
          </p>

          <p>
            <Image
              src="/images/Bullet.svg"
              alt="bullet"
              width={14}
              height={14}
              style={{ display: 'inline-block', margin: '0 0.4rem' }}
            />
            {/* I started learning Web Development in August 2020 with Persian
            online tutorials and YouTube, after which I expanded my knowledge
            through Udemy online courses and especially Academind courses. */}
            {translator('about_text_2')}
          </p>

          <p>
            <Image
              src="/images/Bullet.svg"
              alt="bullet"
              width={14}
              height={14}
              style={{ display: 'inline-block', margin: '0 0.4rem' }}
            />
            {/* I’m trying to become a{' '}
            <strong>JavaScript & TypeScript Full-Stack Developer.</strong> */}
            {translator('about_text_3')}
          </p>
        </AboutTextBlock>

        <AboutSkillsContainer
          variants={AboutItemsVariants}
          ref={skillsRef}
          custom={'right'}
          initial="initial"
          animate={isSkillsInView ? 'animate' : 'exit'}
          exit={'exit'}
        >
          <AboutSkillsTitle>{translator('skills_title')}</AboutSkillsTitle>
          <AboutSkillsItemBlock>
            <AboutSkillsItem>
              <Image
                src="./images/icons/nodejs.svg"
                width={45}
                height={40}
                alt="nodejs"
              />
              <AboutSkill>NodeJS</AboutSkill>
            </AboutSkillsItem>
            <AboutSkillsItem>
              <Image
                src="./images/icons/nextjs.svg"
                width={45}
                height={40}
                alt="nextjs"
              />
              <AboutSkill>NextJS</AboutSkill>
            </AboutSkillsItem>
          </AboutSkillsItemBlock>
        </AboutSkillsContainer>
      </Container>
    </StyledAboutSection>
  );
};

export default AboutSection;
