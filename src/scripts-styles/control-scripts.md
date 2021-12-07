# Control Scripts

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

When you create new [Elementor controls](./controls/) and need to register custom scripts, they must be registered using the [wp_register_script()](https://developer.wordpress.org/reference/functions/wp_register_script/) function and enqueued using the [wp_enqueue_script()](https://developer.wordpress.org/reference/functions/wp_enqueue_script/) function. To ensure that Elementor only loads the scripts in the editor, use the control `enqueue()` method.

## Registering Control Scripts

In the example below, we'll register scripts and enqueue them when creating new controls:

```php
class Elementor_Test_Control extends \Elementor\Base_Control {

	protected function enqueue() {

		wp_register_script( 'control-script-1', plugins_url( 'assets/js/control-script-1.js', __FILE__ ) );
		wp_register_script( 'control-script-2', plugins_url( 'assets/js/control-script-2.js', __FILE__ ), [ 'external-library' ] );
		wp_register_script( 'external-library', plugins_url( 'assets/js/libs/external-library.js', __FILE__ ) );

		wp_enqueue_script( 'control-script-1' );
		wp_enqueue_script( 'control-script-2' );

	}

}
```
