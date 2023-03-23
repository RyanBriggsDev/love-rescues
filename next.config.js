/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // next.config.js
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dl5zpyw5k3jeb.cloudfront.net',
      },
    ],
  },
}

module.exports = nextConfig
