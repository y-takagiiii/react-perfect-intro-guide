/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // リライト設定
  async rewrites() {
    return [
      {
        source: '/personal',
        destination: '/08_multipage?step=1'
      },
      {
        source: '/confirm',
        destination: '/08_multipage?step=2'
      }
    ]
  }
}

module.exports = nextConfig
