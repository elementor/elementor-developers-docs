# Field Dependencies

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

Some form fields are dependent on custom scripts and styles for functionality and look and feel.

## Dependency Properties

Inside the field class we can enqueue any required JS and CSS dependencies the following way:

```php
class Elementor_Test_Field extends \ElementorPro\Modules\Forms\Fields\Field_Base {

	public $depended_scripts = [ 'script-handle' ];

	public $depended_styles = [ 'style-handle' ];

}
```

* **Field Scripts** – The `$depended_scripts` property defines the JS files required to display the field.

* **Field Styles** – The `$depended_styles` property defines the CSS files required to display the field.

## Registering Scripts & Styles

Like any other WordPress plugin, scripts and styles have to be registered using the [wp_register_script()](https://developer.wordpress.org/reference/functions/wp_register_script/) and [wp_register_style()](https://developer.wordpress.org/reference/functions/wp_register_style/) functions in the plugin’s PHP.

::: tip Best Practice
Best practice is to register the script & styles inside the field's PHP class. This way you make sure the script is loaded only if the field is used in a form.
:::

```php
class Elementor_Test_Field extends \ElementorPro\Modules\Forms\Fields\Field_Base {

	public $depended_scripts = [ 'script-handle' ];

	public $depended_styles = [ 'style-handle' ];

	public function __construct() {
		parent::__construct();
		wp_register_script( 'script-handle', plugins_url( 'assets/js/field-script-1.js', __FILE__ ) );
		wp_register_style( 'field-style-1', plugins_url( 'assets/css/field-style-1.css', __FILE__ ) );
	}

}
```

## Future Development

Our roadmap includes a task to unify the way scripts and styles are registered across different components.

We plan to deprecate `$depended_scripts` and `$depended_styles` properties, replacing them with `get_script_depends()` and `get_style_depends()` methods. The same way it's is done in [widgets](./../widgets/widget-dependencies/).

```php
class Elementor_Test_Field extends \ElementorPro\Modules\Forms\Fields\Field_Base {

	public function get_script_depends() {

		wp_register_script( 'field-script-1', plugins_url( 'assets/js/field-script-1.js', __FILE__ ) );
		wp_register_script( 'field-script-2', plugins_url( 'assets/js/field-script-2.js', __FILE__ ), [ 'external-library' ] );
		wp_register_script( 'external-library', plugins_url( 'assets/js/libs/external-library.js', __FILE__ ) );

		return [
			'field-script-1',
			'field-script-2',
		];

	}

	public function get_style_depends() {

		wp_register_style( 'field-style-1', plugins_url( 'assets/css/field-style-1.css', __FILE__ ) );
		wp_register_style( 'field-style-2', plugins_url( 'assets/css/field-style-2.css', __FILE__ ), [ 'external-framework' ] );
		wp_register_style( 'external-framework', plugins_url( 'assets/css/libs/external-framework.css', __FILE__ ) );

		return [
			'field-style-1',
			'field-style-2',
		];

	}

}
```

::: warning Please Note
To make sure your current code is future campatible, make sure your field class don't have the `get_script_depends()` and `get_style_depends()` methods.
:::
