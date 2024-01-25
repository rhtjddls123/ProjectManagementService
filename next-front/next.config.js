/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        'fs-extra': 'empty',
      };
    }
    return config;
  },
};
module.exports = nextConfig;

module.exports = {
  compiler: {
    styledComponents: true,
  },
};
