import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/servicios/corte-plasma",
        destination: "/servicios/corte-plasma-cnc",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
