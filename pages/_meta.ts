export default {
  index: {
    type: 'page',
    title: 'ecosystem.Ai',
    display: 'hidden',
    theme: {
      layout: 'raw',
    },
  },
  docs: {
    type: 'page',
    title: 'Docs',
  },
  blog: {
    title: 'Blog',
    type: 'page',
    theme: {
      layout: 'full',
    },
  },
  authors: {
    title: 'Authors',
    type: 'folder',
    theme: {
      toc: false,
      sidebar: false,
      pagination: true,
      layout: 'default',
      breadcrumb: false,
      timestamp: false,
    },
  },
  demo: {
    type: 'page',
    title: 'Demo',
    href: 'http://customer.ecosystem.ai:85/',
    // display: 'hidden',
  },
  changelog: {
    type: 'page',
    title: 'Changelog',
    theme: {
      layout: 'full',
    },
  },
  pricing: {
    title: 'Pricing',
    display: 'hidden',
    type: 'page',
    theme: {
      layout: 'full',
    },
  },
  tos: {
    title: 'Terms of Service',
    type: 'page',
    display: 'hidden',
  },
  privacy: {
    title: 'Privacy Policy',
    type: 'page',
    display: 'hidden',
  },
  cookie: {
    title: 'Cookie Policy',
    type: 'page',
    display: 'hidden',
  },
  about: {
    title: 'About us',
    type: 'page',
    display: 'hidden',
    theme: {
      timestamp: false,
    },
  },
  subscribe: {
    title: 'Subscribe',
    type: 'page',
    display: 'hidden',
  },
  unsubscribe: {
    title: 'Unsubscribe',
    type: 'page',
    display: 'hidden',
  },
  '404': {
    type: 'page',
    theme: {
      typesetting: 'article',
      timestamp: false,
    },
  },
  README: {
    title: 'readme.md',
    type: 'page',
    display: 'hidden',
  },
}
