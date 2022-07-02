// TODO:
// You don't need this anymore. Remove it when the time is right.

// https://stackoverflow.com/questions/70673800/scss-modules-not-properly-loading-in-storybook-for-my-nextjs-app
// Copied from https://github.com/storybookjs/presets/blob/master/packages/preset-scss/index.js
function wrapLoader(loader, options) {
  if (options === false) {
    return [];
  }

  return [
    {
      loader,
      options,
    },
  ];
}

function webpack(webpackConfig = {}, options = {}) {
  const { module = {} } = webpackConfig;
  const {
    styleLoaderOptions,
    cssLoaderOptions,
    sassLoaderOptions,
    rule = {},
  } = options;

  return {
    ...webpackConfig,
    module: {
      ...module,
      rules: [
        ...(module.rules || []),
        {
          test: /(?<!module)\.s[ca]ss$/,
          ...rule,
          use: [
            ...wrapLoader('style-loader', styleLoaderOptions),
            ...wrapLoader('css-loader', {
              ...cssLoaderOptions,
              modules: false,
            }),
            ...wrapLoader('sass-loader', sassLoaderOptions),
          ],
        },
        {
          test: /\.module\.s[ca]ss$/,
          ...rule,
          use: [
            ...wrapLoader('style-loader', styleLoaderOptions),
            ...wrapLoader('css-loader', {
              ...cssLoaderOptions,
              modules: true,
            }),
            ...wrapLoader('sass-loader', sassLoaderOptions),
          ],
        },
      ],
    },
  };
}

module.exports = { webpack };
