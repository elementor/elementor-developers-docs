# Unregistering Controls

Developers can remove [Elementor controls](/controls/) from the list of registered controls. This is done by hooking to the control manager and unregistering specific controls by passing the control ID.

## Unregistering Existing Controls

As of Elementor 3.5, developers should use the following code to unregister existing controls:

```php
/**
 * Unregister Elementor controls.
 *
 * @param \Elementor\Controls_Manager $controls_manager Elementor controls manager.
 *
 * @return void
 */
function unregister_controls( $controls_manager ) {

	$controls_manager->unregister( 'control-1' );
	$controls_manager->unregister( 'control-2' );

}
add_action( 'elementor/controls/register', 'unregister_controls' );
```

This hooks to the `elementor/controls/register` action hook which holds the control manager. The manager then unregisters controls by passing the control ID.
