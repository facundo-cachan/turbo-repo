/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  swcMinify: true,
    compiler: {
        removeConsole: false,
        reactRemoveProperties: { properties: ['^data-test$'] },
    },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.*",
      },
    ],
  },
};
