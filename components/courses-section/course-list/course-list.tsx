import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useState, useEffect } from 'react';

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
import CourseItem from '../course-item/course-item';
import { ICourse } from '@/utils/types/course.types';
import { IHomePageGetRespose } from '@/pages/api';
import Pagination from '@/components/ui/pagination/pagination';
import { IPagination } from '@/utils/types/common.types';
import { useGetCoursesByPageQuery } from '@/features/api/apiSlice';

interface CourseListProps {
  courseList: ICourse[];
  pagination: IPagination;
}

const CourseList: FC<CourseListProps> = ({
  courseList: initialCourseList,
  pagination: initialPagination,
}) => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetCoursesByPageQuery(`${page}`);
  const [courseList, setCourseList] = useState(initialCourseList);
  const [pagination, setPagination] = useState(initialPagination);

  useEffect(() => {
    if (typeof data !== 'undefined') {
      console.log(data.courses, 'aa');
      setCourseList(data.courses.courseList);
      setPagination(data.courses.pagination);
    }
  }, [data]);

  return (
    <>
      <CoursesContainer>
        {courseList.map((course) => (
          <CourseItem
            key={course.name}
            name={course.name}
            image={course.image}
            learnedList={course.learnedList}
            links={course.links}
          />
        ))}
      </CoursesContainer>
      <Pagination
        pagination={pagination}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

export default CourseList;
