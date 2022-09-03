import { validationErrorMessages, validators } from './form-validation-util';

test('name-surname "" is invalid', () => {
  const given = validators.nameSurname.safeParse('').success;
  expect(given).toBe(false);
});

test('email "" is invalid', () => {
  const given = validators.email.safeParse('').success;
  expect(given).toBe(false);
});

test('email "asd.co" is invalid', () => {
  const given = validators.email.safeParse('asd.co').success;
  expect(given).toBe(false);
});

test('email "asd@as.co" is valid', () => {
  const given = validators.email.safeParse('asd@as.co').success;
  expect(given).toBe(true);
});

test('email len > 320 is invalid', () => {
  const given = validators.email.safeParse('a'.repeat(320) + '@as.co').success;
  expect(given).toBe(false);
});

test('validation error message email to be correct', () => {
  expect(validationErrorMessages.email).toBe('*nevalidan e-mail');
});
