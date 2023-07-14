import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import HeroSection from '@/components/hero-section/hero-section';
import Header from '@/components/header/header';
import AboutSection from '@/components/about-section/about-section';
import ProjectsSection from '@/components/projects-section/projects-section';
import Footer from '@/components/footer/footer';
import StarsCanvas from '@/components/stars-canvas/stars-canvas';
import GoToUp from '@/components/ui/go-to-up/go-to-up';
import { PROJECT_LIST } from '@/utils/data/projects.data';
import CoursesSection from '@/components/courses-section/courses-section';
import {
  COURSES_LIST,
  COURSES_LIST_WITH_TRANSLATE,
} from '@/utils/data/courses.data';
import { IHomePageGetRespose } from './api';

interface HomePageProps {
  projects: IHomePageGetRespose['projects'];
  courses: IHomePageGetRespose['courses'];
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  try {
    // const { data } = await axios.get<IHomePageGetRespose>(
    //   'http://localhost:4000/api?courses=true&projects=true'
    // );

    const data: IHomePageGetRespose = {
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
      <Head>
        <title>Arvin Ramezani - Web Developer Portfolio</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Meet Arvin Ramezani, an aspiring full-stack developer with a focus on JavaScript and TypeScript. Explore his portfolio of web application practice projects and discover the breadth of his skills and experience. You can also find a collection of valuable tutorials he has watched to supplement his learning."
        />
      </Head>

      <StarsCanvas />

      <Header />

      <main>
        <HeroSection />

        <AboutSection />

        <ProjectsSection projects={projects} />

        <CoursesSection courses={courses} />
      </main>

      <Footer />
    </>
  );
}
