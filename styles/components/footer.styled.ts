import styled from 'styled-components';
import { theme } from '../theme.styled';
import { motion } from 'framer-motion';

export const StyledFooter = styled.footer`
  min-height: 70vh;
  padding: 4rem 0;

  & > div {
    flex-direction: column-reverse;
  }

  & h3 {
    font-size: 2rem;
    font-weight: 700;
    margin: 3rem 0;
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

    /* & > div > div {
      flex: 1;
    } */

    & form {
      /* width: 50%; */
      margin: 0;
    }
  }
`;

export const SendEmailBlock = styled(motion.div)`
  /* flex: 1; */
  display: flex;
  flex-direction: column;
`;

export const SendEmailTitle = styled.h3`
  align-self: center;

  @media (min-width: ${theme.breakpoints.md}) {
    align-self: flex-start;
  }
`;

export const SendEmailForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 100%; */
`;

export const StyledInput = styled.input`
  width: 100%;
  margin: 0.5rem 0rem;
  padding: 0.6rem;
  border-radius: 0.3rem;
  font: 1rem Roboto;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledTextarea = styled.textarea`
  margin: 0.5rem 0rem;
  width: 100%;
  padding: 0.6rem;
  border-radius: 0.3rem;
  font: 1rem Roboto;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const ContactBlock = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${theme.breakpoints.md}) {
    align-items: flex-start;
  }
`;

export const ContactTitle = styled.h3``;

export const SocialMediaBlock = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  & img {
    cursor: pointer;
  }
`;

export const LocationBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1rem;
`;

export const EmailBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;

  & p {
    margin-top: 0.3rem;
  }
`;
