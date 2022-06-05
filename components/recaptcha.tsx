import ReCAPTCHA from 'react-google-recaptcha';

function onChange(value: string | null) {
  console.log('Captcha value:', value);
}

export function ReCaptcha({ sitekey }: { sitekey: string }) {
  // https://github.com/dozoisch/react-google-recaptcha
  return <ReCAPTCHA sitekey={sitekey} onChange={onChange} />;
}
