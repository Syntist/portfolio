/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        // Match any path on the blog subdomain
        source: '/:slug*',
        has: [
          {
            type: 'host',
            value: 'blog.myurl.com',
          },
        ],
        // Serve content from pages/blog/[slug].js
        destination: '/blog/:slug*',
      },
    ];
  },
};

export default nextConfig;