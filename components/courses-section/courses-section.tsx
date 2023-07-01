import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';

import { StyledCoursesSection } from '@/styles/components/courses-section.styled';
import CourseList from './course-list/course-list';
import { IHomePageGetRespose } from '@/pages/api';

interface CoursesSectionProps {
  courses: IHomePageGetRespose['courses'];
}

const CoursesSection: FC<CoursesSectionProps> = ({ courses }) => {
  const { t: translator } = useTranslation();

  return (
    <StyledCoursesSection>
      <h2>{translator('home:courses_title')}</h2>
      <CourseList
        courseList={courses?.courseList || []}
        pagination={courses?.pagination}
      />
    </StyledCoursesSection>
  );
};

export default CoursesSection;
