/** @type {import('next').NextConfig} */

module.exports = {
  async redirects() {
    return [
      {
        source: "/bot-invite",
        destination:
          "https://discord.com/api/oauth2/authorize?client_id=969292707019247717&permissions=274878220352&scope=bot%20applications.commands",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['media.giphy.com']
  },
  reactStrictMode: true,
};
