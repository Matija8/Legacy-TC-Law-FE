import TextField from '@mui/material/TextField';
import { PrivacyPolicyCheckbox } from 'components/form-components/privacy-policy-checkbox';
import { requiredFieldErrorText, validationRegexes } from 'data/constants';
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

interface FormProps {
  // style?: CSSProperties;
  onSubmitSuccess?: () => void;
  onSubmitError?: (err: unknown) => void;
}

export function ContactForm({ onSubmitSuccess, onSubmitError }: FormProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { resetForm }) => {
        // await FormUtil.sleep(2000); // Test submitting btn state.
        try {
          await httpPost('mail/contactForm', {
            nameSurname: values.nameSurname,
            email: values.email,
            message: values.message,
          });
          onSubmitSuccess?.();
          // resetForm(); // This will reset the form completely
          resetForm({
            values: {
              ...values,
              message: '',
            },
          });
        } catch (err) {
          onSubmitError?.(err);
        }
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
