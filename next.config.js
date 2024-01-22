/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin');

module.exports = nextTranslate({
  reactStrictMode: true,
  webpack: (config, { isServer }) => { if (!isServer) { config.optimization.splitChunks.maxSize = 30000; } return config; }
});
