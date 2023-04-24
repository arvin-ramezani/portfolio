import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledButtonWrapper = styled(motion.div)``;

export const StyledButton = styled(motion.button)<{
  color: string;
  textcolor: string;
}>`
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-family: Roboto, Vazir;
  font-size: 0.7rem;
  font-weight: 900;
  width: 100%;

  background-color: ${({ color }) => color};
  color: ${({ textcolor }) => textcolor};

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`;
