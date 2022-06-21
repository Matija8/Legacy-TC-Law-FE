const apiBase = (() => {
  if (false) {
    // TODO: Get from env
    return 'TODO';
  }
  return 'http://localhost:1212/';
})();

export async function httpFetch(input: string, init?: RequestInit) {
  const url = new URL(input.startsWith('/') ? input.slice(1) : input, apiBase);
  const debuggingFetch = false;
  if (process.env.NODE_ENV === 'development' && debuggingFetch) {
    alert(JSON.stringify({ url: String(url), init }));
    return;
  }
  return await fetch(url, init);
}
