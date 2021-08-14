# Registering Widgets

When you create new [Elementor Widgets](/widgets/) you need to register them to let the **Widgets Manager** know them. The registration process is done by hooking to the `elementor/widgets/widgets_registered` action hook.

## Registering New Widgets

To register new widgets use the following code:

```php
function register_new_widgets() {

	require_once( __DIR__ . '/widgets/widget-1.php' );
	require_once( __DIR__ . '/widgets/widget-2.php' );

	\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \Elementor_Widget_1() );
	\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \Elementor_Widget_2() );

}
add_action( 'elementor/widgets/widgets_registered', 'register_new_widgets' );
```

We hook to the `elementor/widgets/widgets_registered` action hook and pass a callback function that imports the new widget files and then registers them with the widget manager.
