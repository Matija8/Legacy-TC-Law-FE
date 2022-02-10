import { Formik } from 'formik';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from 'next/link';
import { RoundBtn } from './round-btn';
import CircularProgress from '@mui/material/CircularProgress';

export function ContactForm() {
  return (
    <Formik
      initialValues={{ nameSurname: '', email: '', message: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <form
          style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={(ev) => ev.preventDefault()}
        >
          <label htmlFor="name-surname">Ime i prezime</label>
          <input type="text" id="name-surname" name="name-surname" />

          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="msg">Poruka</label>
          <input type="text" id="msg" name="msg" />

          <FormControlLabel
            control={<Checkbox />}
            label={
              <p>
                Potvrđujem da sam pročitao i da sam saglasan sa{' '}
                <Link href="/politika-privatnosti">
                  <a style={{ textAlign: 'initial' }}>Politikom privatnosti</a>
                </Link>
              </p>
            }
          />

          <RoundBtn
            onClick={() => {
              if (!isSubmitting) {
                // TODO: Disabled prop on btn
                submitForm();
              }
            }}
            style={{ height: 40 }}
          >
            {isSubmitting ? (
              <CircularProgress size={20} style={{ color: 'white' }} />
            ) : (
              'Pošaljite'
            )}
          </RoundBtn>
        </form>
      )}
    </Formik>
  );
}
