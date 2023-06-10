import React, { FC } from 'react';

import { StyledCoursesSection } from '@/styles/components/courses-section.styled';
import CourseList from './course-list/course-list';
import { IHomePageGetRespose } from '@/pages/api';

interface CoursesSectionProps {
  courses: IHomePageGetRespose['courses'];
}

const CoursesSection: FC<CoursesSectionProps> = ({ courses }) => {
  return (
    <StyledCoursesSection>
      <h2>Courses</h2>
      <CourseList
        courseList={courses?.courseList || []}
        pagination={courses?.pagination}
      />
    </StyledCoursesSection>
  );
};

export default CoursesSection;
