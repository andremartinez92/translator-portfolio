/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin');

module.exports = nextTranslate({
  reactStrictMode: true,
  // Improve first load speed
  // https://github.com/vercel/next.js/discussions/13646#discussioncomment-7539607
  webpack: (config, { isServer }) => { if (!isServer) { config.optimization.splitChunks.maxSize = 30000; } return config; }
});
