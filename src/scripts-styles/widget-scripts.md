# Widget Scripts

When you develop new [Elementor Widgets](/widgets/) and you need to register custom scripts, you need to register scripts using [wp_register_script()](https://developer.wordpress.org/reference/functions/wp_register_script/) function and enqueue using the widget `get_script_depends()` method. This way Elementor will only load the script dynamically only on pages using this widget.

## Registering Widget Scripts

Register widgets scripts and set them as widget dependencies:

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function __construct( $data = [], $args = null ) {

		parent::__construct( $data, $args );
		wp_register_script( 'widget-script-1', plugins_url( 'assets/js/widget-script-1.js', __FILE__ ) );
		wp_register_script( 'widget-script-2', plugins_url( 'assets/js/widget-script-2.js', __FILE__ ), [ 'external-library' ] );
		wp_register_script( 'external-library', plugins_url( 'assets/js/libs/external-library.js', __FILE__ ) );

	}

	public function get_script_depends() {

		return [
			'widget-script-1',
			'widget-script-2'
		];

	}

}
```

::: tip Best Practice
A best practice is to register script inside the widget PHP class. This way you make sure the script is loaded only if the widget is used.
:::
