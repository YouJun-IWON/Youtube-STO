/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'cloudflare-ipfs.com',
      },
    ],

    // domains: [
    //   "avatars.githubusercontent.com",
    //   "cloudflare-ipfs.com",
    // ],
  },
};

module.exports = nextConfig;
