import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/team.html", destination: "/team", permanent: true },
    ];
  },
};

export default nextConfig;
