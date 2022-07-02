export const gLinks = {
  email: 'mailto:office@tclaw.rs',
  linkedin: 'https://www.linkedin.com/company/tc-law',
  maps: `https://maps.google.com/maps?q=Kneza%20Milo%C5%A1a%2010&t=m&z=14&output=embed&iwloc=near`, // TODO
};

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

export const useTestMail = process.env.NODE_ENV === 'development' ? 'true' : '';

export const formInputLimits = {
  email: {
    maxLength: 320,
  },
  motivationalLetter: {
    maxLength: 4000,
  },
};

// Place your key in the .env.local file
export const gRecaptchaClientSiteKey = process.env.RECAPTCHA_CLIENT_SITE_KEY;
