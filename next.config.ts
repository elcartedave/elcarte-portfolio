import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  transpilePackages: ["@mui/material", "@mui/system", "@mui/icons-material"],
};

export default nextConfig;
