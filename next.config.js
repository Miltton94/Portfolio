/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'media.graphassets.com',
      'encrypted-tbn0.gstatic.com',
      'avatars.githubusercontent.com',
    ],
  },
}

module.exports = nextConfig
