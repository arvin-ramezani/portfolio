import type { AppProps } from 'next/app';
import { GlobalStyle } from '@/styles/global.styled';
import { defaultTheme } from '@/styles/themes/default-theme';
import localFont from 'next/font/local';
import { appWithTranslation } from 'next-i18next';

import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from '@/features/store';

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

  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle localVazirFont={myVazirLocalFont} />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default appWithTranslation(App);
