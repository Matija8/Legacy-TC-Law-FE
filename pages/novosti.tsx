import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { SiteHead } from 'components/site-head';
import { NextPage } from 'next';
import styles from 'styles/Home.module.scss';

const newsPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <SiteHead title="Novosti" />
      <Header />
      <main className={styles.main}>
        <div>Novosti TODO</div>
      </main>
      <Footer />
    </div>
  );
};

export default newsPage;
