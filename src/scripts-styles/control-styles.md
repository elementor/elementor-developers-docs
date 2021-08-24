# Control Styles

When you create new [Elementor controls](/controls/) and you need to register custom stylesheets, they must be registered using the [wp_register_style()](https://developer.wordpress.org/reference/functions/wp_register_style/) function and enqueued using [wp_enqueue_style()](https://developer.wordpress.org/reference/functions/wp_enqueue_style/) function. To ensure that Elementor loads the stylesheets only in the editor, use the control `enqueue()` method.

## Registering Control Styles

In the example below, we'll register stylesheets and enqueue them when creating new controls:

```php
class Elementor_Test_Control extends \Elementor\Base_Control {

	protected function enqueue() {

		wp_register_style( 'control-style-1', plugins_url( 'assets/js/control-style-1.js', __FILE__ ) );
		wp_register_style( 'control-style-2', plugins_url( 'assets/js/control-style-2.js', __FILE__ ), [ 'external-framework' ] );
		wp_register_style( 'external-framework', plugins_url( 'assets/js/libs/external-framework.js', __FILE__ ) );

		wp_enqueue_style( 'control-style-1' );
		wp_enqueue_style( 'control-style-2' );

	}

}
```
