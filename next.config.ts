import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The old single-page /about was split into the Specifications / Details / Materials sheets.
  async redirects() {
    return [{ source: "/about", destination: "/values", permanent: false }];
  },
};

export default nextConfig;
