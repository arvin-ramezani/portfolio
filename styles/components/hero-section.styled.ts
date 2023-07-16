import styled from 'styled-components';
import { motion } from 'framer-motion';

import { theme } from '../themes/theme.styled';

export const StyledHeroSection = styled.section`
  min-height: 100vh;
  display: block;

  & > div {
    height: 100%;
    align-items: center;

    @media (min-width: ${theme.breakpoints.md}) {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      margin-top: 5rem;
    }
  }

  @media (min-width: ${theme.breakpoints.md}) {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const HeroTextContainer = styled(motion.div)`
  height: 60vh;
  display: flex;
  flex-direction: column;
  text-align: center;

  & > h1 {
    font-size: clamp(2rem, 6vw, 4.6rem);
    line-height: 1.4;
    font-weight: 700;

    & > span {
      color: ${({ theme }) => theme.colors.blueLight};
    }
  }

  & > h2 {
    margin-top: 3rem;
  }

  & > p {
    margin-top: 1rem;
  }

  & > h2,
  > p {
    font-weight: 700;
    font-size: 0.8rem;
    letter-spacing: 1px;
    line-height: 1.4;

    color: ${({ theme }) => theme.colors.textSecondary};
  }

  & > div:last-child {
    margin: auto auto 0;
    width: 100%;
    max-width: 400px;
  }

  & button {
    border: none;

    box-shadow: 0 0 4px 1px ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    & > h2,
    > p {
      font-size: 0.8rem;
    }
  }

  @media (min-width: ${theme.breakpoints.md}) {
    text-align: start;
    height: auto;
    flex: 1;

    & > div:last-child {
      margin: 3rem 0 0;
      width: 60%;
    }

    & button {
      font-size: 1rem;
      padding: 0.8rem 0;
    }
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    font-size: 1rem;

    & > h2,
    > p {
      font-size: 1rem;
    }
  }
`;

export const HeroImageContainer = styled(motion.div)<{
  pagedir: 'rtl' | 'ltr';
}>`
  position: relative;
  width: 300px;
  height: 300px;
  margin-top: 5rem;

  @media (min-width: ${theme.breakpoints.md}) {
    margin-top: 0;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    width: 500px;
    height: 500px;
    flex: 1;
  }

  @media (min-width: ${theme.breakpoints.xxl}) {
    & img {
      margin-right: ${({ pagedir }) => (pagedir === 'rtl' ? '10%' : '0')};
      margin-left: ${({ pagedir }) => (pagedir === 'ltr' ? '10%' : '0')};
    }
  }
`;
