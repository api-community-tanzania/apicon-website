/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/team.html", destination: "/team", permanent: true },
    ];
  },
};

export default nextConfig;
