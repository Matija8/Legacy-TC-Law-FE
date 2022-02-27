import { ContactForm } from 'components/contact-form';
import { ContactGroup } from 'components/contact-group';
import { Footer } from 'components/footer';
import { GoogleMap } from 'components/google-map';
import { Header } from 'components/header';
import { SiteHead } from 'components/site-head';
import { NextPage } from 'next';
import homeStyles from 'styles/Home.module.scss';
import styles from './kontakt.module.scss';

const contactPage: NextPage = () => {
  return (
    <div className={homeStyles.container}>
      <SiteHead title="Kontakt" />
      <Header />
      <main className={homeStyles.main}>
        <div className={styles['address-and-kontakt']}>
          <section className="adress-left">
            <ContactGroup />
          </section>

          <ContactForm style={{ flexGrow: 1 }} />
        </div>
        <div style={{ height: 400 }}>
          <GoogleMap />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default contactPage;
