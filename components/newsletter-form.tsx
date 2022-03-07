import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import { RoundBtn } from 'components/round-btn';
import { requiredFieldErrorText, validationRegexes } from 'data/constants';
import { Formik, FormikErrors } from 'formik';
import Link from 'next/link';
import { RoundSubmittingBtn } from './round-submitting-button';

interface NewsletterFormValues {
  nameSurname: string;
  email: string;
  motivationalLetter: string;
  readPrivacy: boolean;
}

const textFieldVariant = 'standard';

export function NewsletterForm() {
  return (
    <Formik
      initialValues={{
        nameSurname: '',
        email: '',
        readPrivacy: false,
      }}
      validate={(values) => {
        const errors: FormikErrors<NewsletterFormValues> = {};
        if (!values.nameSurname) {
          errors.nameSurname = requiredFieldErrorText;
        }

        if (!values.email) {
          errors.email = requiredFieldErrorText;
        } else if (!validationRegexes.email.test(values.email)) {
          errors.email = '*Nevalidan e-mail';
        }

        if (!values.readPrivacy) {
          // TODO
          errors.readPrivacy =
            'Morate biti saglasni sa politikom privatnosti da bi ste se prijavili na novosti';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <TextField
            label="Ime i prezime"
            name="nameSurname"
            variant={textFieldVariant}
            value={values.nameSurname}
            error={Boolean(touched.nameSurname && errors.nameSurname)}
            helperText={errors.nameSurname || requiredFieldErrorText}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextField
            label="E-mail"
            name="email"
            variant={textFieldVariant}
            type="email"
            value={values.email}
            error={Boolean(touched.email && errors.email)}
            helperText={
              (touched.email && errors.email) || requiredFieldErrorText
            }
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* TODO: privacy error */}
          <FormControlLabel
            control={
              <Checkbox value={values.readPrivacy} onChange={handleChange} />
            }
            name="readPrivacy"
            label={
              <p style={{ margin: 0, textAlign: 'initial' }}>
                Potvrđujem da sam pročitao i da sam saglasan sa{' '}
                <Link href="/politika-privatnosti">
                  <a style={{ whiteSpace: 'nowrap' }}>Politikom privatnosti</a>
                </Link>
              </p>
            }
          />

          {/* TODO: Disabled state */}
          {/* {Object.values(errors).some((err) => err) && (
            <p>TODO: Disable button</p>
          )} */}

          <RoundSubmittingBtn
            isSubmitting={isSubmitting}
            submitForm={submitForm}
            text={'Prijavite se'}
          />
        </form>
      )}
    </Formik>
  );
}
