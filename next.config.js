/** @type {import('next').NextConfig} */

const { NODE_ENV } = process.env;
const isDevEnv = NODE_ENV === 'development';

const BASE_PATH = (() => {
  const deployEnv = process.env.DEPLOY_ENV;
  if (deployEnv === 'github-pages-env') {
    console.log('Github pages environment active!');
    return '/Legacy-TC-Law-FE';
  }
  return '';
})();

const API_BASE = (() => {
  const devApiBase = 'http://localhost:1212/api/';
  const apiBaseFromEnv = process.env.API_BASE;
  if (isDevEnv) {
    return devApiBase;
  }
  if (apiBaseFromEnv) {
    return apiBaseFromEnv;
  }
  return devApiBase;
})();

console.log('Env vars from next.config.js:', { NODE_ENV, BASE_PATH, API_BASE });

module.exports = {
  reactStrictMode: true,
  env: {
    // https://nextjs.org/docs/api-reference/next.config.js/environment-variables
    BASE_PATH,
    API_BASE,
  },
  basePath: BASE_PATH,
};

// yarn add next-compose-plugins next-optimized-images

// module.exports = (() => {
//   const withPlugins = require('next-compose-plugins');
//   const optimizedImages = require('next-optimized-images');
//   return withPlugins(
//     [
//       [
//         optimizedImages,
//         {
//           /* config for next-optimized-images */
//         },
//       ],
//       // your other plugins here
//     ],
//     {
//       reactStrictMode: true,
//       // images: {
//       //   disableStaticImages: true,
//       // },
//     },
//   );
// })();
