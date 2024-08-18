import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import HeroSection from '@/components/hero-section/hero-section';
import Header from '@/components/header/header';
import AboutSection from '@/components/about-section/about-section';
import ProjectsSection from '@/components/projects-section/projects-section';
import Footer from '@/components/footer/footer';
import StarsCanvas from '@/components/stars-canvas/stars-canvas';
import { PROJECT_LIST } from '@/utils/data/projects.data';
import CoursesSection from '@/components/courses-section/courses-section';
import { COURSES_LIST_WITH_TRANSLATE } from '@/utils/data/courses.data';
import { IHomePageGetResponse } from './api';
import ExperienceSection from '@/components/experience-section/experience-section';

interface HomePageProps {
  projects: IHomePageGetResponse['projects'];
  courses: IHomePageGetResponse['courses'];
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  try {
    // const { data } = await axios.get<IHomePageGetResponse>(
    //   'http://localhost:4000/api?courses=true&projects=true'
    // );

    const data: IHomePageGetResponse = {
      projects: {
        projectList: PROJECT_LIST.slice(0, 6),
        pagination: {
          count: 6,
          pageCount: Math.ceil(PROJECT_LIST.length / 6),
        },
      },
      courses: {
        courseList: COURSES_LIST_WITH_TRANSLATE.slice(0, 6),
        pagination: {
          count: 6,
          pageCount: Math.ceil(COURSES_LIST_WITH_TRANSLATE.length / 6),
        },
      },
    };

    return {
      props: {
        ...(await serverSideTranslations(locale as string, ['home', 'common'])),
        projects: data.projects,
        courses: data.courses!,
        locale,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};

export default function Home({ projects, courses }: HomePageProps) {
  return (
    <>
      <StarsCanvas />

      <Header />

      <main>
        <HeroSection />

        <AboutSection />

        <ExperienceSection />

        <ProjectsSection projects={projects} />

        <CoursesSection courses={courses} />
      </main>

      <Footer />
    </>
  );
}
