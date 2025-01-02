# Widget Scripts

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

When you develop new [Elementor widgets](./../widgets/) and need to [register custom scripts](./../widgets/widget-dependencies/), they must be registered using the [wp_register_script()](https://developer.wordpress.org/reference/functions/wp_register_script/) function and set as dependencies using the widget `get_script_depends()` method. This way, Elementor will dynamically load these scripts only on pages using these widgets.

## Registering Widget Scripts

In the example below, we'll register the required scripts in the main file:

```php {6}
function my_plugin_register_widget_scripts() {
	wp_register_script( 'widget-script-1', plugins_url( 'assets/js/widget-script-1.js', __FILE__ ) );
	wp_register_script( 'widget-script-2', plugins_url( 'assets/js/widget-script-2.js', __FILE__ ), [ 'external-library' ] );
	wp_register_script( 'external-library', plugins_url( 'assets/js/libs/external-library.js', __FILE__ ) );
}
add_action( 'wp_enqueue_scripts', 'my_plugin_register_widget_scripts' );
```

Then, the widget class will set the JS dependencies:

```php {3}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_script_depends(): array {
		return [ 'widget-script-1', 'widget-script-2' ];
	}

}
```

Addon developers should not enqueue widget script dependencies themselves. Only Elementor enqueue these JS files, and only on pages using the widget.
