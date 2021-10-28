# Registering Controls

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

When you create new [Elementor controls](/controls/) you must register them. This is done by hooking to the registration hook in the controls manager and passing a new control instance.

## Registering New Controls

As of Elementor 3.5, developers should use the following code to register new controls:

```php
/**
 * Register new Elementor controls.
 *
 * @param \Elementor\Controls_Manager $controls_manager Elementor controls manager.
 *
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

This hooks to the `elementor/controls/register` action hook which holds the controls manager. The manager then registers the new controls by passing the control instances.

## Registering New Controls in Previous Versions

For earlier versions, prior to Elementor 3.5, register new controls using the following code:

```php
/**
 * Register new Elementor controls.
 *
 * @return void
 */
function register_new_controls() {

	require_once( __DIR__ . '/controls/control-1.php' );
	require_once( __DIR__ . '/controls/control-2.php' );

	\Elementor\Plugin::instance()->controls_manager->register_control( 'control-name', new \Elementor_Control_1() );
	\Elementor\Plugin::instance()->controls_manager->register_control( 'control-name', new \Elementor_Control_2() );

}
add_action( 'elementor/controls/controls_registered', 'register_new_controls' );
```

This hooks to the `elementor/controls/controls_registered` action hook and passes a callback function importing the new control files and registering them with the control manager.
