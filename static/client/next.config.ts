import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "quest-house.by",
      },
    ],
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

export default nextConfig;
