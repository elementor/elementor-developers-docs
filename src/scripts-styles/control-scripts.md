# Control Scripts

When you create new [Elementor Controls](/controls/) and you need to register custom scripts, you need to register scripts using [wp_register_script()](https://developer.wordpress.org/reference/functions/wp_register_script/) function and enqueue using [wp_enqueue_script()](https://developer.wordpress.org/reference/functions/wp_enqueue_script/). To make sure Elementor loads the scripts only in the editor, use the control class `enqueue()` method.

## Registering Control Scripts

Register scripts and enqueue them when creating new Controls:

```php
class Elementor_Test_Control extends \Elementor\Base_Control {

	protected function enqueue() {

		wp_register_script( 'control-script-1', plugins_url( 'js/control-script-1.js', __FILE__ ) );
		wp_register_script( 'control-script-2', plugins_url( 'js/control-script-2.js', __FILE__ ), [ 'external-library' ] );
		wp_register_script( 'external-library', plugins_url( 'js/libs/external-library.js', __FILE__ ) );

		wp_enqueue_script( 'control-script-1' );
		wp_enqueue_script( 'control-script-2' );

	}

}
```
