import { GlobalStyle } from '@/styles/global.styled';
import '@/styles/globals.css';
import { defaultTheme } from '@/styles/themes/default-theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
