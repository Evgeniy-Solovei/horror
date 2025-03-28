import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "80.249.147.247",
        port: "8000",
      },
    ],
  },
};

export default nextConfig;
