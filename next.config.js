/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin');

module.exports = nextTranslate({
  reactStrictMode: true,
  // Improve first load speed
  // https://github.com/vercel/next.js/discussions/13646#discussioncomment-7539607
  webpack: (config, { isServer }) => { if (!isServer) { config.optimization.splitChunks.maxSize = 30000; } return config; },
  // https://github.com/vercel/next.js/discussions/21294#discussioncomment-7696755
  images: { formats: ['image/webp'] }
});


// Injected content via Sentry wizard below

const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(
  module.exports,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: "andre-martinez",
    project: "translator-portfolio",
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors.
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,
  }
);
