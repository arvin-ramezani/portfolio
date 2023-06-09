import styled from 'styled-components';
import { theme } from '../themes/theme.styled';
import { motion } from 'framer-motion';

export const StyledProjectCard = styled(motion.article)`
  position: relative;
  padding: 0.5rem 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  color: #000;
  grid-column: span 1;
  grid-row: span 1;
  overflow: hidden;
  height: fit-content;

  & h4 {
    font-size: 1.4rem;
    padding: 0.5rem 1rem;
    font-weight: 700;
    margin-bottom: 0.7rem;
    direction: ltr;
    height: 60px;
  }
`;

export const VideoContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: auto;
  cursor: pointer;
  background-color: #000;
  border-radius: 0.3rem;

  & > img {
    width: 100%;
    height: auto;
    border-radius: 0.3rem;
  }
`;

export const PlayBackDrop = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 0.3rem;
`;

export const StyledVideoModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  cursor: default;

  & img {
    position: fixed;
    top: 2rem;
    right: 2rem;
    cursor: pointer;
  }

  & video {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    & video {
      width: 70%;
      height: auto;
    }
  }
`;

export const StyledNotice = styled.div`
  width: 90%;
  background: #fff;
  padding: 2rem 1rem 1rem;
  border-radius: 0.5rem;
  line-height: 130%;
  font-size: 1.2rem;

  & button {
    border: none;

    box-shadow: 0 0 4px 1px ${({ theme }) => theme.colors.primary};
  }

  & h4 {
    text-align: center;
    font-size: 2rem;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    width: 60%;
  }

  @media (min-width: ${theme.breakpoints.xxl}) {
    width: 40%;
  }
`;

export const ToolsContainer = styled.div`
  padding: 0.6rem 0;

  & ul {
    direction: ltr;
    display: flex;
    flex-wrap: wrap;
    column-gap: 0.5rem;
    font-size: 0.9rem;
    align-items: flex-start;
    align-content: flex-start;
    height: 124px;

    & li {
      cursor: pointer;
      padding: 0.3rem;
      padding-top: 0.5rem;
      display: flex;
      align-items: center;
      border-radius: 0.3rem;
      width: 48%;
      color: #000;

      background: ${({ theme }) => theme.colors.white};
    }

    & img {
      margin-right: 0.2rem;
      margin-bottom: 0.3rem;
    }

    @media (min-width: ${theme.breakpoints.lg}) {
      font-size: 0.7rem;
    }

    @media (min-width: ${theme.breakpoints.xl}) {
      font-size: 0.9rem;
    }
  }
`;

export const StyledProjectDesc = styled(motion.div)`
  font-size: 1.2rem;
  line-height: 120%;
  overflow: hidden;
  padding: 0 0.3rem;

  & p {
    margin-bottom: 2rem;

    & a {
      text-decoration: none;
    }
  }
`;

export const ShowMore = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blue};
  background: ${({ theme }) => theme.colors.white};
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 0.3rem 0.5rem;

  & > div {
    display: inline-block;
    cursor: pointer;
  }

  & span {
    direction: ltr;
    display: inline-block;
  }
`;

export const StyledProjectActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
  font-size: 1rem;
  padding: 0 0.5rem;

  & button:first-child {
    border: none;

    box-shadow: 0 0 4px 1px ${({ theme }) => theme.colors.primary};
  }

  & button {
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
  }
`;
