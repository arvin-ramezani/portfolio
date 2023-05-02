import Image from 'next/image';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

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
  AboutItemsVariants,
  AboutTextItemsVariants,
} from './about-section.variants';
import { useTranslation } from 'next-i18next';

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
          variants={AboutTextItemsVariants}
          ref={textRef}
          custom={null}
          initial="initial"
          animate={isTextInView ? 'animate' : 'exit'}
          exit={'exit'}
          // transition={{ delay: 2 }}
        >
          {/* <AboutTitle>{'درباره ی من'}</AboutTitle> */}
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
            {/* سلام! من آروین رمضانی هستم. 30 سالمه و ساکن ایران / مازندران /
            بابلسر هستم. */}
          </p>

          <p>
            <Image
              src="/images/Bullet.svg"
              alt="bullet"
              width={14}
              height={14}
              style={{ display: 'inline-block', margin: '0 0.4rem' }}
            />
            {/* یادگیری توسعه وب را در شهریور 1399 با آموزش های آنلاین فارسی و
            یوتیوب شروع کردم و پس از آن دانش خود را از طریق دوره های آنلاین
            Udemy و به خصوص دوره های Academind گسترش دادم. */}
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
            {/* در تلاش برای JavaScript FullStack Developer شدن !! */}

            {translator('home:about_text_3')}
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
          {/* <AboutSkillsTitle>مهارت ها</AboutSkillsTitle> */}
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
