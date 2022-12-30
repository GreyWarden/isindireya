/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    const rules = config.module.rules
        .find((rule) => typeof rule.oneOf === 'object')
        .oneOf.filter((rule) => Array.isArray(rule.use))

    rules.forEach((rule) => {
      rule.use.forEach((moduleLoader) => {
        if (/css-loader[/\\](?:cjs|dist|src)/.test(moduleLoader.loader)) {
          if (typeof moduleLoader.options.modules === 'object') {
            moduleLoader.options.modules = {
              ...moduleLoader.options.modules,
              // https://github.com/webpack-contrib/css-loader#exportlocalsconvention
              exportLocalsConvention: 'dashesOnly',
            }
          }
        }
      })
    })

    return config
  },
  eslint: {
    dirs: [
      'modules',
      'pages',
      'tests',
    ],
  },
}

module.exports = nextConfig
