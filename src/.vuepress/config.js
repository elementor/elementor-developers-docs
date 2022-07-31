const { description, base } = require('../../package');

const addonsSidebar = require('./sidebars/addons');
const cliSidebar = require('./sidebars/cli');
const contextMenuSidebar = require('./sidebars/context-menu');
const controlsSidebar = require('./sidebars/controls');
const deprecationsSidebar = require('./sidebars/deprecations');
const dynamicTagsSidebar = require('./sidebars/dynamic-tags');
const editorSidebar = require('./sidebars/editor');
const finderSidebar = require('./sidebars/finder');
const formActionsSidebar = require('./sidebars/form-actions');
const formFieldsSidebar = require('./sidebars/form-fields');
const gettingStartedSidebar = require('./sidebars/getting-started');
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
   * Ref：https://v1.vuepress.vuejs.org/config/#base
   */
  base: process.env.BASE === '1' ? base : undefined,

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * Ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'mask-icon', href: '/assets/img/logo.svg', color: '#db3157' }],
    ['link', { rel: 'apple-touch-icon', href: '/assets/img/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#db3157' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileImage', content: '/assets/img/logo.svg' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    // Fonts
    ['link', { rel: 'preconnect', href: 'https://elementor.com', crossorigin: '' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=DM+Sans%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&display=auto' }],
    // OneTrust Cookies Consent Notice for elementor.com
    ['script', { type: 'text/javascript', src: 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js', charset: 'UTF-8', 'data-cfasync': 'false', 'data-domain-script': '31f0e3a0-7e21-4548-96da-7ae09f8d3f78' }],
    ['script', {}, `function OptanonWrapper(){}function insureCookieBanner(n,o){window.setTimeout(function(){window[n]?o(window[n]):insureCookieBanner(n,o)},800)}insureCookieBanner("OneTrust",function(n){OneTrust.LoadBanner()});`],
    // Google Tag Manager
    ['script', {}, `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://gtm.elementor.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NJK8HW');
    `],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * Ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    base: '/elementor-developers-docs/',
    repo: 'elementor/elementor-developers-docs',
    docsBranch: 'master',
    docsDir: 'src',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: true,
    logo: '/assets/img/icon.svg',
    displayAllHeaders: true,
    smoothScroll: true,
    search: true,
    searchPlaceholder: 'Search...',
    searchMaxSuggestions: 10,
    nav: [
      {
        text: 'Getting Started',
        items: [
          {
            text: 'Getting Started',
            link: '/getting-started/',
          },
          {
            text: 'Your First Addon',
            link: '/getting-started/first-addon/',
          },
          {
            text: 'Building Addons',
            link: '/addons/',
          },
        ],
      },
      {
        text: 'Internals',
        items: [
          {
            text: 'The Editor',
            link: '/editor/',
          },
          {
            text: 'Managers',
            link: '/managers/',
          },
          {
            text: 'Scripts & Styles',
            link: '/scripts-styles/',
          },
          {
            text: 'Hooks',
            link: '/hooks/',
          },
          {
            text: 'Deprecations',
            link: '/deprecations/',
          },
          {
            text: 'CLI',
            link: '/cli/',
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
          // {
          //   text: 'Forms',
          //   link: '/forms/',
          // },
          {
            text: 'Themes',
            link: '/themes/',
          },
        ],
      },
      {
        text: 'Blog',
        link: 'https://developers.elementor.com/blog/',
      },
    ],
    sidebar: {
      '/addons/': addonsSidebar,
      '/cli/': cliSidebar,
      '/context-menu/': contextMenuSidebar,
      '/controls/': controlsSidebar,
      '/deprecations/': deprecationsSidebar,
      '/dynamic-tags/': dynamicTagsSidebar,
      '/editor/': editorSidebar,
      '/getting-started/': gettingStartedSidebar,
      '/finder/': finderSidebar,
      '/form-actions/': formActionsSidebar,
      '/form-fields/': formFieldsSidebar,
      '/hooks/': hooksSidebar,
      '/managers/': managersSidebar,
      '/scripts-styles/': scriptsStylesSidebar,
      '/themes/': themesSidebar,
      '/widgets/': widgetsSidebar,
    }
  },

  /**
   * Markdown rules.
   * 
   * Ref：https://v1.vuepress.vuejs.org/config/#markdown
   */
  markdown: {
    lineNumbers: true,
    toc: true
  },

  /**
   * Apply vue plugins.
   * 
   * Ref：https://v1.vuepress.vuejs.org/plugin/
   */
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: 'New content is available.',
          buttonText: 'Refresh'
        }
      }
    ],
    [
      'vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html',
      },
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
