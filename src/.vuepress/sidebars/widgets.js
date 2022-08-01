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
      'widget-categories',
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
