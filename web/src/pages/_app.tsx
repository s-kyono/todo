import '../styles/globals.css'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps}: AppProps) => {
  console.log('MyApp');
  return <Component {...pageProps} />
};

export default MyApp
