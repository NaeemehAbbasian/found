// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
// };

// export default nextConfig;



const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
