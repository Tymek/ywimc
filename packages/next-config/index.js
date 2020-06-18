const withPWA = require('next-pwa')
// const { PHASE_PRODUCTION_BUILD } = require('next/constants')
const compose = require('./utils/compose')

let withBundleAnalyzer = x => x

if (process.env.ANALYZE) {
  try {
    // eslint-disable-next-line import/no-extraneous-dependencies, global-require
    withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: true })
  } catch (error) {
    process.exit(error.code) // eslint-disable-line unicorn/no-process-exit
  }
}

const overrides = defaultConfig => ({
  ...defaultConfig,
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
  },
})

module.exports = (phase, { defaultConfig }) => compose(
  withBundleAnalyzer,
  withPWA,
  overrides,
)(defaultConfig)
