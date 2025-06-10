// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // For local images in public/ folder
   domains: [], 
  },
  // Enable React strict mode
  reactStrictMode: true,
};

export default nextConfig;