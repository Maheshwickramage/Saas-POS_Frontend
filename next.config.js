/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
// next.config.js
module.exports = {
    async rewrites() {
      return [
        {
          source: '/book/:slug*',
          destination: 'http://localhost:3002/book/:slug*', // Replace YOUR_NESTJS_PORT with the port your NestJS server is running on
        },
      ];
    },
  };
  