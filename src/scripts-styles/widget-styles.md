# Widget Styles

When you develop new [Elementor Widgets](/widgets/) and you need to register custom stylesheets, you need to register styles using [wp_register_style()](https://developer.wordpress.org/reference/functions/wp_register_style/) function and enqueue using widget `get_style_depends()` method. This way Elementor will load stylesheet dynamically only on pages using this widget.

## Registering Widget Styles

Register widgets stylesheets and set them as widget dependencies:

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function __construct( $data = [], $args = null ) {

		parent::__construct( $data, $args );
		wp_register_style( 'widget-style-1', plugins_url( 'assets/css/widget-style-1.css', __FILE__ ) );
		wp_register_style( 'widget-style-2', plugins_url( 'assets/css/widget-style-2.css', __FILE__ ), [ 'external-framework' ] );
		wp_register_style( 'external-framework', plugins_url( 'assets/css/libs/external-framework.css', __FILE__ ) );

	}

	public function get_style_depends() {

		return [
			'widget-style-1',
			'widget-style-2',
		];

	}

}
```

::: tip Best Practice
A best practice is to register stylesheets inside the widget PHP class. This way you make sure the stylesheet is loaded only if the widget is used.
:::
