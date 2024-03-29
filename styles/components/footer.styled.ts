import styled from 'styled-components';
import { motion } from 'framer-motion';

import { theme } from '../themes/theme.styled';

export const StyledFooter = styled.footer`
  min-height: 70vh;
  padding: 4rem 0;
  position: relative;

  & > div {
    flex-direction: column-reverse;
  }

  & h3 {
    font-size: 2rem;
    font-weight: 700;
  }

  & form {
    width: 280px;
    margin: 0 auto;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    & > div {
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-start !important;
    }

    & form {
      margin: 0;
    }
  }
`;

export const SendEmailBlock = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
`;

export const SendEmailTitle = styled.h3`
  align-self: center;
  margin: 3rem 0;

  @media (min-width: ${theme.breakpoints.md}) {
    align-self: flex-start;
  }
`;

export const SendEmailForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 100%;
  margin: 0.5rem 0rem;
  padding: 0.6rem;
  border-radius: 0.3rem;
  font-size: 1rem;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledTextarea = styled.textarea`
  margin: 0.5rem 0rem;
  width: 100%;
  padding: 0.6rem;
  border-radius: 0.3rem;
  font: 1rem;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const ContactBlock = styled(motion.div)<{ pagedir: 'rtl' | 'ltr' }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  direction: ltr;
  color: ${({ theme }) => theme.colors.textSecondary};

  & > div#phoneBlock {
    cursor: pointer;
    margin-top: 0.5rem;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    align-items: flex-start;
    font-size: 1.2rem;
  }
`;

export const ContactTitle = styled.h3<{ pagedir: 'rtl' | 'ltr' }>`
  margin-top: 3rem;
  margin-bottom: 3rem;

  color: ${({ theme }) => theme.colors.textPrimary};
  margin-right: ${({ pagedir }) => (pagedir === 'rtl' ? '0' : 'auto')};
  margin-left: ${({ pagedir }) => (pagedir === 'rtl' ? 'auto' : '0')};
`;

export const SocialMediaBlock = styled(motion.div)`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  & a:hover {
    transform: scale(1.2);
    transition: 0.3s;
  }

  & img {
    cursor: pointer;
  }
`;

export const EmailBlock = styled.div<{ pagedir: 'rtl' | 'ltr' }>`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;

  & p {
    margin-top: 0.3rem;
  }
`;

export const LocationBlock = styled.div<{ pagedir: 'rtl' | 'ltr' }>`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1rem;
`;
