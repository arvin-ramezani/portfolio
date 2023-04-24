import { motion } from 'framer-motion';

import styled from 'styled-components';
import { theme } from '../theme.styled';

export const StyledProjectsSection = styled.section`
  position: relative;
  min-height: 100vh;
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
    height: 100vh;
    min-width: 100vw;
    object-fit: cover;
    z-index: -1;
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
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 700;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 3rem;
    margin-top: 4rem;
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    font-size: 4rem;
    margin-top: 5rem;
  }
`;

export const StyledComingSoon = styled(motion.div)`
  font-size: 1.8rem;
  width: 90%;
  margin-top: 2rem;
  flex: 1;
  display: flex;
  align-items: center;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 2.8rem;
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    font-size: 3.8rem;
  }
`;
