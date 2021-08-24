# Widget Styles

When you develop new [Elementor Widgets](/widgets/) and need to register custom stylesheets, they must be registered using the [wp_register_style()](https://developer.wordpress.org/reference/functions/wp_register_style/) function and enqueued using the widget `get_style_depends()` method. This way Elementor will dynamically load the stylesheets only on pages using these widgets.

## Registering Widget Styles

In the example below, we'll register widget stylesheets and set them as widget dependencies:

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_style_depends() {

		wp_register_style( 'widget-style-1', plugins_url( 'assets/css/widget-style-1.css', __FILE__ ) );
		wp_register_style( 'widget-style-2', plugins_url( 'assets/css/widget-style-2.css', __FILE__ ), [ 'external-framework' ] );
		wp_register_style( 'external-framework', plugins_url( 'assets/css/libs/external-framework.css', __FILE__ ) );

		return [
			'widget-style-1',
			'widget-style-2',
		];

	}

}
```

::: tip Best Practice
Best practice is to register stylesheets inside the widget PHP class. This ensures that the stylesheet is loaded only if the widget is used.
:::
