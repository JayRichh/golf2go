/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  webpack: (config) => {
    config.externals = [...(config.externals || []), { canvas: "canvas" }];
    return config;
  },
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/book',
        permanent: true,
      },
      {
        source: '/:path*//+',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/:path*/index',
        destination: '/:path*',
        permanent: true,
      }
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          has: [
            {
              type: 'query',
              key: 'page',
              value: '(?!1).*'
            }
          ],
          destination: '/:path*?page=1'
        }
      ]
    };
  }
};

module.exports = nextConfig;
