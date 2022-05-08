import { ContactForm } from 'components/forms/contact-form';
import { GoogleMap } from 'components/google-map';
import { TcLawPage } from 'components/_page';
import { NextPage } from 'next';
import contactStyles from './kontakt.module.scss';

const contactPage: NextPage = () => {
  return (
    <TcLawPage title="Kontakt">
      <div className={contactStyles.contact}>
        <ContactForm />
        <GoogleMap />
      </div>
    </TcLawPage>
  );
};

export default contactPage;
