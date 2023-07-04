import {
  COURSES_LIST,
  COURSES_LIST_WITH_TRANSLATE,
} from '@/utils/data/courses.data';
import { PROJECT_LIST } from '@/utils/data/projects.data';
import { IPagination } from '@/utils/types/common.types';
import { ICourse, ICourseWithTranslate } from '@/utils/types/course.types';
import { IProject } from '@/utils/types/project.types';
import type { NextApiRequest, NextApiResponse } from 'next';

export interface IHomePageGetRespose {
  projects: {
    projectList?: IProject[];
    pagination: {
      count: number;
      pageCount: number;
    };
  };
  courses: {
    courseList: ICourseWithTranslate[];
    pagination: IPagination;
  };
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IHomePageGetRespose>
) {
  if (req.method === 'GET') {
    const pagination = {
      count: 0,
      pageCount: 0,
    };

    const resData: IHomePageGetRespose = {
      projects: {
        projectList: [],
        pagination,
      },
      courses: {
        courseList: [],
        pagination,
      },
    };

    const projectsPage = req.query.projectsPage || 1;
    const projectsItemsPerPage = 6;
    const skipProjectsItems = (+projectsPage - 1) * projectsItemsPerPage;

    const coursesPage = req.query.coursesPage || 1;
    const coursesItemsPerPage = 6;
    const skipCoursesItems = (+coursesPage - 1) * coursesItemsPerPage;

    if (req.query.projects) {
      const projectList = PROJECT_LIST.slice(
        skipProjectsItems,
        skipProjectsItems + projectsItemsPerPage
      );

      resData.projects = {
        projectList,
        pagination: {
          count: projectList.length - skipProjectsItems,
          pageCount: Math.ceil(
            (projectList?.length || 0) / projectsItemsPerPage
          ),
        },
      };
    }

    if (req.query.courses) {
      const courseList = COURSES_LIST_WITH_TRANSLATE.slice(
        skipCoursesItems,
        skipCoursesItems + coursesItemsPerPage
      );

      resData.courses = {
        courseList,
        pagination: {
          count:
            COURSES_LIST_WITH_TRANSLATE.length -
              (skipCoursesItems + coursesItemsPerPage) || 0,
          pageCount: Math.ceil(
            (COURSES_LIST_WITH_TRANSLATE.length || 0) / coursesItemsPerPage
          ),
        },
      };
    }

    res.status(200).json(resData);
  }
}
