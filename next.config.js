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
  },
  async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml'
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          }
        ]
      }
    ];
  },
  async redirects() {
    return [
      // Canonical domain redirect
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'golf2go.co.nz'
          }
        ],
        destination: 'https://www.golf2go.co.nz/:path*',
        permanent: true
      },
      // Clean URLs
      {
        source: '/:path*/{/}+',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/:path*/index',
        destination: '/:path*',
        permanent: true,
      },
      // Legacy redirects
      {
        source: '/contact',
        destination: '/book',
        permanent: true,
      }
    ];
  }
};

module.exports = nextConfig;
