import TextField from '@mui/material/TextField';
import { PrivacyPolicyCheckbox } from 'components/form-components/privacy-policy-checkbox';
import { useSnackbar } from 'contexts/snackbar-context';
import { requiredFieldErrorText, useTestMail } from 'data/constants';
import { Formik, FormikErrors } from 'formik';
import { FormUtil } from 'util/form-util';
import { formikValidators } from 'util/formik-validation-util';
import { httpPost } from 'util/http-util';
import { RoundSubmittingBtn } from '../round-submitting-button';

interface NewsletterFormValues {
  nameSurname: string;
  email: string;
  readPrivacy: boolean;
}

const initialValues: NewsletterFormValues = {
  nameSurname: '',
  email: '',
  readPrivacy: false,
};

const textFieldVariant = 'standard';

interface FormProps extends FormUtil.FormSubmitProps {}

function NewsletterForm(props: FormProps) {
  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        const errors: FormikErrors<NewsletterFormValues> = {};
        formikValidators.nameSurname(values, errors);
        formikValidators.email(values, errors);
        formikValidators.readPrivacy(values, errors);
        return errors;
      }}
      onSubmit={FormUtil.FormikOnSubmitWrapper(
        async (values, { resetForm }) => {
          await httpPost('mail/newsletterForm', {
            nameSurname: values.nameSurname,
            email: values.email,
            useTestMail,
          });
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
          }}
        >
          <div style={{ width: '100%' }}>
            <TextField
              style={{ width: '100%' }}
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
              style={{ width: '100%' }}
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
          </div>

          <PrivacyPolicyCheckbox
            name="readPrivacy"
            value={values.readPrivacy}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <RoundSubmittingBtn
            isSubmitting={isSubmitting}
            text={'Prijavite se'}
            disabled={!FormUtil.isSubmitBtnEnabled(touched, errors)}
          />
        </form>
      )}
    </Formik>
  );
}

export function SnackWrappedNewsletterForm() {
  const addSnack = useSnackbar();
  return (
    <NewsletterForm
      onSubmitSuccess={() => addSnack('Prijava na novosti uspešno izvršena!')}
      onSubmitError={() => addSnack('Greška pri prijavi na novosti!')}
    />
  );
}
