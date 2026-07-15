/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local WebP cutouts served from /public/plates. Allow modern formats.
    formats: ["image/webp"],
  },
};

export default nextConfig;
