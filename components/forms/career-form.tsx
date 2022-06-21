import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import { RoundBtn } from 'components/round-btn';
import {
  formInputLimits,
  requiredFieldErrorText,
  validationRegexes,
} from 'data/constants';
import { Formik, FormikErrors } from 'formik';
import { useFilePicker } from 'hooks/use-file-picker-hook';
import Link from 'next/link';
import { useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import { httpPost } from 'util/http-util';
import { RoundSubmittingBtn } from '../round-submitting-button';

interface CareerFormValues {
  nameSurname: string;
  email: string;
  motivationalLetter: string;
  readPrivacy: boolean;
}

export function CareerForm() {
  const [cv, setCv] = useState<File | undefined>(undefined);
  const { onOpen } = useFilePicker((f) => setCv(f));
  return (
    <Formik
      initialValues={{
        nameSurname: '',
        email: '',
        motivationalLetter: '',
        readPrivacy: false,
      }}
      validate={(values) => {
        const errors: FormikErrors<CareerFormValues> = {};
        if (!values.nameSurname) {
          errors.nameSurname = requiredFieldErrorText;
        }

        if (!values.email) {
          errors.email = requiredFieldErrorText;
        } else if (!validationRegexes.email.test(values.email)) {
          errors.email = '*Nevalidan e-mail';
        }

        if (!values.motivationalLetter) {
          errors.motivationalLetter = requiredFieldErrorText;
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          httpPost('mail/careerForm', {
            ...values,
            readPrivacy: String(values.readPrivacy),
          });
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
            width: '70%', // TODO!
          }}
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
            inputProps={{
              maxLength: formInputLimits.email.maxLength,
            }}
          />

          <TextField
            multiline
            rows={6}
            label="Poruka"
            name="motivationalLetter"
            variant="outlined"
            value={values.motivationalLetter}
            error={Boolean(
              touched.motivationalLetter && errors.motivationalLetter,
            )}
            helperText={errors.motivationalLetter || requiredFieldErrorText}
            onChange={handleChange}
            onBlur={handleBlur}
            inputProps={{
              maxLength: formInputLimits.motivationalLetter.maxLength,
            }}
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

          {cv ? (
            <section>
              <p>Učitan CV: {cv.name}</p>
              <div style={{ display: 'flex' }}>
                <RoundBtn onClick={onOpen}>Promenite CV</RoundBtn>
                <RoundBtn onClick={() => setCv(undefined)}>
                  {<FiTrash />} Uklonite CV
                </RoundBtn>
              </div>
            </section>
          ) : (
            <section>
              <div style={{ display: 'flex', alignItems: 'baseline' }}>
                <RoundBtn onClick={onOpen}>Dodajte CV</RoundBtn>
                <span style={{ marginLeft: '0.5rem' }}>
                  (format .pdf, .docx ili .jpg veličine do 3 Mb)
                </span>
              </div>
            </section>
          )}

          <RoundSubmittingBtn
            isSubmitting={isSubmitting}
            disabled={Object.keys(errors).length > 0}
          />
        </form>
      )}
    </Formik>
  );
}
