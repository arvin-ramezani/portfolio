import type { AppProps } from 'next/app';
import Head from 'next/head';
import localFont from 'next/font/local';
import Script from 'next/script';
import { ThemeProvider } from 'styled-components';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { appWithTranslation, useTranslation } from 'next-i18next';

import { GlobalStyle } from '@/styles/global.styled';
import { defaultTheme } from '@/styles/themes/default-theme';
import { store } from '@/features/store';
import { TranslatorFn } from '@/utils/types/translate.types';

const myVazirLocalFont = localFont({
  src: [
    {
      path: '../public/fonts/vazir/Vazir-Thin.ttf',
      weight: '100',
    },
    {
      path: '../public/fonts/vazir/Vazir-Light.ttf',
      weight: '300',
    },
    {
      path: '../public/fonts/vazir/Vazir-Regular.ttf',
      weight: '400',
    },
    {
      path: '../public/fonts/vazir/Vazir-Medium.ttf',
      weight: '500',
    },
    {
      path: '../public/fonts/vazir/Vazir-Bold.ttf',
      weight: '700',
    },
    {
      path: '../public/fonts/vazir/Vazir-Black.ttf',
      weight: '900',
    },
  ],
});

function App({ Component, pageProps }: AppProps) {
  if (typeof document !== 'undefined') {
    document.body.classList.add(myVazirLocalFont.className);
  }
  const { t } = useTranslation();

  const translator = t as TranslatorFn;

  return (
    <SessionProvider>
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle localVazirFont={myVazirLocalFont} />

          {/* Google Analytics */}
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-T229S57SGP"
          />

          <Script id="google-analytics">
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-T229S57SGP');`}
          </Script>

          <Head>
            <meta charSet="utf-8" />

            <link
              rel="icon"
              href="/images/a-plus-logo.svg"
            />

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

          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  );
}

export default appWithTranslation(App);
