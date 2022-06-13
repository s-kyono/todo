import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.scss';

/**
 * ページ基底
 * @return {AppProps} SPA(シングルページアプリケーション)ページ基底
 */
const App = ({ Component, pageProps}: AppProps) => {
  return <Component {...pageProps} />
};

export default App;
