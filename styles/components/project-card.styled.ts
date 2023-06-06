import styled from 'styled-components';
import { theme } from '../theme.styled';
import { motion } from 'framer-motion';

export const StyledProject = styled(motion.article)`
  position: relative;
  padding: 0.5rem 0.5rem 1.8rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  color: #000;
  grid-column: span 1;
  grid-row: span 1;
  overflow: hidden;

  & h4 {
    font-size: 1.4rem;
    padding: 0.5rem 1rem;
    font-weight: 700;
    margin-bottom: 0.7rem;
    direction: ltr;
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

  & h4 {
    text-align: center;
    font-size: 2rem;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    width: 60%;
  }
`;

export const ToolsContainer = styled.div`
  padding: 0.6rem 0;

  & ul {
    direction: ltr;
    display: flex;
    flex-wrap: wrap;
    column-gap: 0.5rem;

    & li {
      cursor: pointer;
      padding: 0.3rem;
      background: ${({ theme }) => theme.colors.white};
      display: block;
      border-radius: 0.3rem;
    }

    & img {
      margin-right: 0.2rem;
    }
  }
`;

export const StyledProjectDesc = styled(motion.div)`
  font-size: 1.2rem;
  line-height: 120%;
  overflow: hidden;
  padding: 0 0.3rem;
`;

export const ShowMore = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blue};
  background: ${({ theme }) => theme.colors.white};
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  cursor: pointer;
  padding: 0.3rem 0.8rem;

  & span {
    direction: ltr;
    display: inline-block;
  }
`;
