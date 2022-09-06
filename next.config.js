/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com', 'thispersondoesnotexist.com'],
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
});
