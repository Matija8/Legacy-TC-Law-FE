/** @type {import('next').NextConfig} */

const basePath = '/TC-law';

module.exports = {
  reactStrictMode: true,
  env: {
    basePath,
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
