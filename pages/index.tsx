import Head from 'next/head';

import HeroSection from '@/components/hero-section/hero-section';
import Header from '@/components/header/header';
import AboutSection from '@/components/about-section/about-section';
import ProjectsSection from '@/components/projects-section/projects-section';
import Footer from '@/components/footer/footer';
import StarsCanvas from '@/components/stars-canvas/stars-canvas';
import GoToUp from '@/components/ui/go-to-up/go-to-up';

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale as string, ['home', 'common'])),
//     },
//   };
// };

export default function Home() {
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
          content="A Plus Web Solutions"
        />
      </Head>

      <StarsCanvas />

      <GoToUp />

      <Header />

      <main style={{ scrollBehavior: 'smooth' }}>
        <HeroSection />

        <AboutSection />

        <ProjectsSection />
      </main>

      <Footer />
    </>
  );
}
