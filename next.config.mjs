/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['books.google.com'],
      },
      experimental: {
        missingSuspenseWithCSRBailout: false,
      },
};

export default nextConfig;
