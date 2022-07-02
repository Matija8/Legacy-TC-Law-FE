import TextField from '@mui/material/TextField';
import { PrivacyPolicyCheckbox } from 'components/form-components/privacy-policy-checkbox';
import { useSnackbar } from 'contexts/snackbar-context';
import {
  requiredCheckboxText,
  requiredFieldErrorText,
  useTestMail,
  validationRegexes,
} from 'data/constants';
import { Formik, FormikErrors } from 'formik';
import { FormUtil } from 'util/form-util';
import { httpPost } from 'util/http-util';
import { RoundSubmittingBtn } from '../round-submitting-button';

interface ContactFormValues {
  nameSurname: string;
  email: string;
  message: string;
  readPrivacy: boolean;
}

const initialValues: ContactFormValues = {
  nameSurname: '',
  email: '',
  message: '',
  readPrivacy: false,
};

interface FormProps extends FormUtil.FormSubmitProps {
  // style?: CSSProperties;
}

export function ContactForm(props: FormProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={FormUtil.FormikOnSubmitWrapper(
        async (values, { resetForm }) => {
          await httpPost('mail/contactForm', {
            nameSurname: values.nameSurname,
            email: values.email,
            message: values.message,
            useTestMail,
          });
          resetForm({
            values: {
              ...values,
              message: '',
            },
          });
        },
        props,
      )}
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

        if (!values.readPrivacy) {
          errors.readPrivacy = requiredCheckboxText;
        }

        return errors;
      }}
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
          style={{
            // ...style,
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

          <PrivacyPolicyCheckbox
            value={values.readPrivacy}
            onChange={handleChange}
          />

          <RoundSubmittingBtn
            isSubmitting={isSubmitting}
            disabled={!FormUtil.isSubmitBtnEnabled(touched, errors)}
          />
        </form>
      )}
    </Formik>
  );
}

export function SnackWrappedContactForm() {
  const addSnack = useSnackbar();
  return (
    <ContactForm
      onSubmitSuccess={() => addSnack('Slanje poruke uspešno izvršeno!')}
      onSubmitError={() =>
        addSnack('Greška pri slanju poruke kroz kontakt formu!')
      }
    />
  );
}
