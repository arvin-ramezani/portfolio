import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import HeroSection from '@/components/hero-section/hero-section';
import Header from '@/components/header/header';
import AboutSection from '@/components/about-section/about-section';
import ProjectsSection from '@/components/projects-section/projects-section';
import Footer from '@/components/footer/footer';
import StarsCanvas from '@/components/stars-canvas/stars-canvas';
import { PROJECT_LIST } from '@/utils/data/projects.data';
import CoursesSection from '@/components/courses-section/courses-section';
import { COURSES_LIST_WITH_TRANSLATE } from '@/utils/data/courses.data';
import { IHomePageGetRespose } from './api';
import { TranslatorFn } from '@/utils/types/translate.types';

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
  const { t } = useTranslation();

  const translator = t as TranslatorFn;

  return (
    <>
      <Head>
        <title>{translator('home:title_tag')}</title>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content={translator('home:desc_meta_tag')}
        />
        <meta
          property="og:site_name"
          content={translator('home:og_meta_tag_site_name')}
        />
        <meta
          property="og:title"
          content={translator('home:title_tag')}
        />
        <meta
          property="og:description"
          content={translator('home:desc_meta_tag')}
        />
        <meta
          property="og:image"
          content={translator('home:og_meta_tag_image')}
        />
        <meta
          property="og:image:width"
          content="1200"
        />
        <meta
          property="og:image:height"
          content="700"
        />
        <meta
          property="og:url"
          content={translator('home:og_meta_tag_url')}
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:locale"
          content={translator('home:og_meta_tag_locale')}
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
