# Registering Controls

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

When you create new [Elementor controls](./../controls/) you must register them. This is done by hooking to the registration hook in the controls manager and passing a new control instance.

## Registering New Controls

Developers should use the following code to register new controls:

```php
/**
 * Register new Elementor controls.
 *
 * @param \Elementor\Controls_Manager $controls_manager Elementor controls manager.
 * @return void
 */
function register_new_controls( $controls_manager ) {

	require_once( __DIR__ . '/controls/control-1.php' );
	require_once( __DIR__ . '/controls/control-2.php' );

	$controls_manager->register( new \Elementor_Control_1() );
	$controls_manager->register( new \Elementor_Control_2() );

}
add_action( 'elementor/controls/register', 'register_new_controls' );
```

This code hooks to the `elementor/controls/register` action hook which holds the controls manager. The manager then registers the new controls by passing the control instances.
