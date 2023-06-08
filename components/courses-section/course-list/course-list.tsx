import {
  CourseBody,
  CourseFooter,
  CourseLinkItem,
  CourseLinksList,
  CoursesContainer,
  ImageWrapper,
  LearnedItem,
  MoreText,
} from '@/styles/components/courses-section.styled';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CourseItem from '../course-item/course-item';

const CourseList = () => {
  return (
    <CoursesContainer>
      <CourseItem />
      <CourseItem />
      <CourseItem />
      <CourseItem />
      <CourseItem />
      <CourseItem />
    </CoursesContainer>
  );
};

export default CourseList;
