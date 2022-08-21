# Add New Widget

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Elementor offers many built-in widgets out of the box, but it also allows external developers to register new widgets.

## Hooks

To do that we simply hook to the `elementor/widgets/register` action which provides access to the widgets manager as a parameter. Developers can use the manager to add new widgets using the `register()` method with the widget instance.

## Registering Widgets

To register new widgets use the following code:

```php
function register_new_widgets( $widgets_manager ) {

	require_once( __DIR__ . '/widgets/widget-1.php' );
	require_once( __DIR__ . '/widgets/widget-2.php' );

	$widgets_manager->register( new \Elementor_Widget_1() );
	$widgets_manager->register( new \Elementor_Widget_2() );

}
add_action( 'elementor/widgets/register', 'register_new_widgets' );
```

The manager registers new widgets by accepting widget instances. For more information about the widget class, read about the [widget class structure](./widget-structure/).
