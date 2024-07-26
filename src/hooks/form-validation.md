# Form Validation

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

Form validation allows you to run a series of checks to ensure the data complies to certain rules. Elementor Pro provides a set of tools for validating data sent through the form widget.

## Validation Lifecycle

After the forms module is loaded and it’s a POST request with the form action. This is the place to add a form validation handlers.

## Validation Hooks

To validate form data Elementor Pro offers the following action hooks:

* `elementor_pro/forms/validation`
* `elementor_pro/forms/validation/{$field_type}`

The first hook applied on all fields, the second hook applied on specific [field types](./../form-fields/).

## Examples

Validating email field:

```php
function elementor_form_email_field_validation( $field, $record, $ajax_handler ) {
	// Validate email format
	if ( ! is_email( $field['value'] ) ) {
		$ajax_handler->add_error( $field['id'], esc_html__( 'Invalid email address, it must be in xx@xx.xx format.', 'textdomain' ) );
		return;
	}

	// Do your validation here.
}
add_action( 'elementor_pro/forms/validation/email', 'elementor_form_email_field_validation', 10, 3 );
```

Validate the Ticket ID field is in XXX-XXXX format:

```php
function elementor_form_validation( $record, $ajax_handler ) {
	$fields = $record->get_field( [
		'id' => 'ticket_id',
	] );

	if ( empty( $fields ) ) {
		return;
	}

	$field = current( $fields );

	if ( 1 !== preg_match( '/^\w{3}-\w{4}$/', $field['value'] ) ) {
		$ajax_handler->add_error( $field['id'], esc_html__( 'Invalid Ticket ID, it must be in XXX-XXXX format.', 'textdomain' ) );
	}
}
add_action( 'elementor_pro/forms/validation', 'elementor_form_validation', 10, 2 );
```

Tel match this format XXX-XXX-XXXX, i.e. 123-456-7890

```php
function elementor_form_tel_field_validation( $field, $record, $ajax_handler ) {
	// Remove native validation
	$forms_module = \ElementorPro\Plugin::instance()->modules_manager->get_modules( 'forms' );
	remove_action( 'elementor_pro/forms/validation/tel', [ $forms_module->fields_registrar->get( 'tel' ), 'validation' ], 10, 3 );

	// Run your own validation, ex:
	if ( empty( $field['value'] ) ) {
		return;
	}

	// Match this format XXX-XXX-XXXX, e.g. 123-456-7890
	if ( preg_match( '/[0-9]{3}(-?)[0-9]{3}(-?)[0-9]{4}/', $field['value'] ) !== 1 ) {
		$ajax_handler->add_error( $field['id'], esc_html__( 'Please make sure the phone number is in XXX-XXX-XXXX format, eg: 123-456-7890', 'textdomain' ) );
	}
}
add_action( 'elementor_pro/forms/validation/tel', 'elementor_form_tel_field_validation', 10, 3 );

function elementor_form_tel_field_rendering( $item, $item_index, $form ) {
	// Remove native render
	$forms_module = \ElementorPro\Plugin::instance()->modules_manager->get_modules( 'forms' );
	remove_action( 'elementor_pro/forms/render_field/tel', [ $forms_module->fields_registrar->get( 'tel' ), 'field_render' ], 10, 3 );

	// Add custom render ex:
	$form->add_render_attribute( 'input' . $item_index, 'class', 'elementor-field-textual' );
	$form->add_render_attribute( 'input' . $item_index, 'pattern', '[0-9]{3}(-?)[0-9]{3}(-?)[0-9]{4}' );
	$form->add_render_attribute( 'input' . $item_index, 'title', esc_html__( 'Number should be in this format xxx-xxx-xxxx.', 'textdomain' ) );

	echo '<input size="1" ' . $form->get_render_attribute_string( 'input' . $item_index ) . '>';
}
add_action( 'elementor_pro/forms/render_field/tel', 'elementor_form_tel_field_rendering', 9, 3 );
```
