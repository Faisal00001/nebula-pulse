/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            // {
            //     protocol: 'http',
            //     hostname: '127.0.0.1',
            //     port: '8000',
            //     pathname: '/media/**',
            // },
            {
                protocol: 'http',  // Support for http
                hostname: 'web-production-a916.up.railway.app',
                pathname: '/media/**',
            },
            {
                protocol: 'https',  // Support for https
                hostname: 'web-production-a916.up.railway.app',
                pathname: '/media/**',
            },
        ],
        // domains: ['web-production-a916.up.railway.app'],

    },
};

export default nextConfig;


