import { FormikErrors, FormikTouched } from 'formik';

// Form validation best practices:
// https://xd.adobe.com/ideas/principles/web-design/best-practices-form-design/

export namespace FormUtil {
  export function isSubmitBtnEnabled<FormValues>(
    touched: FormikTouched<FormValues>,
    errors: FormikErrors<FormValues>,
  ) {
    // Allow submit if form is valid,
    // or if errors are only on untouched fields.
    const errorKeys = Object.keys(errors);
    if (errorKeys.length === 0) {
      return true;
    }
    if (errorKeys.find((errKey) => errKey in touched)) {
      return false;
    }
    return true;
  }

  export async function sleep(ms: number) {
    // https://stackoverflow.com/questions/33289726/combination-of-async-function-await-settimeout
    return new Promise((res) => setTimeout(res, ms));
  }
}
