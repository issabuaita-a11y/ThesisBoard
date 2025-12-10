/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages, we need static export
  // API routes will be handled by Firebase Functions
  basePath: process.env.NODE_ENV === 'production' ? '/ThesisBoard' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ThesisBoard' : '',
};

export default nextConfig;

