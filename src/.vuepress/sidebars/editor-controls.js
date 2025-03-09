module.exports = [
  {
    title: 'Elementor Editor Controls',
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
      'using-controls',
      'regular-control',
      'responsive-control',
      'group-control',
      'control-section',
      'control-popovers',
      'control-tabs',
    ]
  },
  {
    title: 'Control Classes',
    collapsable: false,
    sidebarDepth: -1,
    children: [
      'control-types',
      {
        title: 'Data Controls',
        collapsable: false,
        sidebarDepth: -1,
        children: [
          'control-text',
          'control-number',
          'control-textarea',
          'control-wysiwyg',
          'control-code',
          'control-hidden',
          'control-switcher',
          'control-popover-toggle',
          'control-select',
          'control-select2',
          'control-choose',
          'control-visual-choice',
          'control-color',
          'control-icon',
          'control-font',
          'control-date-time',
          'control-gallery',
          'control-repeater',
          'control-animation',
          'control-exit-animation',
          'control-hover-animation',
        ]
      },
      {
        title: 'MultiValue Controls',
        collapsable: false,
        sidebarDepth: -1,
        children: [
          'control-url',
          'control-media',
          'control-image-dimensions',
          'control-icons',
          'control-text-shadow',
          'control-box-shadow',
        ]
      },
      {
        title: 'Unit Controls',
        collapsable: false,
        sidebarDepth: -1,
        children: [
          'control-slider',
          'control-dimensions',
        ]
      },
      {
        title: 'UI Controls',
        collapsable: false,
        sidebarDepth: -1,
        children: [
          'control-heading',
          'control-raw-html',
          'control-button',
          'control-divider',
          'control-alert',
          'control-notice',
          'control-deprecated-notice',
        ]
      },
      {
        title: 'Group Controls',
        collapsable: false,
        sidebarDepth: -1,
        children: [
          'group-control-typography',
          'group-control-text-stroke',
          'group-control-text-shadow',
          'group-control-box-shadow',
          'group-control-border',
          'group-control-background',
          'group-control-image-size',
          'group-control-css-filter',
        ]
      }
    ]
  },
  {
    title: 'Control Arguments',
    collapsable: false,
    sidebarDepth: -1,
    children: [
      'labels-description',
      'selectors',
      'selectors-dictionary',
      'conditional-display',
      'global-style',
      'dynamic-content',
      'frontend-available',
      'ai',
    ]
  }
];
