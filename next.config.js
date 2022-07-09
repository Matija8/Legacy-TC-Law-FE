/** @type {import('next').NextConfig} */

// const isDevEnv = process.env.NODE_ENV === 'development';

const basePath = (() => {
  const deployEnv = process.env.DEPLOY_ENV;
  if (deployEnv === 'github-pages-env') {
    console.log('Github pages environment active!');
    return '/TC-law';
  }
  return '';
})();

module.exports = {
  reactStrictMode: true,
  env: {
    // https://nextjs.org/docs/api-reference/next.config.js/environment-variables
    BASE_PATH: basePath,
  },
  basePath,
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
