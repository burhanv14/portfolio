/** @type {import('next').NextConfig} */

const withVideos = require('next-videos')

const nextConfig = {
    experimental: {
        serverActions: {
            serverActions: true,
            allowedOrigins: ['my-proxy.com', '*.my-proxy.com'],
            bodySizeLimit: '2mb',
        }
    },
}

module.exports = withVideos(nextConfig)
