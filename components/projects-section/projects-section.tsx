import React, { useRef } from 'react';
import Image from 'next/image';
import TypeWriter from '../ui/type-writer/type-writer';
import { useTranslation } from 'next-i18next';

import {
  StyledComingSoon,
  StyledDarkLayout,
  StyledProjectsSection,
  StyledProjectsTitle,
} from '@/styles/components/projects-section.styled';
import { Container } from '@/styles/global.styled';

const ProjectsSection = () => {
  const { t: translator } = useTranslation();

  return (
    <StyledProjectsSection id={'projects'}>
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
        {/* <StyledProjectsTitle>پروژه های من</StyledProjectsTitle> */}
        <StyledProjectsTitle>
          {translator('home:projects_title')}
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
