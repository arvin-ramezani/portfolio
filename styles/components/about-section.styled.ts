import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../theme.styled';

export const StyledAboutSection = styled.section`
  height: auto;

  & > div {
    margin-top: 3rem;
    gap: 5rem;
    margin: auto;

    @media (min-width: ${theme.breakpoints.md}) {
      flex-direction: row;
    }
  }

  @media (min-width: ${theme.breakpoints.md}) {
    height: 80vh;
    display: grid;
  }
`;

export const AboutImageBlock = styled(motion.div)`
  position: relative;

  width: 280px !important;

  height: 280px !important;
  margin: auto;

  & img {
    /* width: 100% !important; */
    /* height: auto !important; */
    border-radius: 50% !important;
    width: 280px;
    height: 280px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    /* flex: 2; */
  }
`;

export const AboutTextBlock = styled(motion.div)`
  text-align: center;

  @media (min-width: ${theme.breakpoints.md}) {
    text-align: start;
    flex: 3;
  }

  & > p {
    line-height: 1.4;
    margin-bottom: 1rem;

    & strong {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const AboutTitle = styled(motion.h2)`
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem 0 2rem;
`;
