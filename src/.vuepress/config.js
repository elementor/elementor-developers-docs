const { description } = require('../../package');

const contextMenuSidebar = require('./sidebars/context-menu');
const controlsSidebar = require('./sidebars/controls');
const docsSidebar = require('./sidebars/docs');
const dynamicTagsSidebar = require('./sidebars/dynamic-tags');
const editorSidebar = require('./sidebars/editor');
const finderSidebar = require('./sidebars/finder');
const formsSidebar = require('./sidebars/forms');
const hooksSidebar = require('./sidebars/hooks');
const managersSidebar = require('./sidebars/managers');
const scriptsStylesSidebar = require('./sidebars/scripts-styles');
const themesSidebar = require('./sidebars/themes');
const widgetsSidebar = require('./sidebars/widgets');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Elementor Developers',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    base: '/elementor-developers/',
    repo: 'ramiy/elementor-developers',
    docsBranch: 'main',
    docsDir: 'src',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: true,
    logo: 'https://avatars.githubusercontent.com/u/47606894?s=35',
    displayAllHeaders: true,
    smoothScroll: true,
    search: false,
    nav: [
      {
        text: 'Getting Started',
        link: '/docs/',
      },
      {
        text: 'Internals',
        items: [
          {
            text: 'The Editor',
            link: '/editor/',
          },
          {
            text: 'Scripts & Styles',
            link: '/scripts-styles/',
          },
          {
            text: 'Managers',
            link: '/managers/',
          },
          {
            text: 'Hooks',
            link: '/hooks/',
          },
        ],
      },
      {
        text: 'Components',
        items: [
          {
            text: 'Context Menu',
            link: '/context-menu/',
          },
          {
            text: 'Finder',
            link: '/finder/',
          },
          {
            text: 'Widgets',
            link: '/widgets/',
          },
          {
            text: 'Controls',
            link: '/controls/',
          },
          {
            text: 'Dynamic Tags',
            link: '/dynamic-tags/',
          },
          {
            text: 'Forms',
            link: '/forms/',
          },
          {
            text: 'Themes',
            link: '/themes/',
          },
        ],
      },
    ],
    sidebar: {
      '/context-menu/': contextMenuSidebar,
      '/controls/': controlsSidebar,
      '/docs/': docsSidebar,
      '/dynamic-tags/': dynamicTagsSidebar,
      '/editor/': editorSidebar,
      '/finder/': finderSidebar,
      '/forms/': formsSidebar,
      '/hooks/': hooksSidebar,
      '/managers/': managersSidebar,
      '/scripts-styles/': scriptsStylesSidebar,
      '/themes/': themesSidebar,
      '/widgets/': widgetsSidebar,
    }
  },

  markdown: {
    lineNumbers: true,
    toc: true
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-123456789-0'
      }
    ],
    [
      'vuepress-plugin-seo',
      {
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        author: (_, $site) => $site.themeConfig.author,
        tags: $page => $page.frontmatter.tags,
        twitterCard: _ => 'summary_large_image',
        type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
        url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
        image: () => 'https://avatars.githubusercontent.com/u/47606894',
        publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
      }
    ]
  ]
}
