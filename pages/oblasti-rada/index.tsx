import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { SiteHead } from 'components/site-head';
import { WorkAreaGrid } from 'components/work-area-grid';
import { NextPage } from 'next';
import styles from 'styles/Home.module.scss';

const contact: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* <style jsx>{``}</style> */}
      <SiteHead title="Oblasti rada" />
      <Header />
      <main className={styles.main}>
        <h2 className="header-underlined">Oblasti rada</h2>
        <WorkAreaGrid />
      </main>
      <Footer />
    </div>
  );
};

export default contact;
