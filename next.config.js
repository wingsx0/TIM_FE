/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "pic2.zhimg.com",
      },
      {
        protocol: "https",
        hostname: "vnpay.vn",
      },
      {
        protocol: "https",
        hostname: "cdn.galaxycine.vn",
      },
    ],
  },
};

module.exports = nextConfig;
