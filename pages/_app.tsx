import type { AppProps } from 'next/app';
import { GlobalStyle } from '@/styles/global.styled';
import { defaultTheme } from '@/styles/themes/default-theme';
import localFont from 'next/font/local';
import { appWithTranslation } from 'next-i18next';

import { ThemeProvider } from 'styled-components';

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

// const myRobotoFont = localFont({
//   src: [
//     {
//       path: '../public/fonts/roboto/Roboto-Thin.ttf',
//       weight: '100',
//     },
//     {
//       path: '../public/fonts/roboto/Roboto-Light.ttf',
//       weight: '300',
//     },
//     {
//       path: '../public/fonts/roboto/Roboto-Regular.ttf',
//       weight: '400',
//     },
//     {
//       path: '../public/fonts/roboto/Roboto-Medium.ttf',
//       weight: '500',
//     },
//     {
//       path: '../public/fonts/roboto/Roboto-Bold.ttf',
//       weight: '700',
//     },
//     {
//       path: '../public/fonts/roboto/Roboto-Black.ttf',
//       weight: '900',
//     },
//   ],
// });

function App({ Component, pageProps }: AppProps) {
  if (typeof document !== 'undefined') {
    document.body.classList.add(myVazirLocalFont.className);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle
        localVazirFont={myVazirLocalFont}
        // localRobotoFont={myRobotoFont}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
