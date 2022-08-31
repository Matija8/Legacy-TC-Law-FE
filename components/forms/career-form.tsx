import TextField from '@mui/material/TextField';
import { PrivacyPolicyCheckbox } from 'components/form-components/privacy-policy-checkbox';
import {
  getRecaptchaToken,
  ReCaptcha,
  useRecaptchaRef,
} from 'components/recaptcha';
import { RoundBtn } from 'components/round-btn';
import { useSnackbar } from 'contexts/snackbar-context';
import {
  formInputLimits,
  requiredCheckboxText,
  requiredFieldErrorText,
  useTestMail,
  validationRegexes,
} from 'data/constants';
import { Formik, FormikErrors } from 'formik';
import {
  useFilePicker,
  validateFileLessThanMib,
} from 'hooks/use-file-picker-hook';
import { useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import { FormUtil } from 'util/form-util';
import { httpPost, httpPostWFile } from 'util/http-util';
import { RoundSubmittingBtn } from '../round-submitting-button';

interface CareerFormValues {
  nameSurname: string;
  email: string;
  motivationalLetter: string;
  readPrivacy: boolean;
}

const initialValues: CareerFormValues = {
  nameSurname: '',
  email: '',
  motivationalLetter: '',
  readPrivacy: false,
};

interface FormProps extends FormUtil.FormSubmitProps {}

export function CareerForm(props: FormProps) {
  const [cv, setCv] = useState<File | undefined>(undefined);
  const { onOpen } = useFilePicker((f) => setCv(f), validateCv);
  const reCaptchaRef = useRecaptchaRef();

  return (
    <Formik
      initialValues={initialValues}
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

        if (!values.readPrivacy) {
          errors.readPrivacy = requiredCheckboxText;
        }

        return errors;
      }}
      onSubmit={FormUtil.FormikOnSubmitWrapper(
        async (values, { resetForm }) => {
          const recaptchaToken = await getRecaptchaToken(reCaptchaRef);

          // TODO: Send recaptcha token to server
          console.log(`*$`, { recaptchaToken }); //T*DO

          const data = new FormData();
          Object.entries({
            nameSurname: values.nameSurname,
            email: values.email,
            motivationalLetter: values.motivationalLetter,
            cv,
            useTestMail,
            recaptchaToken,
          }).forEach(([k, v]) => v && data.append(k, v));
          await httpPostWFile('mail/careerForm', data);
          resetForm();
        },
        props,
      )}
    >
      {({
        // submitForm,
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
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

          {/* T*DO: CHECKBOX RESET BUG!?? */}
          <PrivacyPolicyCheckbox
            value={values.readPrivacy}
            onChange={handleChange}
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
            disabled={!FormUtil.isSubmitBtnEnabled(touched, errors)}
          />

          <ReCaptcha ref={reCaptchaRef} />
        </form>
      )}
    </Formik>
  );
}

export function SnackWrappedCareerForm() {
  const addSnack = useSnackbar();
  return (
    <CareerForm
      onSubmitSuccess={() => addSnack('Prijava uspešno podneta!')}
      onSubmitError={() => addSnack('Greška pri prijavi!')}
    />
  );
}

function validateCv(cv: File) {
  return validateFileLessThanMib(cv, 2);
}
