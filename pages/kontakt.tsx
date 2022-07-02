import { ContactForm } from 'components/forms/contact-form';
import { GoogleMap } from 'components/google-map';
import { Snackbar } from 'components/snackbar';
import { TcLawPage } from 'components/_page';
import { NextPage } from 'next';
import { useState } from 'react';
import contactStyles from './kontakt.module.scss';

const ContactPage: NextPage = () => {
  const [snackMessage, setSnack] = useState('');
  return (
    <TcLawPage title="Kontakt">
      <div className={contactStyles.contact}>
        <ContactForm
          onSubmitSuccess={() => setSnack('Slanje poruke uspešno izvršeno!')}
          onSubmitError={() =>
            setSnack('Greška pri slanju poruke kroz kontakt formu!')
          }
        />
        <GoogleMap />
      </div>

      <Snackbar
        open={!!snackMessage}
        message={snackMessage}
        onClose={() => setSnack('')}
      />
    </TcLawPage>
  );
};

export default ContactPage;
