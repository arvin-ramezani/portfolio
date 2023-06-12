import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../theme.styled';

export const StyledSkills = styled(motion.div)`
  /* flex: none; */

  font-size: 1.4rem;

  @media (min-width: ${theme.breakpoints.lg}) {
    /* flex: none; */
  }

  @media (min-width: ${theme.breakpoints.xxl}) {
    width: auto;
    flex: 2;
  }
`;

export const SkillsTitle = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem 0 2rem;

  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const SkillsItemBlock = styled(motion.ul)`
  font-size: 1.2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (min-width: ${theme.breakpoints.md}) {
    /* gap: 3rem; */
  }
`;

export const SkillsItem = styled(motion.li)`
  display: flex;
  align-items: center;
  width: 45%;

  color: ${({ theme }) => theme.colors.textPrimary};

  @media (min-width: ${theme.breakpoints.sm}) {
    width: 30%;
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    gap: 0.6rem;
  }

  @media (min-width: ${theme.breakpoints.xxl}) {
    width: 45%;
  }
`;

export const SkillText = styled(motion.p)``;
