import { gRecaptchaKeys } from 'data/constants';
import { forwardRef, LegacyRef, RefObject, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

// Leigh Halliday - Using reCAPTCHA in React and Node
// https://www.youtube.com/watch?v=vrbyaOoZ-4Q
// https://github.com/leighhalliday/react-hook-form-demo/blob/master/pages/index.tsx

// Testing reCAPTCHA:
// https://stackoverflow.com/questions/48431361/force-google-recaptcha-challenge
// https://developers.google.com/recaptcha/docs/faq#id-like-to-run-automated-tests-with-recaptcha.-what-should-i-do

// Ref notes
// https://reactjs.org/docs/refs-and-the-dom.html
// https://reactjs.org/docs/forwarding-refs.html
// https://reactjs.org/docs/hooks-reference.html#useref
// https://stackoverflow.com/questions/53561913/react-forwarding-multiple-refs
// https://stackoverflow.com/questions/66963289/useref-typescript-not-assignable-to-type-legacyrefhtmldivelement

interface Props {
  sitekey?: string;
}

export const ReCaptcha = forwardRef<ReCAPTCHA, Props>(
  ({ sitekey }, reCaptchaRef) => {
    // https://github.com/dozoisch/react-google-recaptcha
    return (
      <ReCAPTCHA
        sitekey={sitekey || gRecaptchaKeys.clientSiteKey}
        size="invisible"
        // onChange={(val) => console.log('Captcha value:', val)}
        ref={reCaptchaRef as LegacyRef<ReCAPTCHA>}
      />
    );
  },
);

ReCaptcha.displayName = 'ReCaptcha';

export async function getRecaptchaToken(reCaptchaRef: RefObject<ReCAPTCHA>) {
  const token = await getRecaptchaTokenSafe(reCaptchaRef);
  if (!token) {
    throw Error('Error: ReCaptcha token is falsy!?');
  }
  return token;
}

async function getRecaptchaTokenSafe(reCaptchaRef: RefObject<ReCAPTCHA>) {
  if (!reCaptchaRef?.current || !reCaptchaRef?.current?.executeAsync) {
    console.error('Recaptcha ref has an invalid "current" field?!');
    return null;
  }
  const token = await reCaptchaRef.current.executeAsync?.();
  if (typeof token !== 'string' || token?.length < 5) {
    console.error(
      'Recaptcha executeAsync returned an invalid token?!\n' +
        `Token: ${token}`,
    );
    return null;
  }
  reCaptchaRef.current.reset();
  return token;
}

export const useRecaptchaRef = () => useRef<ReCAPTCHA>(null);
