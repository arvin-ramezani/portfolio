import React, { useRef } from 'react';
import Image from 'next/image';
import TypeWriter from '../ui/type-writer/type-writer';
import { useTranslation } from 'next-i18next';

import {
  ProjectsContainer,
  StyledComingSoon,
  StyledDarkLayout,
  StyledProjectsSection,
  StyledProjectsTitle,
} from '@/styles/components/projects-section.styled';
import { Container } from '@/styles/global.styled';
import Project from '../project/project';

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
        playsInline
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
          {translator('home:projects_title')}
        </StyledProjectsTitle>

        <ProjectsContainer>
          <Project
            name="Realtor App"
            video="/videos/nestjs-realtor-demo.mp4"
          />

          <Project
            name="Pizza Shop"
            video="/videos/pizza-shop.mp4"
          />
        </ProjectsContainer>
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
