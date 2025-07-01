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
    turbopack: 
};

export default nextConfig;
