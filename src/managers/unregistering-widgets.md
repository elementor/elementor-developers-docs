# Unregistering Widgets

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Developers can remove [Elementor widgets](./widgets/) from the list of registered widgets. This is done by hooking to the widget manager and unregistering specific widgets by passing the widget name.

## Unregistering Existing Widgets

As of Elementor 3.5, developers should use the following code to unregister existing widgets:

```php
/**
 * Unregister Elementor widgets.
 *
 * @param \Elementor\Widgets_Manager $widgets_manager Elementor widgets manager.
 *
 * @return void
 */
function unregister_widgets( $widgets_manager ) {

	$widgets_manager->unregister( 'widget-1' );
	$widgets_manager->unregister( 'widget-2' );

}
add_action( 'elementor/widgets/register', 'unregister_widgets' );
```

This hooks to the `elementor/widgets/register` action hook which holds the widget manager. The manager then unregisters widgets by passing the widget name.
