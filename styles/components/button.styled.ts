import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../themes/theme.styled';

export const StyledButtonWrapper = styled(motion.div)``;

export const StyledButton = styled(motion.button)<{
  color: string;
  textcolor: string;
}>`
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-family: Roboto, Vazir;
  font-size: 1rem;
  font-weight: 900;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ color }) => color};
  color: ${({ textcolor }) => textcolor};

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.secondary};
  }

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 1.2rem;
  }
`;
