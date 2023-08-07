# Registering Widgets

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

When you create new [Elementor widgets](./../widgets/), you must register them. This is done by hooking to the registration hook in the widgets manager and passing a new widget instance.

## Registering New Widgets

Developers should use the following code to register new widgets:

```php
/**
 * Register new Elementor widgets.
 *
 * @param \Elementor\Widgets_Manager $widgets_manager Elementor widgets manager.
 * @return void
 */
function register_new_widgets( $widgets_manager ) {

	require_once( __DIR__ . '/widgets/widget-1.php' );
	require_once( __DIR__ . '/widgets/widget-2.php' );

	$widgets_manager->register( new \Elementor_Widget_1() );
	$widgets_manager->register( new \Elementor_Widget_2() );

}
add_action( 'elementor/widgets/register', 'register_new_widgets' );
```

This code hooks to the `elementor/widgets/register` action hook which holds the widgets manager. The manager then registers new widgets by passing the widget instance.
