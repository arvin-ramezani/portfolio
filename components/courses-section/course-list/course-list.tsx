import React, { FC, useState, useEffect } from 'react';

import { CoursesContainer } from '@/styles/components/courses-section.styled';
import CourseItem from '../course-item/course-item';
import { ICourse, ICourseWithTranslate } from '@/utils/types/course.types';
import Pagination from '@/components/ui/pagination/pagination';
import { IPagination } from '@/utils/types/common.types';
import { useGetCoursesByPageQuery } from '@/features/api/apiSlice';
import { useRouter } from 'next/router';

interface CourseListProps {
  courseList: ICourseWithTranslate[];
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
  const router = useRouter();

  const onPaginationChange = () => {
    router
      .replace(
        {
          pathname: window.location.pathname,
          hash: 'courses',
          query: window.location.search,
        },
        undefined,
        { shallow: true }
      )
      .catch((e) => {
        if (!e.cancelled) {
          throw e;
        }
      });
  };

  useEffect(() => {
    if (!data) return;

    setCourseList(data.courses.courseList);
    setPagination(data.courses.pagination);
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
            learned={course.learned}
            links={course.links}
          />
        ))}
      </CoursesContainer>
      <Pagination
        pagination={pagination}
        page={page}
        setPage={setPage}
        onPaginationChange={onPaginationChange}
      />
    </>
  );
};

export default CourseList;
