/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withVideos = require('next-videos')

// module.exports = withVideos()
// module.exports = nextConfig




module.exports = withVideos({
  images: {
    domains: ["images.unsplash.com"]
  }
})



