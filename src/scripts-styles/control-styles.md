# Control Styles

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

When you create new [Elementor controls](./../controls/) and need to register custom stylesheets, they must be registered using the [wp_register_style()](https://developer.wordpress.org/reference/functions/wp_register_style/) function and enqueued using [wp_enqueue_style()](https://developer.wordpress.org/reference/functions/wp_enqueue_style/) function. To ensure that Elementor loads the stylesheets only in the editor, use the control `enqueue()` method.

## Registering Control Styles

In the example below, we'll register stylesheets when creating new controls:

```php {6}
function my_plugin_register_control_styles() {
	wp_register_style( 'control-style-1', plugins_url( 'assets/css/control-style-1.css', __FILE__ ) );
	wp_register_style( 'control-style-2', plugins_url( 'assets/css/control-style-2.css', __FILE__ ), [ 'external-framework' ] );
	wp_register_style( 'external-framework', plugins_url( 'assets/css/libs/external-framework.css', __FILE__ ) );
}
add_action( 'wp_enqueue_scripts', 'my_plugin_register_control_styles' );
```

Then, the control class will enqueue the styles:

```php {3}
class Elementor_Test_Control extends \Elementor\Base_Control {

	protected function enqueue(): void {
		wp_enqueue_style( 'control-style-1' );
		wp_enqueue_style( 'control-style-2' );
	}

}
```
