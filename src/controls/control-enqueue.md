# Control Enqueue

Controls can register and enqueue scripts & styles used by control.

## Enqueue Method

If you need to use an external library or some custom JS/CSS, you can do that by registering scripts in `enqueue()` method.

```php
class Elementor_Test_Control extends \Elementor\Base_Control {

	protected function enqueue() {

		// Styles
		wp_register_style( 'control-style', plugins_url( 'css/control-style.css', __FILE__ ) );
		wp_enqueue_style( 'control-style' );

		// Scripts
		wp_register_script( 'control-script', plugins_url( 'js/control-script.js', __FILE__ ) );
		wp_enqueue_script( 'control-script' );

	}

}
```
