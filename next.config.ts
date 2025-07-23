/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Pastikan basePath kosong karena ini user page (satriaksm.github.io)
  basePath: "",
  trailingSlash: true,
};

module.exports = nextConfig;
