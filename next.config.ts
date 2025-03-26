import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // clientId: process.env.GOOGLE_CLIENT_ID,
  // clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  // authorization: {
  //   params: {
  //     redirect_uri: "http://localhost:3000/api/auth/callback/google",
  //   },
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
