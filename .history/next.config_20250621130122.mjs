/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "randomuser.me"
            }
        ]
    },
    experimental: {
        turbo: false, // turn off Turbopack
    },
};

export default nextConfig;
