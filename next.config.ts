/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // untuk jaga-jaga pastikan ini ada
  basePath: "",
  assetPrefix: "/",
};

module.exports = nextConfig;
