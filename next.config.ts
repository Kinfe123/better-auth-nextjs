import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    outputFileTracingIncludes: {
      '/api/studio': ['./node_modules/better-auth-studio/dist/public/**/*', './node_modules/better-auth-studio/public/**/*'],
    },
  /* config options here */
};

export default nextConfig;
