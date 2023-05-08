import Image from 'next/image';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useTranslation } from 'next-i18next';

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
import {
  aboutItemsVariants,
  aboutTextItemsVariants,
} from './about-section.variants';

const AboutSection = () => {
  const { t: translator } = useTranslation();
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const skillsRef = useRef(null);
  const isImageInView = useInView(imageRef);
  const isTextInView = useInView(textRef);
  const isSkillsInView = useInView(skillsRef);

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
              width={14}
              height={14}
              style={{ display: 'inline-block', margin: '0 0.4rem' }}
            />
            {translator('home:about_text_1')}
          </p>

          <p>
            <Image
              src="/images/Bullet.svg"
              alt="bullet"
              width={14}
              height={14}
              style={{ display: 'inline-block', margin: '0 0.4rem' }}
            />
            {translator('home:about_text_2')}
          </p>

          <p>
            <Image
              src="/images/Bullet.svg"
              alt="bullet"
              width={14}
              height={14}
              style={{ display: 'inline-block', margin: '0 0.4rem' }}
            />

            {translator('home:about_text_3')}
          </p>
        </AboutTextBlock>

        <AboutSkillsContainer
          variants={aboutItemsVariants}
          ref={skillsRef}
          custom={'right'}
          initial="initial"
          animate={isSkillsInView ? 'animate' : 'exit'}
          exit={'exit'}
        >
          <AboutSkillsTitle>{translator('home:skills_title')}</AboutSkillsTitle>
          <AboutSkillsItemBlock>
            <AboutSkillsItem>
              <Image
                src="./images/icons/nodejs.svg"
                width={45}
                height={40}
                alt="nodejs"
              />

              <AboutSkill>{translator('home:skill_name_nodejs')}</AboutSkill>
            </AboutSkillsItem>
            <AboutSkillsItem>
              <Image
                src="./images/icons/nextjs.svg"
                width={45}
                height={40}
                alt="nextjs"
              />
              <AboutSkill>{translator('home:skill_name_nextjs')}</AboutSkill>
            </AboutSkillsItem>
          </AboutSkillsItemBlock>
        </AboutSkillsContainer>
      </Container>
    </StyledAboutSection>
  );
};

export default AboutSection;
