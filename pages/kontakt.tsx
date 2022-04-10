import { ContactForm } from 'components/contact-form';
import { ContactGroup } from 'components/contact-group';
import { GoogleMap } from 'components/google-map';
import { TcLawPage } from 'components/_page';
import { NextPage } from 'next';
import styles from './kontakt.module.scss';

const contactPage: NextPage = () => {
  return (
    <TcLawPage title="Kontakt">
      <div className={styles['address-and-kontakt']}>
        <section className="adress-left">
          <ContactGroup />
        </section>

        <ContactForm style={{ flexGrow: 1 }} />
      </div>
      <div style={{ height: 400 }}>
        <GoogleMap />
      </div>
    </TcLawPage>
  );
};

export default contactPage;
