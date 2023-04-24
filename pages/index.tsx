import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import HeroSection from '@/components/hero-section/hero-section';
import Header from '@/components/header/header';
import AboutSection from '@/components/about-section/about-section';
import ProjectsSection from '@/components/projects-section/projects-section';
import Footer from '@/components/footer/footer';
import StarsCanvas from '@/components/stars-canvas/stars-canvas';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['home', 'common'])),
    },
  };
};

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['home'])),
//     },
//   };
// }

export default function Home() {
  const { t: translator } = useTranslation();

  console.log('translator', translator('home:hero_section_heading'));

  return (
    <>
      <Head>
        <title>A Plus</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Arvin Ramezani Portfolio"
        />
      </Head>
      <main style={{ scrollBehavior: 'smooth' }}>
        <StarsCanvas />
        <Header />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <Footer />
      </main>
    </>
  );
}
