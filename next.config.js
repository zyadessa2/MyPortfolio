/** 
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  output: "standalone",
  experimental: {
    ppr: true,
  },
}

module.exports = nextConfig
