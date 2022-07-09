import { envVars } from 'data/constants';

const apiBase = (() => {
  if (false) {
    // TODO: Get from env
    return 'TODO';
  }
  return 'http://localhost:1212/';
})();

export async function httpPost(
  url: string,
  body: ConstructorParameters<typeof URLSearchParams>[0],
) {
  return await httpFetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      // https://stackoverflow.com/questions/37269808/react-js-uncaught-in-promise-syntaxerror-unexpected-token-in-json-at-posit
      Accept: 'application/json',
    },
    body: new URLSearchParams(body),
  });
}

async function httpFetch(input: string, init?: RequestInit) {
  const url = new URL(input.startsWith('/') ? input.slice(1) : input, apiBase);
  const debuggingFetch = false;
  if (envVars.NODE_ENV === 'development' && debuggingFetch) {
    alert(JSON.stringify({ url: String(url), init }));
    throw Error('Testing http fetch');
  }
  const res = await fetch(String(url), init);
  // const resJson = await res.json();
  if (!res.ok) {
    // https://github.com/whatwg/fetch/issues/18#issuecomment-605629519
    // const err = resJson?.err || 'HTTP error';
    const err = 'HTTP error';
    throw Error(err);
  }
  return res;
  // // https://kentcdodds.com/blog/using-fetch-with-type-script
  // return resJson.data as T;
}
