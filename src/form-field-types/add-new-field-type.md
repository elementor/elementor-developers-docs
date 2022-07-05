# Add New Field Type

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

The forms widget has builtin field types but it also accepts new fields registered by external developers.

## Registering Field Types

To register new field types you just need to initiate the field class:

```php
function register_new_form_fields( $form_fields_registrar ) {

	require_once( __DIR__ . '/forms/fields/field-1.php' );
	require_once( __DIR__ . '/forms/fields/field-2.php' );

	$form_fields_registrar->register( new \Field_1() );
	$form_fields_registrar->register( new \Field_2() );

}
add_action( 'elementor_pro/forms/fields/register', 'register_new_form_fields' );
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

	public function update_controls() }{}

}
```

* **Field Type** – The `get_type()` method returns the field name that will be used in the code.

* **Field Name** – The `get_title()` method returns the field label that will be displayed to the user.

* **Field Render** – The `render()` method renders the data and display the field output.

* **Field Validation** – The `validation()` method runs a series of checks to ensure the data complies to certain rules.

* **Field controls** – The `update_controls()` method updates the the widget controls, it allows to add new controls to specific field types.

## Example Field Type

Lets create a new field type for Elementor form widget. The field will allow end-users to enter their credit card number.

```php
<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Elementor Form Field Type - Credit Card Number
 *
 * Add a new "Credit Card Number" field type to Elementor form widget.
 *
 * @since 1.0.0
 */
class Elementor_Credit_Card_Number_Field_Type extends \ElementorPro\Modules\Forms\Fields\Field_Base {

	/**
	 * Get field type.
	 *
	 * Retrieve the unique ID of the field type.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Field type.
	 */
	public function get_type() {
		return 'credit-card-number';
	}

	/**
	 * Get field name.
	 *
	 * Retrieve the field type label.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Field name.
	 */
	public function get_name() {
		return esc_html__( 'Credit Card Number', 'plugin-name' );
	}

	/**
	 * Render field output on the frontend.
	 *
	 * Written in PHP and used to generate the final HTML.
	 *
	 * @since 1.0.0
	 * @access public
	 * @param mixed $item
	 * @param mixed $item_index
	 * @param mixed $form
	 * @return void
	 */
	public function render( $item, $item_index, $form ) {
		$form_id = $form->get_id();

		$form->add_render_attribute(
			'input' . $item_index,
			[
				'class' => 'elementor-field-textual',
				'for' => $form_id . $item_index,
				'type' => 'tel',
				'inputmode' => 'numeric',
				'maxlength' => '19',
				'pattern' => '[0-9\s]{19}',
				'placeholder' => $item['placeholder'],
				'autocomplete' => 'cc-number',
			]
		);

		echo '<input ' . $form->get_render_attribute_string( 'input' . $item_index ) . '>';
	}

	/**
	 * Field validation.
	 *
	 * @since 1.0.0
	 * @access public
	 * @param \ElementorPro\Modules\Forms\Classes\Field_Base   $field
	 * @param \ElementorPro\Modules\Forms\Classes\Form_Record  $record
	 * @param \ElementorPro\Modules\Forms\Classes\Ajax_Handler $ajax_handler
	 * @return void
	 */
	public function validation( $field, $record, $ajax_handler ) {
		if ( empty( $field['value'] ) ) {
			return;
		}

		if ( preg_match( '/^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/', $field['value'] ) !== 1 ) {
			$ajax_handler->add_error(
				$field['id'],
				esc_html__( 'Credit card number must be in "XXXX XXXX XXXX XXXXX" format.', 'plugin-name' )
			);
		}
	}

	/**
	 * Update form widget controls.
	 *
	 * @since 1.0.0
	 * @access public
	 * @param \Elementor\Widget_Base $widget The form widget instance.
	 * @return void
	 */
	public function update_controls( $widget ) {
		$elementor = \ElementorPro\Plugin::elementor();

		$control_data = $elementor->controls_manager->get_control_from_stack( $widget->get_unique_name(), 'form_fields' );

		if ( is_wp_error( $control_data ) ) {
			return;
		}

		$field_controls = [
			'placeholder' => [
				'name' => 'placeholder',
				'label' => esc_html__( 'Placeholder', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => 'xxxx xxxx xxxx xxxx',
				'condition' => [
					'field_type' => $this->get_type(),
				],
			],
		];

		$control_data['fields'] = $this->inject_field_controls( $control_data['fields'], $field_controls );

		$widget->update_control( 'form_fields', $control_data );
	}

}
```
