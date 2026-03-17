import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ripqjgdqxblyqdzkyigt.supabase.co",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://*.vercel.live",
              "script-src-elem 'self' 'unsafe-inline' https://vercel.live https://*.vercel.live",
              "style-src 'self' 'unsafe-inline' https://vercel.live",
              "img-src 'self' data: blob: https://ripqjgdqxblyqdzkyigt.supabase.co https://vercel.live",
              "font-src 'self' https://vercel.live",
              "connect-src 'self' https://ripqjgdqxblyqdzkyigt.supabase.co https://vercel.live wss://vercel.live",
              "frame-ancestors 'none'",
            ].join("; "),
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
