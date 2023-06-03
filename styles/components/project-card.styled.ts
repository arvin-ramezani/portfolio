import styled from 'styled-components';
import { theme } from '../theme.styled';
import { motion } from 'framer-motion';

export const StyledProject = styled.article`
  padding: 0.5rem;
  background: #fff;
  border-radius: 0.5rem;
  color: #000;
  grid-column: span 1;
  grid-row: span 1;

  & h4 {
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

export const VideoModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;

  & img {
    position: fixed;
    top: 2rem;
    right: 2rem;
    cursor: pointer;
  }

  & video {
    width: 100%;
    height: auto;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    & video {
      width: 70%;
      height: auto;
    }
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
      background: #fff;
      display: block;
      border-radius: 0.3rem;
    }

    & img {
      margin-right: 0.2rem;
    }
  }
`;
