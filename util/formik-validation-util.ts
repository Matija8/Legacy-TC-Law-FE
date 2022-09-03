import { requiredFieldErrorText } from 'data/constants';
import { validationErrorMessages, validators } from './form-validation-util';

function nameSurname(
  values: { nameSurname: string } & unknown,
  errors: { nameSurname?: string } & unknown,
) {
  if (!values.nameSurname) {
    errors.nameSurname = requiredFieldErrorText;
  }
}

function email(
  values: { email: string } & unknown,
  errors: { email?: string } & unknown,
) {
  if (!values.email) {
    errors.email = requiredFieldErrorText;
  } else if (!validators.email.safeParse(values.email).success) {
    errors.email = validationErrorMessages.email;
  }
}

function readPrivacy(
  values: { readPrivacy: boolean } & unknown,
  errors: { readPrivacy?: string } & unknown,
) {
  if (!values.readPrivacy) {
    errors.readPrivacy =
      'Morate biti saglasni sa politikom privatnosti da bi ste se prijavili na novosti';
  }
}

export const formikValidators = {
  nameSurname,
  email,
  readPrivacy,
};
