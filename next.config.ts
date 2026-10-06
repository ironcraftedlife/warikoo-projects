import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the network preview to load Next.js development assets and HMR.
  allowedDevOrigins: ['172.23.46.45'],
};

export default nextConfig;
