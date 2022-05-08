import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import { requiredFieldErrorText, validationRegexes } from 'data/constants';
import { Formik, FormikErrors } from 'formik';
import Link from 'next/link';
import { CSSProperties } from 'react';
import { RoundSubmittingBtn } from '../round-submitting-button';

interface ContactFormValues {
  nameSurname: string;
  email: string;
  message: string;
  readPrivacy: boolean;
}

export function ContactForm({ style }: { style?: CSSProperties }) {
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
      validate={(values) => {
        const errors: FormikErrors<ContactFormValues> = {};
        if (!values.nameSurname) {
          errors.nameSurname = requiredFieldErrorText;
        }

        if (!values.email) {
          errors.email = requiredFieldErrorText;
        } else if (!validationRegexes.email.test(values.email)) {
          errors.email = '*Nevalidan e-mail';
        }

        if (!values.message) {
          errors.message = requiredFieldErrorText;
        }

        return errors;
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        submitForm,
        touched,
        values,
      }) => (
        <form
          style={{
            ...style,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            label="Ime i prezime"
            name="nameSurname"
            variant="outlined"
            value={values.nameSurname}
            error={Boolean(touched.nameSurname && errors.nameSurname)}
            helperText={errors.nameSurname || requiredFieldErrorText}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <TextField
            label="E-mail"
            name="email"
            variant="outlined"
            type="email"
            value={values.email}
            error={Boolean(touched.email && errors.email)}
            helperText={
              (touched.email && errors.email) || requiredFieldErrorText
            }
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <TextField
            multiline
            rows={6}
            label="Poruka"
            name="message"
            variant="outlined"
            value={values.message}
            error={Boolean(touched.message && errors.message)}
            helperText={errors.message || requiredFieldErrorText}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <FormControlLabel
            control={
              <Checkbox
                value={values.readPrivacy}
                onChange={handleChange}
                required
              />
            }
            name="readPrivacy"
            label={
              <p style={{ margin: 0 }}>
                Potvrđujem da sam pročitao i da sam saglasan sa{' '}
                <Link href="/politika-privatnosti">
                  <a style={{ textAlign: 'initial' }}>Politikom privatnosti</a>
                </Link>
              </p>
            }
          />

          <RoundSubmittingBtn
            isSubmitting={isSubmitting}
            disabled={Object.keys(errors).length > 0}
          />
        </form>
      )}
    </Formik>
  );
}
