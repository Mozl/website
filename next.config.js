const isProd = (process.env.NODE_ENV || 'production') === 'production';

const assetPrefix = isProd ? '/website' : '';

module.exports = {
  env: {
    assetPrefix
  }
};
