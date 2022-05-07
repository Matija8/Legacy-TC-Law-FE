import { CookiesAreUsedBanner } from 'components/cookies-used-banner';
import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { SiteHead } from 'components/site-head';
import { ReactNode } from 'react';
import homeStyles from 'styles/Home.module.scss';

export function TcLawPage({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <div className={homeStyles['root-container']}>
      <SiteHead title={title} />
      <Header />
      <main className={homeStyles.main}>{children}</main>
      <Footer />
      <CookiesAreUsedBanner key="Cookies banner" />
    </div>
  );
}
