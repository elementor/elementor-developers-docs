# Page Settings Panel

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

<img src="/assets/img/page-settings-panel.png" alt="Elementor Page Settings Panel" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 20px;">

**Page Settings** is a panel in [the editor](/editor/) where users can change the post/page fields such as, the title, the excerpt (if the post type supports excerpts), feature image, post status, etc.

Page settings are based on posts/pages, meaning that each post/page on the site has its own unique settings saved in the `wp_posts` table in the database.

## Structure and Functionality

The panel has three tabs:

* **Settings** - Manages general page settings.
* **Style** - Manages page styling.
* **Advanced** - Manages other page settings.

The settings panel is Elementor's equivalent to the WordPress post/page edit screen. This where you can set a page title, excerpt, feature image, etc.

Style settings are used to add new styling on a page level, unlike site settings where you control site-wide styles. For example, users can change the page background color/image, overriding the site background style.

In the advanced tab, users can add custom CSS that will only load on this page.

## Retrieving Saved Data

The data in the settings tab is the regular WordPress page/post data which can be retrieved using regular theme functions.

```php
// Retrieve page data
$page_id        = get_the_ID();
$page_title     = get_the_title();
$page_excerpt   = get_the_excerpt();
$page_author    = get_the_author();
$page_permalink = get_permalink();
$page_thumbnail = get_the_post_thumbnail();
```

The data in the style tab is saved in the `post meta` of the page. This `post meta` contains most of the settings related to document settings (excluding some settings that require different treatment).

```php
// Retrieve the page settings manager
$page_settings_manager = \Elementor\Core\Settings\Manager::get_settings_managers( 'page' );

// Retrieve the settings model for the current page
$page_settings_model = $page_settings_manager->get_model( $page_id );

// Retrieve data from a custom control
$test_color = $page_settings_model->get_settings( 'test_color' );

echo $test_color; // Possible output: '#9b0a46'
```

## Adding New Settings

Developers can add new controls to this panel. This is done by [injecting controls](/hooks/injecting-controls) into page settings.

Below is an example how we can add color control to the style tab:

```php
/**
 * Register additional document controls.
 *
 * @param \Elementor\Core\DocumentTypes\PageBase $document The PageBase document instance.
 */
function register_document_controls( $document ) {

    if ( ! $document instanceof \Elementor\Core\DocumentTypes\PageBase || ! $document::get_property( 'has_elements' ) ) {
        return;
    }

    $document->start_controls_section(
        'test_section',
        [
            'label' => esc_html__( 'Test Section', 'plugin-name' ),
            'tab' => \Elementor\Controls_Manager::TAB_STYLE,
        ]
    );

	$document->add_control(
		'test_color',
		[
			'label' => esc_html__( 'Test Color', 'plugin-name' ),
			'type' => \Elementor\Controls_Manager::COLOR,
			'selectors' => [
				'{{WRAPPER}}' => 'background-color: {{VALUE}}',
			],
		]
	);

    $document->end_controls_section();
}
add_action( 'elementor/documents/register_controls', 'register_document_controls' );
```

In the page settings scope, the `{ { WRAPPER } }` placeholder represents a unique class of the `<body>` element. 
