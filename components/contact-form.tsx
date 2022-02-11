import { Formik } from 'formik';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from 'next/link';
import { RoundBtn } from './round-btn';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';

export function ContactForm() {
  return (
    <Formik
      initialValues={{
        nameSurname: '',
        email: '',
        message: '',
        readPrivacy: false,
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ submitForm, isSubmitting, values, handleChange }) => (
        <form
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          onSubmit={(ev) => ev.preventDefault()}
        >
          <TextField
            label="Ime i prezime"
            name="nameSurname"
            variant="outlined"
            value={values.nameSurname}
            onChange={handleChange}
          />

          <TextField
            label="E-mail"
            name="email"
            variant="outlined"
            type="email"
            value={values.email}
            onChange={handleChange}
          />

          <TextField
            multiline
            rows={6}
            label="Poruka"
            name="message"
            variant="outlined"
            value={values.message}
            onChange={handleChange}
          />

          <FormControlLabel
            control={
              <Checkbox value={values.readPrivacy} onChange={handleChange} />
            }
            name="readPrivacy"
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
