import { motion } from 'framer-motion';
import styled from 'styled-components';

import { theme } from '../themes/theme.styled';

export const StyledAboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    gap: 3rem;
    margin: 5rem auto;

    @media (min-width: ${theme.breakpoints.lg}) {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: stretch;
    }
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    align-items: center;
    min-height: 80vh;
    padding-bottom: 2rem;

    & > div {
      margin: 0 auto;
    }
  }

  @media (min-width: ${theme.breakpoints.xxl}) {
    align-items: flex-start;
    min-height: 50vh;
  }
`;

export const AboutImageBlock = styled(motion.div)`
  position: relative;

  width: 280px !important;

  height: 280px !important;
  margin: auto;

  & img {
    border-radius: 50% !important;
    width: 280px;
    height: 280px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    width: 200px !important;
    height: 200px !important;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    margin: 0;
  }
`;

export const AboutTextBlock = styled(motion.div)`
  text-align: stretch;
  font-size: 1rem;

  & > p {
    line-height: 1.4;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.textSecondary};

    & strong {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  & p:last-child {
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary} !important;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    text-align: start;
    flex: 3;
    font-size: 1.2rem;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    flex: none;
    width: 40%;
  }

  @media (min-width: ${theme.breakpoints.xxl}) {
    flex: none;
    width: auto;
    flex: 3;
  }
`;

export const AboutTitle = styled(motion.h2)`
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem 0 2rem;
  text-align: center;

  @media (min-width: ${theme.breakpoints.sm}) {
    text-align: start;
    margin-top: 0;
  }
`;

export const AboutTextItem = styled(motion.p)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const DownloadResumeBlock = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: fit-content;
  margin: 1rem 0;
  position: relative;
`;

export const StyledCloseIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DownloadResumeBtnWrapper = styled(motion.div)`
  & button {
    border: none;
    box-shadow: 0 0 4px 1px ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledBullet = styled(motion.span)`
  display: inline-block;
  width: 0.7rem;
  height: 0.7rem;
  background-color: ${({ theme }) => theme.colors.textPrimary};
  margin-right: 0.5rem;
  cursor: pointer;
`;
