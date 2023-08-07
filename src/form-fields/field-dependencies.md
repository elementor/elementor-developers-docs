# Field Dependencies

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

Some form fields are dependent on custom scripts for functionality and custom styles for look and feel.

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

## Registering Scripts & Styles in WordPress

Like any other WordPress plugin, scripts and styles have to be registered using the [wp_register_script()](https://developer.wordpress.org/reference/functions/wp_register_script/) and [wp_register_style()](https://developer.wordpress.org/reference/functions/wp_register_style/) functions in the plugin’s PHP.

You can use the [wp_enqueue_scripts](https://developer.wordpress.org/reference/hooks/wp_enqueue_scripts/) hook to register scripts and styles on front-end pages

## Registering Scripts & Styles in Elementor

Elementor addon developers should register JS and CSS dependencies in the main file, usually where [form fields are registered](./add-new-field/):

```php
/**
 * Register Elementor form fields.
 */
function elementor_test_field_registration( $form_fields_registrar ) {

	require_once( __DIR__ . '/forms/fields/field-1.php' );
	require_once( __DIR__ . '/forms/fields/field-2.php' );

	$form_fields_registrar->register( new \Elementor_Test_Field_1() );
	$form_fields_registrar->register( new \Elementor_Test_Field_2() );

}
add_action( 'elementor_pro/forms/fields/register', 'elementor_test_field_registration' );

/**
 * Register scripts and styles for Elementor form fields.
 */
function elementor_test_field_dependencies() {

	/* Scripts */
	wp_register_script( 'field-script', plugins_url( 'assets/js/field-script.js', __FILE__ ) );
	wp_register_script( 'external-library', plugins_url( 'assets/js/libs/external-library.js', __FILE__ ) );

	/* Styles */
	wp_register_style( 'field-style', plugins_url( 'assets/css/field-style.css', __FILE__ ) );
	wp_register_style( 'external-framework', plugins_url( 'assets/css/libs/external-framework.css', __FILE__ ) );

}
add_action( 'wp_enqueue_scripts', 'elementor_test_field_dependencies' );
```

Then, each form field should set its dependencies as follows:

```php
class Elementor_Test_Field extends \ElementorPro\Modules\Forms\Fields\Field_Base {

	public $depended_scripts = [ 'field-script', 'external-library' ];

	public $depended_styles = [ 'field-style', 'external-framework' ];

}
```

## Future Development

Our roadmap includes a task to unify the way scripts and styles are registered across different components.

We plan to deprecate the `$depended_scripts` and `$depended_styles` properties, replacing them with the `get_script_depends()` and `get_style_depends()` methods. The same way it's done in [widgets](./../widgets/widget-dependencies/).

```php
class Elementor_Test_Field extends \ElementorPro\Modules\Forms\Fields\Field_Base {

	public function get_script_depends() {
		return [ 'field-script-1', 'field-script-2' ];
	}

	public function get_style_depends() {
		return [ 'field-style-1', 'field-style-2' ];
	}

}
```

::: warning Please Note
To make sure your current code is future campatible, make sure your form field class doesn't have the `get_script_depends()` and `get_style_depends()` methods.
:::
