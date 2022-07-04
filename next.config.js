const { createVanillaExtractPlugin: withVanillaExtract } = require('@vanilla-extract/next-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com', 'images.pexels.com'],
  },
};

module.exports = withVanillaExtract(nextConfig);
