import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    domains: [
      "cdn-icons-png.flaticon.com",
      "cdn.akamai.steamstatic.com",
      "encrypted-tbn0.gstatic.com",
      "preview.redd.it",
      "upload.wikimedia.org",
      "www.concernedape.com",
      "static.wikia.nocookie.net",
      "images.squarespace-cdn.com",
      "gamingbolt.com",
      "encrypted-tbn0.gstatic.com",
    ],
  },
};

export default nextConfig;
