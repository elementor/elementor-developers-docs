# Widget Dependencies

Some widgets dependent on custom scripts and styles for functionality and look and feel.

## Define Dependencies

Inside the widget class we can enqueue required JS and CSS dependencies the following way:

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_script_depends() {
		return [ 'script-handle' ];
	}

	public function get_style_depends() {
		return [ 'style-handle' ];
	}

}
```

* **Script Dependencies** – The `get_script_depends()` method lets you define JS files required to run the widget.

* **Style Dependencies** – The `get_style_depends()` method lets you define CSS files required to run the widget.

## Registering Scripts & Styles

Like any other WordPress plugin, the scripts and styles have to be registered using [wp_register_script()](https://developer.wordpress.org/reference/functions/wp_register_script/) and [wp_register_style()](https://developer.wordpress.org/reference/functions/wp_register_style/) functions in the plugin’s PHP.

::: tip Best Practice
A best practice is to register the script & styles inside the widgets PHP class. This way you make sure the script is loaded only if the widget is used.
:::

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function __construct( $data = [], $args = null ) {
		parent::__construct( $data, $args );
		wp_register_script( 'script-handle', 'path/to/file.js', [ 'elementor-frontend' ], '1.0.0', true );
		wp_register_style( 'style-handle', 'path/to/file.css' );
	}

	public function get_script_depends() {
		return [ 'script-handle' ];
	}

	public function get_style_depends() {
		return [ 'style-handle' ];
	}

}
```
