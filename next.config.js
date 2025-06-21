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
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; frame-src 'self' https://www.google.com https://recaptcha.google.com; connect-src 'self' https://www.google.com https://www.gstatic.com; object-src 'none'; base-uri 'self'; form-action 'self'"
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
