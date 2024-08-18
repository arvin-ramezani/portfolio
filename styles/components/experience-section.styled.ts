import { motion } from 'framer-motion';
import styled from 'styled-components';

import { theme } from '../themes/theme.styled';
import { Container } from '../global.styled';

export const ExperienceContainer = styled(Container)`
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledExperienceTitle = styled(motion.h2)`
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

export const ExperienceItemCompany = styled.a`
  display: flex;
  align-items: flex-start;
  gap: 0.4rem;
  text-decoration: none;
  width: fit-content;

  color: ${theme.colors.textPrimary};

  & > div > p {
    margin-top: 0.4rem;
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

export const ExperienceItemTitle = styled.div`
  display: flex;
  align-items: baseline;

  & h3 {
    font-weight: 600;
    font-size: 1.2rem;
  }

  & time {
    font-size: 0.8rem;
  }

  & time:first-of-type {
    margin-inline-start: 0.5rem;
    margin-inline-end: 0.2rem;
  }

  & time:last-of-type {
    margin-inline-start: 0.2rem;
  }
`;

export const ExperienceItemDate = styled.time`
  font-size: 0.9rem;
`;

export const ExperienceItemAddress = styled.div`
  font-size: 0.8rem;
  font-weight: 300;
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
  margin-top: 0.5rem;
`;

export const ExperienceItemBulletList = styled.ul`
  margin-top: 0.8rem;

  & li {
    display: flex;
    align-items: flex-start;
    gap: 0.2rem;
    margin-top: 0.6rem;
    line-height: 1.2rem;
  }
`;
