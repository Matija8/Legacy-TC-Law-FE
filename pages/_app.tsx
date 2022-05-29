// https://stackoverflow.com/questions/68480061/which-one-font-awesome-in-react-app-using-cdn-or-npm
import '@fontsource/montserrat';
import '../styles/globals.scss';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
