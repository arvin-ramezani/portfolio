import Image from 'next/image';
import React from 'react';

import {
  AboutImageBlock,
  AboutTextBlock,
  AboutTitle,
} from '@/styles/components/about-section.styled';
import { Container } from '@/styles/global.styled';

const AboutSection = () => {
  return (
    <section>
      <Container>
        <AboutImageBlock>
          <Image
            src='/images/profile.svg'
            alt='Arvin Ramezani'
            fill
          />
        </AboutImageBlock>

        <AboutTextBlock>
          <AboutTitle>About Me</AboutTitle>

          <p>
            Hello! My name is <strong>Arvin Ramezani</strong>. I’m 30 years old
            living in Iran / Mazandaran / Babolsar.
          </p>

          <p>
            I started learning Web Development in August 2020 with Persian
            online tutorials and YouTube, after which I expanded my knowledge
            through Udemy online courses and especially Academind courses.
          </p>

          <p>
            I’m trying to become a{' '}
            <strong>JavaScript & TypeScript Full-Stack Developer</strong>.
          </p>
        </AboutTextBlock>
      </Container>
    </section>
  );
};

export default AboutSection;
