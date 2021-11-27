import { GlobalStyle } from '../styles/global';
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import UrlContextProvider from '../contexts/UrlContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <UrlContextProvider>
        <GlobalStyle/>
        <Component {...pageProps} />
      </UrlContextProvider>
    </ThemeProvider>
  );
}

export default MyApp
