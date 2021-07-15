const { description } = require('../../package')

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
            text: 'Hooks',
            link: '/hooks/',
          },
        ],
      },
      {
        text: 'Components',
        items: [
          {
            text: 'Widgets',
            link: '/widgets/',
          },
          {
            text: 'Controls',
            link: '/controls/',
          },
          {
            text: 'Finder',
            link: '/finder/',
          },
          {
            text: 'Context Menu',
            link: '/context-menu/',
          },
          {
            text: 'Forms',
            link: '/forms/',
          },
          {
            text: 'Dynamic Tags',
            link: '/dynamic-tags/',
          },
          {
            text: 'Theme Locations',
            link: '/themes/',
          },
        ],
      },
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Getting Started',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            '',
            'requirements',
            'guidelines',
          ]
        },
        {
          title: 'Extending Elementor',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            'extending-elementor',
            'file-folder-structure',
            'plugin-header',
            'plugin-structure',
            'plugin-compatibility',
            'register-files',
            'simple-example',
          ]
        },
      ],
      '/dynamic-tags/': [
        {
          title: 'Dynamic Tags',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            [ '', 'Introduction' ],
            'dynamic-tags-categories',
            'dynamic-tags-groups',
          ]
        },
        {
          title: 'Creating Dynamic Tags',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            'dynamic-tags-structure',
            'dynamic-tags-data',
            'dynamic-tags-controls',
            'dynamic-tags-rendering',
          ]
        },
        {
          title: 'Examples',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            'simple-example',
            'complex-example',
          ]
        },
      ],
      '/editor/': [
        {
          title: 'Elementor Editor',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            [ '', 'Introduction' ],
          ]
        },
        {
          title: 'Editor Structure',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            'elementor-preview',
            'elementor-panel',
          ]
        },
        {
          title: 'Editor Panels',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            'menu-panel',
            'site-settings-panel',
            'user-preferences-panel',
            'page-settings-panel',
            'history-panel',
            'widgets-panel',
            'finder-panel',
            'navigator-panel',
          ]
        },
        {
          title: 'Extending The Editor',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            'default-panel',
            'elementor-tabs',
          ]
        },

      ],
      '/finder/': [
        {
          title: 'Elementor Finder',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            [ '', 'Introduction' ],
          ]
        },
        {
          title: 'Creating Items',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            'finder-structure',
            'add-new-finder-items',
            'register-new-category',
          ]
        },
        {
          title: 'Changing Items',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            'add-items-to-existing-category',
            'remove-finder-categories',
            'remove-finder-items',
          ]
        },
        {
          title: 'Examples',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            'simple-example',
            'advanced-example',
          ]
        },
      ],
      '/forms/': [
        {
          title: 'Elementor Forms',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            [ '', 'Introduction' ],
          ]
        },
        {
          title: 'Extending Forms',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            'form-fields',
            'form-actions',
            'form-validation',
            'form-processing',
            'form-submission-actions',
            'form-webhook-response',
          ]
        },
      ],
      '/widgets/': [
        {
          title: 'Elementor Widgets',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            [ '', 'Introduction' ],
          ]
        },
        {
          title: 'Creating Widgets',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            'widget-structure',
            'widget-data',
            'widget-categories',
            'widget-dependencies',
            'widget-controls',
            'widget-rendering',
          ]
        },
        {
          title: 'Widget Controls',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            'regular-control',
            'responsive-control',
            'group-control',
            'control-section',
            'control-tabs',
            'control-popovers',
          ]
        },
        {
          title: 'Widget Rendering',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            'widget-settings',
            'rendering-text',
            'rendering-style',
            'rendering-media',
            'rendering-repeaters',
            'rendering-html-attribute',
            'rendering-inline-editing',
          ]
        },
        {
          title: 'Examples',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            'simple-example',
            'complex-example',
          ]
        },
      ],
      '/controls/': [
        {
          title: 'Elementor Controls',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            [ '', 'Introduction' ],
          ]
        },
        {
          title: 'Using Controls',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            'control-types',
            'ui-controls',
            'data-controls',
            'multi-value-controls',
            'unit-controls',
            'group-controls',
          ]
        },
        {
          title: 'Creating Controls',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            'control-structure',
            'control-settings',
            'control-template',
            'control-values',
            'control-enqueue',
          ]
        },
        {
          title: 'Examples',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            'simple-example',
            'complex-example',
          ]
        },
      ],
      '/context-menu/': [
        {
          title: 'Context Menu',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            [ '', 'Introduction' ],
          ]
        },
        {
          title: 'Manage Actions',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            'add-new-action',
            'remove-action',
            'update-action',
          ]
        },
        {
          title: 'Examples',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            'simple-example',
            'advanced-example',
          ]
        },
      ],
      '/scripts-styles/': [
        {
          title: 'Scripts & Styles',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            [ '', 'Introduction' ],
          ]
        },
        {
          title: 'Frontend',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            'frontend-scripts',
            'frontend-styles',
          ]
        },
        {
          title: 'Editor',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            'editor-scripts',
            'editor-styles',
          ]
        },
        {
          title: 'Widgets',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            'widget-scripts',
            'widget-styles',
          ]
        },
        {
          title: 'Controls',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            'control-scripts',
            'control-styles',
          ]
        },
      ],
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
    ,
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
