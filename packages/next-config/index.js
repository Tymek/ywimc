const withPWA = require('next-pwa')
// eslint-disable-next-line import/no-extraneous-dependencies
const withBundleAnalyzer = require('@next/bundle-analyzer')
// const { PHASE_PRODUCTION_BUILD } = require('next/constants')
const compose = require('./utils/compose')

const overrides = defaultConfig => ({
  ...defaultConfig,
  pwa: {
    dest: 'public',
  },
})

module.exports = (phase, { defaultConfig }) => compose(
  withPWA,
  withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' }),
  overrides,
)(defaultConfig)
