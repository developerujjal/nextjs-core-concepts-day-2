/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.bdstall.com'
            }
        ]
    },
    redirects: async () => {
        return [
            {
                source: '/contact',
                destination: '/posts',
                permanent: true
            }
        ]
    }
};

export default nextConfig;
