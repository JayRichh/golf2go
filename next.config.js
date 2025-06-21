/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['golf2go.co.nz', 'www.golf2go.co.nz'],
    remotePatterns: [{ protocol: 'https', hostname: '**.golf2go.co.nz' }]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com; frame-src 'self' https://www.google.com; connect-src 'self' https://www.google.com;"
          }
        ]
      },
      { source: '/images/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
      { source: '/_next/image/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
      {
        source: '/:path*.pdf',
        headers: [
          { key: 'Content-Type', value: 'application/pdf' },
          { key: 'Cache-Control', value: 'public, max-age=31536000' }
        ]
      }
    ]
  }
}

module.exports = nextConfig
