# Registering Widgets

When you create new [Elementor widgets](/widgets/), you must register them. The registration process is done by hooking to the `elementor/widgets/widgets_registered` action hook.

## Registering New Widgets

To register new widgets use the following code:

```php
/**
 * Register new Elementor widgets.
 *
 * @return void
 */
function register_new_widgets() {

	require_once( __DIR__ . '/widgets/widget-1.php' );
	require_once( __DIR__ . '/widgets/widget-2.php' );

	\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \Elementor_Widget_1() );
	\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \Elementor_Widget_2() );

}
add_action( 'elementor/widgets/widgets_registered', 'register_new_widgets' );
```

This hooks the `elementor/widgets/widgets_registered` action hook and passes a callback function importing the new widget files and registering them with the widget manager.

## New Registration Method

As of Elementor 3.5, developers should use the following code to register widgets:

```php
/**
 * Register new Elementor widgets.
 *
 * @param \Elementor\Widgets_Manager $widgets_manager Elementor widgets manager.
 *
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

This hooks to the new `elementor/widgets/register` action hook which holds the widgets manager. Then we use the manager to register new widgets by passing the widget instance.
