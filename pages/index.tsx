import Head from 'next/head';
import Image from 'next/image';
import HeroSection from '@/components/hero-section/hero-section';
import Header from '@/components/header/header';
import AboutSection from '@/components/about-section/about-section';
import ProjectsSection from '@/components/projects-section/projects-section';
import Footer from '@/components/footer/footer';
import StarsCanvas from '@/components/stars-canvas/stars-canvas';
import styled from 'styled-components';

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
