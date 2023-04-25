import React, { useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import TypeWriter from '../ui/type-writer/type-writer';

import {
  StyledComingSoon,
  StyledDarkLayout,
  StyledProjectsSection,
  StyledProjectsTitle,
} from '@/styles/components/projects-section.styled';
import { Container } from '@/styles/global.styled';
import { useTranslation } from 'next-i18next';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { t: translator } = useTranslation('home');

  return (
    <StyledProjectsSection
      id={'projects'}
      ref={ref}
    >
      <Image
        id="projectsSectionSmBgTop"
        src="/images/projects-section-background-top.svg"
        alt="Project Section Background"
        width={320}
        height={24}
      />
      <Image
        id="projectsSectionLgBgTop"
        src="/images/projects-section-bg-top-lg.svg"
        alt="Project Section Background"
        width={992}
        height={72}
      />

      <video
        autoPlay
        muted
        loop
      >
        <source
          src="/videos/matrix.mp4"
          type="video/mp4"
        />
      </video>
      <StyledDarkLayout />

      <Container id="projectsSectionContainer">
        <StyledProjectsTitle>
          {translator('projects_title')}
        </StyledProjectsTitle>

        <StyledComingSoon>
          <TypeWriter text={['Coming Soon...!!']} />
        </StyledComingSoon>
      </Container>

      <Image
        id="projectsSectionLgBgBottom"
        src="/images/projects-section-bg-bottom-lg.svg"
        alt="Project Section Background"
        width={992}
        height={72}
      />

      <Image
        id="projectsSectionSmBgBottom"
        src="/images/projects-section-background-bottom.svg"
        alt="Project Section Background"
        width={320}
        height={24}
      />
    </StyledProjectsSection>
  );
};

export default ProjectsSection;
