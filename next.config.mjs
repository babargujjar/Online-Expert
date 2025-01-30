// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
module.exports = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: "/admin/add-completed-projects",
        destination: "/login",
        permanent: false,
      },
    ];
  },
};
