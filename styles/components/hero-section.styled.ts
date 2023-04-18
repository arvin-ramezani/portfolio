import styled from 'styled-components';
import { theme } from '../theme.styled';
import { motion } from 'framer-motion';

export const StyledHeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    height: 100%;
    align-items: center;

    @media (min-width: ${theme.breakpoints.md}) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      /* margin-top: 3rem; */
    }
  }
`;

export const HeroTextContainer = styled(motion.div)`
  /* margin-top: 3rem; */
  height: 60vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  /* align-items: center; */

  & > p {
    margin-top: 3rem;
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 1.5;
  }

  & > h1 {
    /* font-size: 3rem; */
    font-size: clamp(3rem, 8vw, 5rem);
    line-height: 1.2;
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
    /* max-width: 380px; */
    flex: 1;
  }
`;

export const HeroImageContainer = styled(motion.div)`
  position: relative;
  width: 300px;
  height: 300px;

  @media (min-width: ${theme.breakpoints.xl}) {
    width: 500px;
    height: 500px;
    flex: 1;
  }
`;
