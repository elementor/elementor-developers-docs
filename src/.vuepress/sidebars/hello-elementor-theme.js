module.exports = [
  {
    title: 'Hello Elementor Theme',
    collapsable: false,
    sidebarDepth: -1,
    children: [
      ['', 'Introduction'],
    ]
  },
  {
    title: 'Faeture Hooks',
    collapsable: false,
    sidebarDepth: -1,
    children: [
      'hello_elementor_post_type_support',
      'hello_elementor_add_theme_support',
      'hello_elementor_register_menus',
      'hello_elementor_add_woocommerce_support',
      'hello_elementor_register_elementor_locations',
    ]
  },
  {
    title: 'Style Hooks',
    collapsable: false,
    sidebarDepth: -1,
    children: [
      'hello_elementor_enqueue_style',
      'hello_elementor_enqueue_theme_style',
    ]
  },
  {
    title: 'Content Hooks',
    collapsable: false,
    sidebarDepth: -1,
    children: [
      'hello_elementor_content_width',
      'hello_elementor_page_title',
      'hello_elementor_viewport_content',
      'hello_elementor_enable_skip_link',
      'hello_elementor_skip_link_url',
    ]
  },
];
