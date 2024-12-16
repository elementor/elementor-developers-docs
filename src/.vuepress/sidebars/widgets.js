module.exports = [
  {
    title: 'Elementor Widgets',
    collapsable: false,
    sidebarDepth: -1,
    children: [
      [ '', 'Introduction' ],
    ]
  },
  {
    title: 'Managing Widgets',
    collapsable: false,
    sidebarDepth: -1,
    children: [
      'add-new-widget',
      'remove-widgets',
    ]
  },
  {
    title: 'Creating Widgets',
    collapsable: false,
    sidebarDepth: -1,
    children: [
      'widget-structure',
      'widget-data',
      {
        collapsable: false,
        sidebarDepth: -1,
        children: [
          'widget-information',
          'widget-promotions',
          'widget-categories',
        ]
      },
      'widget-dependencies',
      'widget-controls',
      'widget-rendering',
      {
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
      'widget-optimization',
      {
        collapsable: false,
        sidebarDepth: -1,
        children: [
          'widget-output-caching',
          'widget-inner-wrapper',
        ]
      },
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
];
