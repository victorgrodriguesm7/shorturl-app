import React from 'react'
import { GlobalStyle } from '../styles/global';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp
