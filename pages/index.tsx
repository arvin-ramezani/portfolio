import Head from 'next/head';
import localFont from 'next/font/local';
import HeroSection from '@/components/hero-section/hero-section';
import Header from '@/components/header/header';
import AboutSection from '@/components/about-section/about-section';
import ProjectsSection from '@/components/projects-section/projects-section';
import Footer from '@/components/footer/footer';
import StarsCanvas from '@/components/stars-canvas/stars-canvas';
import GoToUp from '@/components/ui/go-to-up/go-to-up';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { IProject } from '@/utils/types/project.types';

const dummyDescription: string = `This is a practice project from 
<a
  href="https://www.udemy.com/course/the-nest-js-bootcamp-complete-developer-guide/"
  target="_blank"
>
  <strong>The Nest JS Bootcamp - Complete Developer Guide</strong> 
  Course. This is a simple API side of Realtor app like 
</a>
<a
  href="https://www.realtor.com"
  target="_blank"
>
  Realtor.com
</a>
, where users can signup as realtor to show and sell their homes, and
other users as buyers can signup for message to realtors to buy the
specific house.
<br />
This was very simple app but teaches a lot about different parts of
NestJS framework like: ORM Integration, Middleware, Interceptors,
Guards, Decorators, Param Decorators, Integration Testing and so on.
<br />I also learned Swagger for API documentation and apply to this
project.`;

const DUMMY_PROJECT_LIST: IProject[] = [
  {
    name: 'Realtor App',
    video: '/videos/nestjs-realtor-demo.mp4',
    cover: '/images/projects-cover/realtor-app.svg',
    description: dummyDescription,
    translatorName: 'realtor_app',
  },
];

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['home', 'common'])),
      projectList: DUMMY_PROJECT_LIST,
    },
  };
};

export default function Home({ projectList }: { projectList: IProject[] }) {
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
      </main>

      <Footer />
    </>
  );
}
