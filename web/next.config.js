/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,

}
module.exports = {
  nextConfig,
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.ya?ml$/,
        use: 'js-yaml-loader',
      },
    )
    return config
  },
};
