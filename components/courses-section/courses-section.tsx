import React from 'react';

import { StyledCoursesSection } from '@/styles/components/courses-section.styled';
import CourseList from './course-list/course-list';

const CoursesSection = () => {
  return (
    <StyledCoursesSection>
      <h2>CoursesSection</h2>
      <CourseList />
    </StyledCoursesSection>
  );
};

export default CoursesSection;
