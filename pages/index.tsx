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
import { IProject } from '@/utils/types/project.types';
import { PROJECT_LIST } from '@/utils/data/projects.data';
import CoursesSection from '@/components/courses-section/courses-section';

interface HomePageProps {
  projectList: IProject[];
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['home', 'common'])),
      projectList: PROJECT_LIST,
    },
  };
};

export default function Home({ projectList }: HomePageProps) {
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

      <GoToUp />

      <Header />

      <main>
        <HeroSection />

        <AboutSection />

        <ProjectsSection projectList={projectList} />

        <CoursesSection />
      </main>

      <Footer />
    </>
  );
}
