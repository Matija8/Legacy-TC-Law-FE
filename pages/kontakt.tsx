import { FirmAddress } from 'components/address';
import { ContactForm } from 'components/contact-form';
import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { MailIcon } from 'components/mailIcon';
import { SiteHead } from 'components/site-head';
import { gLinks } from 'data/constants';
import { NextPage } from 'next';
import { BsLinkedin } from 'react-icons/bs';
import styles from 'styles/Home.module.scss';
import { gColors } from 'styles/style-constants';

const iconSize = 28;

const contactPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <SiteHead title="Kontakt" />
      <Header />
      <main className={styles.main}>
        <div style={{ display: 'flex' }}>
          <section className="adress-left">
            <h4>Advokatska kancelarija</h4>

            <address>
              <FirmAddress />
            </address>

            <p>
              E-mail: <a href={gLinks.email}>office@tclaw.rs</a>
            </p>

            <div className="icon-flex-row">
              <a href={gLinks.linkedin} aria-label="linkedin">
                <BsLinkedin size={iconSize} color={gColors.red1} />
              </a>
              <a href={gLinks.email} aria-label="email">
                <MailIcon size={iconSize} />
              </a>
            </div>
          </section>

          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default contactPage;
