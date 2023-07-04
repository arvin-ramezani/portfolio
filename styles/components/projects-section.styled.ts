import { motion } from 'framer-motion';
import styled from 'styled-components';

import { theme } from '../themes/theme.styled';

export const StyledProjectsSection = styled(motion.section)`
  position: relative;
  min-height: 95vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  scroll-behavior: smooth;

  & > #projectsSectionLgBgTop,
  & > #projectsSectionLgBgBottom {
    display: none;
  }

  & > #projectsSectionSmBgTop,
  & > #projectsSectionSmBgBottom {
    width: 100%;
    height: auto;
    margin-top: -0.15rem;
  }

  & > #projectsSectionSmBgBottom {
    width: 100%;
    height: auto;
    margin: auto 0 -0.5rem;
  }

  & > video {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    min-width: 100vw;
    object-fit: cover;
    z-index: -1;
  }

  & #projectsSectionContainer {
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 0.5rem;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    & #projectsSectionContainer {
      flex-direction: column;
    }

    & #projectsSectionSmBgTop,
    & #projectsSectionSmBgBottom {
      display: none;
    }

    & #projectsSectionLgBgTop,
    & #projectsSectionLgBgBottom {
      display: block;
      width: 100%;
      height: auto;
      margin-top: -0.15rem;
    }

    & > #projectsSectionLgBgBottom {
      width: 100%;
      height: auto;
      margin: auto 0 -0.5rem;
    }

    & > img {
      margin-top: -0.2rem;
    }
  }

  @media (min-width: ${theme.breakpoints.xxl}) {
    & > img {
      margin-top: -0.3rem;
    }
  }
`;

export const StyledDarkLayout = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: #0b326a8c;
`;

export const StyledProjectsTitle = styled(motion.h2)`
  margin: 0rem 0 3rem;
  font-size: 2rem;
  font-weight: 700;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 3rem;
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    font-size: 4rem;
  }
`;

export const StyledComingSoon = styled(motion.div)`
  font-size: 1.8rem;
  width: 90%;
  margin-top: 2rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 2.8rem;
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    font-size: 3.8rem;
  }
`;

export const ProjectsContainer = styled(motion.div)`
  display: grid;
  grid-gap: 1rem;
  margin-top: 2rem;
  grid-template-columns: 1fr;
  padding: 0 0.5rem 3rem;

  @media (min-width: ${theme.breakpoints.md}) {
    max-width: 80%;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${theme.breakpoints.xxl}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
