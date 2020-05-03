// next.config.js
const Dotenv = require("dotenv-webpack");
const withImages = require("next-images");

module.exports = withImages({
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    config.plugins.push(new Dotenv({ silent: true }));
    return config;
  },
  env: {
    FORM: process.env.FORM,
  },
});
