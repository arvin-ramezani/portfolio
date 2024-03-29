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

export const StyledCurrentUser = styled.div`
  & h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  & h1 span {
    font-size: 1.2rem;

    color: ${({ theme }) => theme.colors.blueLight};
  }

  & img {
    border-radius: 50%;
  }
`;

export const HeroImageContainer = styled(motion.div)<{
  pagedir: 'rtl' | 'ltr';
}>`
  position: relative;
  width: 300px;
  height: 300px;
  margin-top: 5rem;

  & > img#codingImageLg {
    width: 190% !important;
    height: auto !important;

    right: ${({ pagedir }) => (pagedir === 'rtl' ? '50%' : '0')} !important;

    left: ${({ pagedir }) => (pagedir === 'rtl' ? '0' : '50%')} !important;

    transform: ${({ pagedir }) =>
      pagedir === 'rtl' ? 'translateX(50%)' : 'translateX(-50%)'} !important;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    margin-top: 0;

    & > img#codingImageSm {
      display: none;
    }

    & > img#codingImageLg {
      display: block;
    }
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    & > img#codingImageLg {
      width: 190% !important;

      transform: ${({ pagedir }) =>
        pagedir === 'rtl' ? 'translateX(44%)' : 'translateX(-44%)'} !important;
    }
  }

  @media (min-width: ${theme.breakpoints.xxl}) {
    min-height: 100vh;

    flex: 1;
    overflow: visible;

    & > img#codingImageLg {
      width: 120% !important;
      margin-top: -5%;

      transform: ${({ pagedir }) =>
        pagedir === 'rtl' ? 'translateX(35%)' : 'translateX(-35%)'} !important;
    }
  }
`;
