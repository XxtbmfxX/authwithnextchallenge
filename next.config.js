/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "lh3.googleusercontent.com ",
      "avatars.githubusercontent.com",
      "https://xsgames.co/randomusers/avatar.php?g=pixel",
    ],
  },
};

module.exports = nextConfig;
