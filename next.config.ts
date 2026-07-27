import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    qualities: [70, 75, 80, 85, 90, 95, 100],
  },
  compress: true,
};

export default nextConfig;
