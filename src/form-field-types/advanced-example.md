# Advanced Example

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

For more advanced example we are going to create an addon with a credit card field.

## Folder Structure

The addon will have two files. One file for the new field-type and the other main file to register the new field.

```
elementor-forms-credit-card-field/
|
├─ field-types/
|  └─ credit-card-number.php
|
└─ elementor-forms-credit-card-field.php
```

## Plugin Files

**elementor-forms-credit-card-field.php**

```php
<?php
/**
 * Plugin Name: Elementor Forms Credit Card Number Field
 * Description: Custom addon that adds "credit-card" field to Elementor Forms Widget.
 * Plugin URI:  https://elementor.com/
 * Version:     1.0.0
 * Author:      Elementor Developer
 * Author URI:  https://developers.elementor.com/
 * Text Domain: elementor-forms-credit-card-number-field
 *
 * Elementor tested up to: 3.5.0
 * Elementor Pro tested up to: 3.5.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Register `credit-card-number` field-type to Elementor form widget.
 *
 * @since 1.0.0
 * @param \ElementorPro\Modules\Forms\Registrars\Form_Fields_Registrar $form_fields_registrar
 * @return void
 */
function add_new_credit_card_number_field( $form_fields_registrar ) {

	require_once( __DIR__ . '/field-types/credit-card-number.php' );

	$form_fields_registrar->register( new \Elementor_Credit_Card_Number_Field() );

}
add_action( 'elementor_pro/forms/fields/register', 'add_new_credit_card_number_field' );
```

**field-types/credit-card-number.php**

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
class Elementor_Credit_Card_Number_Field extends \ElementorPro\Modules\Forms\Fields\Field_Base {

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
		return esc_html__( 'Credit Card Number', 'elementor-forms-credit-card-number-field' );
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
				esc_html__( 'Credit card number must be in "XXXX XXXX XXXX XXXXX" format.', 'elementor-forms-credit-card-number-field' )
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
				'label' => esc_html__( 'Placeholder', 'elementor-forms-credit-card-number-field' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => 'xxxx xxxx xxxx xxxx',
				'dynamic' => [
					'active' => true,
				],
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
