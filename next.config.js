/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.WP_IMAGE_URL],
    // remotePatterns: [
    //   {
    //     protocol: "http",
    //     hostname: "localhost",
    //     port: "10003",
    //     pathname: "/wp-content/uploads/*/**",
    //   },
    // ],
  },
};

module.exports = nextConfig;
