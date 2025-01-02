# Widget Styles

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

When you develop new [Elementor widgets](./../widgets/) and need to [register custom stylesheets](./../widgets/widget-dependencies/), they must be registered using the [wp_register_style()](https://developer.wordpress.org/reference/functions/wp_register_style/) function and set as dependencies using the widget `get_style_depends()` method. This way, Elementor will dynamically load these stylesheets only on pages using these widgets.

## Registering Widget Styles

In the example below, we'll register the required stylesheets in the main file:

```php {6}
function my_plugin_register_widget_styles() {
	wp_register_style( 'widget-style-1', plugins_url( 'assets/css/widget-style-1.css', __FILE__ ) );
	wp_register_style( 'widget-style-2', plugins_url( 'assets/css/widget-style-2.css', __FILE__ ), [ 'external-framework' ] );
	wp_register_style( 'external-framework', plugins_url( 'assets/css/libs/external-framework.css', __FILE__ ) );
}
add_action( 'wp_enqueue_scripts', 'my_plugin_register_widget_styles' );
```

Then, the widget class will set the CSS dependencies:

```php {3}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_style_depends(): array {
		return [ 'widget-style-1', 'widget-style-2' ];
	}

}
```

Addon developers don't enqueue widget style dependencies themselves. Only Elementor enqueue these CSS files, and only on pages using the widget.
