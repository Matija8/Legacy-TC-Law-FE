import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { SiteHead } from 'components/site-head';
import { NextPage } from 'next';
import styles from 'styles/Home.module.scss';

const newsPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <SiteHead title="Uslovi koriščenja" />
      <Header />
      <div>Uslovi koriščenja TODO</div>
      <Footer />
    </div>
  );
};

export default newsPage;
