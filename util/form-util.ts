import { Formik, FormikErrors, FormikHelpers, FormikTouched } from 'formik';

// Form validation best practices:
// https://xd.adobe.com/ideas/principles/web-design/best-practices-form-design/

// Material Design validation notes:
// https://material.io/archive/guidelines/patterns/errors.html#errors-user-input-errors

type FormikOnSubmitCb<T> = Parameters<typeof Formik>[0]['onSubmit'];
type FormikOnSubmitCbParams<T> = Parameters<FormikOnSubmitCb<T>>;

export namespace FormUtil {
  export interface FormSubmitProps {
    // style?: CSSProperties;
    onSubmitSuccess?: () => void;
    onSubmitError?: (err: unknown) => void;
  }

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

  export function FormikOnSubmitWrapper<FormikValues>(
    callback: (
      values: FormikValues,
      formikHelpers: FormikHelpers<FormikValues>,
    ) => void | Promise<any>,
    formSubmitParams: FormSubmitProps,
  ) {
    const { onSubmitSuccess, onSubmitError } = formSubmitParams;

    return async function onSubmitCb(
      values: FormikValues,
      formikHelpers: FormikHelpers<FormikValues>,
    ) {
      try {
        // await FormUtil.sleep(2000); // Test submitting btn state.
        await callback(values, formikHelpers);
        onSubmitSuccess?.();
      } catch (err) {
        onSubmitError?.(err);
      }
    };
  }
}
