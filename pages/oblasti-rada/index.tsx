import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { SiteHead } from 'components/site-head';
import { NextPage } from 'next';
import styles from 'styles/Home.module.scss';

const contact: NextPage = () => {
  return (
    <div className={styles.container}>
      <SiteHead title="Oblasti rada" />
      <Header />
      <div>Oblasti rada TODO</div>
      <Footer />
    </div>
  );
};

export default contact;
