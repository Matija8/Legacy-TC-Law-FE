export const gLinks = {
  email: 'mailto:office@tclaw.rs',
  linkedin: 'https://www.linkedin.com/company/tc-law',
  maps: `https://maps.google.com/maps?q=Kneza%20Milo%C5%A1a%2010&t=m&z=14&output=embed&iwloc=near`, // TODO
};

export const envVars = {
  BASE_PATH: process.env.BASE_PATH || '',
  NODE_ENV: process.env.NODE_ENV,
  RECAPTCHA_CLIENT_SITE_KEY: process.env.RECAPTCHA_CLIENT_SITE_KEY,
  API_BASE: process.env.API_BASE,
};

if (!envVars.API_BASE) {
  throw Error(`Invalid API_BASE: ${envVars.API_BASE}`);
}

export const validationRegexes = {
  email:
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
};

export const requiredFieldErrorText = '*neophodno polje';

// TODO: Use this
export const requiredCheckboxText = '*neophodno je štiklirati ovu kućicu';

// TODO
export const pageTitles = {
  nasTim: '',
} as const;

export const pageSectionTitles = {
  nasTim: '',
};

export const gTextConstants = {
  officeEmail: 'office@tclaw.rs',
};

export const useTestMail = envVars.NODE_ENV === 'development' ? 'true' : '';

export const formInputLimits = {
  email: {
    maxLength: 320,
  },
  motivationalLetter: {
    maxLength: 4000,
  },
};

export const gRecaptchaKeys = (() => {
  // https://developers.google.com/recaptcha/docs/faq#id-like-to-run-automated-tests-with-recaptcha.-what-should-i-do
  const clientSiteTestKey = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';
  return {
    clientSiteTestKey,
    // Place your key in the .env.local file
    clientSiteKey: envVars.RECAPTCHA_CLIENT_SITE_KEY || clientSiteTestKey,
  };
})();
