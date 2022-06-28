module.exports = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  // presets: [path.resolve('./.storybook/scss-preset.js')],
  webpackFinal,
};

// Webpack notes
// https://storybook.js.org/docs/react/builders/webpack

// Be careful with scss modules and storybook!

function webpackFinal(config, { configType }) {
  const path = require('path');

  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'sass-loader?modules=true'],
    include: path.resolve(__dirname, '../'),
  });

  return config;
}
