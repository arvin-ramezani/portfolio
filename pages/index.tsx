import Head from 'next/head';
import Image from 'next/image';
import HeroSection from '@/components/hero-section/hero-section';
import Header from '@/components/header/header';

export default function Home() {
  return (
    <>
      <Head>
        <title>A Plus</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta
          name='description'
          content='Arvin Ramezani Portfolio'
        />
      </Head>
      <main>
        <Header />
        <HeroSection />
      </main>
    </>
  );
}
