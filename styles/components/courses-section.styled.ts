import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../theme.styled';

export const StyledCoursesSection = styled.section`
  padding: 1rem;
  max-width: 100%;
  margin: 1rem auto;
  overflow: hidden;

  & h2 {
    font-size: 2rem;
    font-weight: 700;
    margin: 2rem 0 3rem;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    max-width: 80%;
    margin: 1rem auto;
  }
`;

export const CoursesContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin-top: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(0, 500px));
  justify-content: center;
  grid-row-gap: 3rem;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StyledCourseItem = styled(motion.article)`
  line-height: 140%;
  border-radius: 0.6rem;
  position: relative;
  padding: 0.5rem 0.5rem 140px 0.5rem;
  box-sizing: unset;

  background-color: ${({ theme }) => theme.backgroundColors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.textPrimary};

  & h3 {
    padding: 0.6rem;
    font-size: 1.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    & h3 {
      font-size: 1.6rem;
      line-height: 130%;
    }
  }

  @media (min-width: 1660px) {
    padding-bottom: 200px;
  }

  @media (min-width: 2300px) {
    padding-bottom: 290px;
  }
`;

export const CourseItemHeaderWrapper = styled.div`
  direction: ltr;
`;

export const ImageWrapper = styled.div`
  padding: 0 1.4rem;

  & img {
    border-radius: 1rem;
    width: 100%;
    height: auto;
  }
`;

export const CourseBody = styled(motion.div)`
  padding: 0.5rem;

  & > h6 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
`;

export const LearnedList = styled(motion.ul)`
  overflow: hidden;
`;

export const LearnedItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin: 0.4rem 0;
  font-size: 0.9rem;
  line-height: 110%;
`;

export const MoreText = styled(motion.div)`
  cursor: pointer;
  display: inline-block;
  padding: 0.5rem 2rem;
  font-size: 0.8rem;

  color: ${({ theme }) => theme.colors.primary};
`;

export const CourseFooter = styled.div`
  direction: ltr;
  padding: 0.5rem;
  position: absolute;
  bottom: 0;
  left: 0.5rem;
`;

export const CourseLinksList = styled(motion.ul)`
  /* Font size increases by 0.2vw per 1rem 
    increase in viewport width, from a base of 0.8rem up to 1rem. */
  font-size: clamp(0.8rem, calc(0.8rem + 0.2vw), 1rem);
  line-height: 100%;
  /* display: flex;
  align-items: center; */
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const CourseLinkItem = styled.li`
  & a {
    display: flex;
    align-items: center;
    font-size: 0.7rem;
    gap: 0.6rem;

    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
