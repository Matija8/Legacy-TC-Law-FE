import { SnackWrappedContactForm } from 'components/forms/contact-form';
import { GoogleMap } from 'components/google-map';
import { TcLawPage } from 'components/_page';
import { NextPage } from 'next';
import contactStyles from './kontakt.module.scss';

const ContactPage: NextPage = () => {
  return (
    <TcLawPage title="Kontakt">
      <div className={contactStyles.contact}>
        <SnackWrappedContactForm />
        <GoogleMap />
      </div>
    </TcLawPage>
  );
};

export default ContactPage;
