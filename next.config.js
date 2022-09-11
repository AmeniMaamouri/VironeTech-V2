/** @type {import('next').NextConfig} */
const path = require('path')
const nextTranslate = require('next-translate')

const nextConfig = {
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "./variables.scss";`,
  },
  ...nextTranslate(),
}

module.exports = nextConfig
