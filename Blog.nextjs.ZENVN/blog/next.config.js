/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "wp-api.test",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
