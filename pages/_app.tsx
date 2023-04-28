import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import { GlobalStyle } from '@/styles/global.styled';
import { defaultTheme } from '@/styles/themes/default-theme';

import { ThemeProvider } from 'styled-components';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
