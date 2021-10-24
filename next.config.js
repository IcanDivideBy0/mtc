/* eslint-env node */

const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withPlugins(
  [[withBundleAnalyzer], [withMDX, { pageExtensions: ["js", "mdx"] }]],
  {
    poweredByHeader: false,
  }
);
