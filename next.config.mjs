/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exclude functions directory from build
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/functions/**'],
    };
    return config;
  },
};

export default nextConfig;

