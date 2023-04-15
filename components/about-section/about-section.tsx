import Image from 'next/image';
import React from 'react';

import {
  AboutImageBlock,
  AboutTextBlock,
  AboutTitle,
  StyledAboutSection,
} from '@/styles/components/about-section.styled';
import { Container } from '@/styles/global.styled';
import { Variants, useInView } from 'framer-motion';

const AboutItemsVariants: Variants = {
  initial: { y: '-100vh', opacity: 0 },
  animate: { y: '0', opacity: 1 },
};

const AboutSection = () => {
  return (
    <StyledAboutSection>
      <Container>
        <AboutImageBlock
          variants={AboutItemsVariants}
          initial='initial'
          animate='animate'
        >
          <Image
            src='/images/profile.svg'
            alt='Arvin Ramezani'
            fill
          />
        </AboutImageBlock>

        <AboutTextBlock
          variants={AboutItemsVariants}
          initial='initial'
          animate='animate'
          transition={{ delay: 0.2 }}
        >
          <AboutTitle>About Me</AboutTitle>
          <p>
            <Image
              src='/images/Bullet.svg'
              alt='bullet'
              width={14}
              height={14}
              style={{ display: 'inline-block', marginRight: '0.4rem' }}
            />
            Hello! My name is <strong>Arvin Ramezani</strong>. I’m 30 years old
            living in Iran / Mazandaran / Babolsar.
          </p>

          <p>
            <Image
              src='/images/Bullet.svg'
              alt='bullet'
              width={14}
              height={14}
              style={{ display: 'inline-block', marginRight: '0.4rem' }}
            />
            I started learning Web Development in August 2020 with Persian
            online tutorials and YouTube, after which I expanded my knowledge
            through Udemy online courses and especially Academind courses.
          </p>

          <p>
            <Image
              src='/images/Bullet.svg'
              alt='bullet'
              width={14}
              height={14}
              style={{ display: 'inline-block', marginRight: '0.4rem' }}
            />
            I’m trying to become a{' '}
            <strong>JavaScript & TypeScript Full-Stack Developer.</strong>
          </p>
        </AboutTextBlock>
      </Container>
    </StyledAboutSection>
  );
};

export default AboutSection;
