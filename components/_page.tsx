import { CookiesAreUsedBanner } from 'components/cookies-used-banner';
import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { SiteHead } from 'components/site-head';
import { SnackbarCtxProvider } from 'contexts/snackbar-context';
import { ReactNode, useState } from 'react';
import homeStyles from 'styles/Home.module.scss';
import { Snackbar } from './snackbar';

export function TcLawPage({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  const [snackMessage, setSnack] = useState('');
  return (
    <div className={homeStyles['root-container']}>
      <SiteHead title={title} />
      <Header />
      <SnackbarCtxProvider value={setSnack}>
        <main className={homeStyles.main}>{children}</main>
        <Footer />
      </SnackbarCtxProvider>
      <Snackbar
        open={!!snackMessage}
        message={snackMessage}
        onClose={() => setSnack('')}
      />
      <CookiesAreUsedBanner key="Cookies banner" />
    </div>
  );
}
