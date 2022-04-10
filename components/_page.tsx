import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { SiteHead } from 'components/site-head';
import { ReactNode } from 'react';
import homeStyles from 'styles/Home.module.scss';

// TODO: tite: typeof pageTitles[string]

export function TcLawPage({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <div className={homeStyles.container}>
      <SiteHead title={title} />
      <Header />
      <main className={homeStyles.main}>{children}</main>
      <Footer />
    </div>
  );
}
