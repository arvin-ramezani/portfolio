import styled from 'styled-components';
import { theme } from '../theme.styled';
import { motion } from 'framer-motion';

export const StyledHeroSection = styled.section`
  min-height: 100vh;

  & > div {
    height: 100%;
    align-items: center;

    @media (min-width: ${theme.breakpoints.md}) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-top: 5rem;
    }
  }

  @media (min-width: ${theme.breakpoints.md}) {
    min-height: 80vh;
  }
`;

export const HeroTextContainer = styled(motion.div)`
  height: 60vh;
  display: flex;
  flex-direction: column;
  text-align: center;

  & > p {
    margin-top: 3rem;
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 1.5;
  }

  & > h1 {
    font-size: clamp(3rem, 6vw, 5rem);
    line-height: 1.4;
    font-weight: 700;
  }

  & > div:last-child {
    margin: auto auto 0;
    width: 100%;
    max-width: 400px;

    @media (min-width: ${theme.breakpoints.md}) {
      margin: 3rem 0 0;
      width: 60%;
    }
  }

  @media (min-width: ${theme.breakpoints.md}) {
    text-align: start;
    height: auto;
    flex: 1;

    & button {
      font-size: 1rem;
      padding: 0.8rem 0;
    }
  }
`;

export const HeroImageContainer = styled(motion.div)`
  position: relative;
  width: 300px;
  height: 300px;

  @media (min-width: ${theme.breakpoints.lg}) {
    width: 500px;
    height: 500px;
    flex: 1;
  }
`;
