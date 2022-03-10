# Unregistering Widgets

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Developers can remove [Elementor widgets](./../widgets/) from the list of registered widgets. This is done by hooking to the widget manager and unregistering specific widgets by passing the widget name.

## Unregistering Existing Widgets

As of Elementor 3.5, developers should use the following code to unregister existing widgets:

```php
/**
 * Unregister Elementor widgets.
 *
 * @param \Elementor\Widgets_Manager $widgets_manager Elementor widgets manager.
 * @return void
 */
function unregister_widgets( $widgets_manager ) {

	$widgets_manager->unregister( 'widget-1' );
	$widgets_manager->unregister( 'widget-2' );

}
add_action( 'elementor/widgets/register', 'unregister_widgets' );
```

This hooks to the `elementor/widgets/register` action hook which holds the widget manager. The manager then unregisters widgets by passing the widget name.

## Remove Unused Widgets

To remove multiple widgets that are not used in your site, you can run a "foreach" loop with a list of widget names.

```php
/**
 * Unregister multiple unused widgets.
 *
 * @param \Elementor\Widgets_Manager $widgets_manager Elementor widgets manager.
 * @return void
 */
function remove_unused_widgets( $widgets_manager ) {

	$widgets_to_unregister = [
		// 'common',
		// 'inner-section',
		// 'heading',
		// 'image',
		// 'text-editor',
		// 'video',
		// 'button',
		// 'divider',
		// 'spacer',
		// 'image-box',
		// 'google-maps',
		// 'icon',
		// 'icon-box',
		// 'star-rating',
		// 'image-carousel',
		// 'image-gallery',
		// 'icon-list',
		// 'counter',
		// 'progress',
		// 'testimonial',
		// 'tabs',
		// 'accordion',
		// 'toggle',
		// 'social-icons',
		// 'alert',
		// 'audio',
		// 'shortcode',
		// 'html',
		// 'menu-anchor',
		// 'sidebar',
		// 'read-more',
	];

	foreach ( $widgets_list as $widget ) {
		$widgets_manager->unregister( $widget );
	}

}
add_action( 'elementor/widgets/register', 'remove_unused_widgets' );
```

Developers can use this logic and build a UI around it to create a visual widgets manager.
