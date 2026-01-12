import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/bousai-demo',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
