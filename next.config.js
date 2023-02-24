/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: [
      'modules',
      'pages',
      'tests',
    ],
  },
}

module.exports = nextConfig
