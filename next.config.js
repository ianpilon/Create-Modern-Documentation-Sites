const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  defaultShowCopyCode: true,
})

module.exports = withNextra({
  reactStrictMode: true,
  // Ship the wiki .mdx files alongside the /api/chat serverless function so its
  // BM25 retrieval can read them at request time (Vercel and similar platforms).
  outputFileTracingIncludes: {
    '/api/chat': ['./src/pages/**/*.mdx', './src/pages/**/*.md'],
  },
})
