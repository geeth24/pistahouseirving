/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        ENVIRONMENT: process.env.ENVIRONMENT,
    },
    compiler: {
        // ssr and displayName are configured by default
        styledComponents: true,
    },
}

module.exports = nextConfig
