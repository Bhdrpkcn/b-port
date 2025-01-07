import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows all domains
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
