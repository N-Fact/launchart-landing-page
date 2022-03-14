const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfiguration = {
  distDir: 'build'
};

module.exports = withPlugins([optimizedImages], nextConfiguration);
