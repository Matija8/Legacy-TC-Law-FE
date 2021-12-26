import { Header } from 'components/header';
import { SiteHead } from 'components/site-head';
import { NextPage } from 'next';
import styles from '../styles/Home.module.scss';

const ourTeamPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <SiteHead title="Naš tim" />
      <Header />
      <div>Naš tim TODO</div>
    </div>
  );
};

export default ourTeamPage;
