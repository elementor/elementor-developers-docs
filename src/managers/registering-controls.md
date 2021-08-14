# Registering Controls

When you create new [Elementor Controls](/controls/) you need to register them to let the **Controls Manager** know them. The registration process is done by hooking to the `elementor/controls/controls_registered` action hook.

## Registering New Controls

To register new controls use the following code:

```php
function register_new_controls() {

	require_once( __DIR__ . '/controls/control-1.php' );
	require_once( __DIR__ . '/controls/control-2.php' );

	\Elementor\Plugin::instance()->controls_manager->register_control( 'control-name', new \Elementor_Control_1() );
	\Elementor\Plugin::instance()->controls_manager->register_control( 'control-name', new \Elementor_Control_2() );

}
add_action( 'elementor/controls/controls_registered', 'register_new_controls' );
```

We hook to the `elementor/controls/controls_registered` action hook and pass a callback function that imports the new control files and then registers them with the control manager.
