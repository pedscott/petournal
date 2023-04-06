/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  images: {
    domain: [
      "firebasestorage.googleapis.com",
      "links.parareact.com",
      "platform-lookaside.fbsbx.com",
    ]
  }
}
