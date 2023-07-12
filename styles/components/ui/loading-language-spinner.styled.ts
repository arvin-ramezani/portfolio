import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledLoadingLanguageSpinner = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000d3;
`;
