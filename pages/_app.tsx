import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { CookiesAreUsedBanner } from 'components/cookies-used-banner';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <CookiesAreUsedBanner key="Cookies banner" />
    </>
  );
}

export default MyApp;
