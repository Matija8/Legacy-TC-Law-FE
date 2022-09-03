import { formInputLimits, requiredFieldErrorText } from 'data/constants';
import { z } from 'zod';

export function fileLessThanMib(file: File, nMib: number) {
  // https://stackoverflow.com/questions/3717793/javascript-file-upload-size-validation
  if (typeof file?.size !== 'number') {
    console.warn('File size missing!', file);
    return false;
  }
  const fileSizeInMib = file?.size / 1024 / 1024; // in MiB
  return fileSizeInMib < nMib;
}

const nameSurname = z.string().max(50).min(1);

const email = z.string().email().max(formInputLimits.email.maxLength);

function validateCv(cv: File) {
  return fileLessThanMib(cv, 2);
}

export const validators = {
  nameSurname,
  email,
  validateCv,
};
export const validationErrorMessages = {
  email: '*nevalidan e-mail',
  requiredFieldErrorText,
  // requiredCheckboxText: '*neophodno je štiklirati ovu kućicu',
};
