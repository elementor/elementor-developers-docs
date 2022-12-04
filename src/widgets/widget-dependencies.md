# Widget Dependencies

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Some widgets are dependent on custom scripts and styles for functionality and look and feel.

## Defining Dependencies

Inside the widget class we can enqueue any required JS and CSS dependencies the following way:

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

* **Script Dependencies** – The `get_script_depends()` method lets you define the JS files required to run the widget.

* **Style Dependencies** – The `get_style_depends()` method lets you define the CSS files required to run the widget.

## Registering Scripts & Styles

Like any other WordPress plugin, scripts and styles have to be registered using the [wp_register_script()](https://developer.wordpress.org/reference/functions/wp_register_script/) and [wp_register_style()](https://developer.wordpress.org/reference/functions/wp_register_style/) functions in the plugin’s PHP.

::: tip Best Practice
Best practice is to register the script & styles inside the widget's PHP class. This way you make sure the script is loaded only if the widget is used.
:::

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_script_depends() {

		wp_register_script( 'widget-script-1', plugins_url( 'assets/js/widget-script-1.js', __FILE__ ) );
		wp_register_script( 'widget-script-2', plugins_url( 'assets/js/widget-script-2.js', __FILE__ ), [ 'external-library' ] );
		wp_register_script( 'external-library', plugins_url( 'assets/js/libs/external-library.js', __FILE__ ) );

		return [
			'widget-script-1',
			'widget-script-2',
		];

	}

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

### Using Elementor Scripts

Widgets can also use scripts registered by Elementor:

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_script_depends() {

		return [ 'elementor-frontend' ];

	}

}
```

This can be handy when 3rd party widgets register their own frontend handlers. Read more about it on [controls `frontend_available` argument](./../editor-controls/frontend-available/).
