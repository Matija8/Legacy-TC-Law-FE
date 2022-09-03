import { formikValidators } from './formik-validation-util';

const { email } = formikValidators;

test('email ""', () => {
  const errors = {};
  email({ email: '' }, errors);
  expect(errors).toStrictEqual({ email: '*neophodno polje' });
});

test('email "a@co"', () => {
  const errors = {};
  email({ email: 'a@co' }, errors);
  expect(errors).toStrictEqual({ email: '*nevalidan e-mail' });
});

test('email "a@a.co"', () => {
  const errors = {};
  email({ email: 'a@a.co' }, errors);
  expect(errors).toStrictEqual({});
});
