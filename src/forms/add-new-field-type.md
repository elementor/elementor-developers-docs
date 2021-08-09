# Add New Field Type

The forms widget has builtin field types but it also accepts new fields registered by external developers.

## Registering Field Types

To register new field types you just need to initiate the field class:

```php
function register_new_form_fields() {

	require_once( __DIR__ . '/forms/fields/field-1.php' );
	require_once( __DIR__ . '/forms/fields/field-2.php' );

	new Field_1();
	new Field_2();

}
add_action( 'elementor_pro/init', 'register_new_form_fields' );
```

## Field Types Class

To create your own field type, you need to extend the `Field_Base` abstract class:

```php
class Elementor_Test_Control extends \ElementorPro\Modules\Forms\Fields\Field_Base {
}
```

## Field Types Methods

A simple field type skeleton class will look as follows:

```php
class Elementor_Test_Field_Type extends \ElementorPro\Modules\Forms\Fields\Field_Base {

	public $depended_scripts = [];

	public $depended_styles = [];

	public function get_type() {}

	public function get_name() {}

	public function render() {}

	public function validation() {}

}
```

* **Field Type** – The `get_type()` method returns the field name that will be used in the code.

* **Field Name** – The `get_title()` method returns the field label that will be displayed to the user.

* **Field Render** – The `render()` method renders the data and display the field output.

* **Field Render** – The `validation()` method runs a series of checks to ensure the data complies to certain rules.

## Example Field Type

Lets create a new field type for Elementor form widget. The field will allow end-users to enter their credit card number.

```php
class Elementor_Credit_Card_Number_Field_Type extends \ElementorPro\Modules\Forms\Fields\Field_Base {

	public function get_type() {
		return 'credit card number';
	}

	public function get_name() {
		return __( 'Credit Card Number', 'plugin-name' );
	}

	public function render( $item, $item_index, $form ) {
		$form->add_render_attribute( "input{$item_index}", 'class', 'elementor-field-textual' );
		$form->add_render_attribute( "input{$item_index}", 'type', 'tel' );
		$form->add_render_attribute( "input{$item_index}", 'inputmode', 'numeric' );
		$form->add_render_attribute( "input{$item_index}", 'maxlength', '19' );
		$form->add_render_attribute( "input{$item_index}", 'pattern', '[0-9\s]{13,19}' );
		$form->add_render_attribute( "input{$item_index}", 'placeholder', 'xxxx xxxx xxxx xxxx' );
		$form->add_render_attribute( "input{$item_index}", 'autocomplete', 'cc-number' );

		echo '<input ' . $form->get_render_attribute_string( "input{$item_index}" ) . '>';
	}

	public function validation( $field, $record, $ajax_handler ) {
		if ( empty( $field['value'] ) ) {
			return;
		}

		if ( preg_match( '/^4[0-9]{12}(?:[0-9]{3})?$/', $field['value'] ) !== 1 ) {
			$ajax_handler->add_error( $field['id'], __( 'Credit card number must be in "XXXX XXXX XXXX XXXXX" format.', 'plugin-name' ) );
		}
	}

}
```