import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';

export const StyledHeader = styled(motion.header)`
  & > div {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
  }
`;

export const Logo = styled(Image)`
  margin-right: auto;

  @media (min-width: 768px) {
    width: 145px;
    height: 50px;
  }
`;
