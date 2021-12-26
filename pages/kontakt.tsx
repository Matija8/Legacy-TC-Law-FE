import { Header } from 'components/header';
import { SiteHead } from 'components/site-head';
import { NextPage } from 'next';
import styles from '../styles/Home.module.scss';

const contactPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <SiteHead title="Kontakt" />
      <Header />
      <div>Kontakt TODO</div>
    </div>
  );
};

export default contactPage;
