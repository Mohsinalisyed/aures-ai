import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "aureusaibackend.s3.ap-south-1.amazonaws.com",
      "static.alchemyapi.io",
    ], // Allow this domain for external images
  },
  // typescript: {
  //   ignoreBuildErrors: true,
  // },

  /* config options here */
};

export default nextConfig;
