# Registering Controls

When you create new [Elementor Controls](/controls/) you need to register them to let the **Controls Manager** know them. The registration process is done by hooking to the `elementor/controls/controls_registered` action hook.

## Registering New Controls

To register new controls use the following code:

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

We hook to the `elementor/controls/controls_registered` action hook and pass a callback function that imports the new control files and then registers them with the control manager.

## New Registration Method

As of Elementor 3.5, developers should use the new way to register controls:

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

We hook to the new `elementor/controls/register` action hook which holds the controls manager. Then we use the manager to register new controls by passing the control instances.
