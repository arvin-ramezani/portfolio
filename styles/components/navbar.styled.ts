import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../themes/theme.styled';

export const StyledNavbar = styled.nav`
  display: none;

  & > ul {
    display: flex;
    gap: 1rem;
  }

  & > ul > li {
    display: block;
    height: 100%;
    position: relative;
  }

  & > ul > li > a {
    text-decoration: none;
    font-weight: 500;

    color: ${({ theme }) => theme.colors.textPrimary};
  }

  @media (min-width: ${theme.breakpoints.md}) {
    display: block;
  }
`;

export const ActiveNavItemStyle = styled(motion.span)`
  height: 0.3rem;
  display: block;
  margin-top: 0.4rem;
  border-radius: 40%;
  position: absolute;
  left: 0;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.primary};
`;
