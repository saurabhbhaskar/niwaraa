import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The generic service pages were replaced by real projects (/projects/[slug]).
      { source: "/services", destination: "/#our-work", permanent: true },
      { source: "/services/:slug", destination: "/#our-work", permanent: true },
    ];
  },
};

export default nextConfig;
