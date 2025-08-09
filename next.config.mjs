/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // replaces `next export`
  basePath: isProd ? '/test-deploy-next' : '',
  assetPrefix: isProd ? '/test-deploy-next/' : '',
  images: {
    unoptimized: true, // required for static export
  },
};

export default nextConfig;
