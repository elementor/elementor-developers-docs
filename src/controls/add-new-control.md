# Add New Control

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Elementor offers many built-in controls out of the box, but it also allows external developers to register new controls.

## Hooks

To do that we simply hook to the `elementor/controls/register` action which provides access to the controls manager as a parameter. Developers can use the manager to add new controls using the `register()` method with the controls instance.

## Registering Controls

To register new controls use the following code:

```php
function register_new_controls( $controls_manager ) {

	require_once( __DIR__ . '/controls/control-1.php' );
	require_once( __DIR__ . '/controls/control-2.php' );

	$controls_manager->register( new \Elementor_Control_1() );
	$controls_manager->register( new \Elementor_Control_2() );

}
add_action( 'elementor/controls/register', 'register_new_controls' );
```

The manager registers new controls by accepting control instances. For more information about the control class, read about the [control class structure](./control-structure/).
