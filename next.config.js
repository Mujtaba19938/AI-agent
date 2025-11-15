/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
  webpack: (config, { isServer }) => {
    // Add path aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './'),
    };
    return config;
  },
  // For static export
  output: 'export',
  // Optional: Add a trailing slash to all paths
  trailingSlash: true,
  // Optional: Change the output directory
  distDir: 'out',
}

module.exports = nextConfig

