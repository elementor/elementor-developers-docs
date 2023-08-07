# Field Validation

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

Elementor offers the ability to run a series of checks to ensure that field data complies to a certain set of rules. The validating method checks if the field value is a valid value.

## Validation Method

The method that triggers the validation process called `validation()`. This method makes sure the end-user entered a valid value by running a set of checks. If one of the checks fails, the method adds an error using `$ajax_handler->add_error( $field, $message )`.

When the form is submitted, Elementor checkes whether all the fields have valid values. Using the ajax handler, Elementor can add error messages to the fields that fail validation. If the field value is valid, the server will process the form submission. Otherwise, an ajax handler will be sent with the error message.

```php
class Elementor_Test_Field extends \ElementorPro\Modules\Forms\Fields\Field_Base {

	public function validation( $field, $record, $ajax_handler ) {

		if ( empty( $field['value'] ) ) {
			return;
		}

		if ( (int) $field['value'] > 0 ) {
			$ajax_handler->add_error(
				$field['id'],
				esc_html__( 'The field must contain a positive number.', 'textdomain' )
			);
		}

	}

}
```

This method accepts three parameters. The `$field` parameter is an instance of the field itself. The `$record` parameter is an instance of the form record containing the user data. The `$ajax_handler` parameter is an instance of form ajax, responsible for handling the form ajax.

## Field Controls

Some fields have [custom controls](./field-controls/) that allow the user to customize the field. Developers can use user data from the form widget for validation as follows:

```php
class Elementor_Test_Field extends \ElementorPro\Modules\Forms\Fields\Field_Base {

	public function validation( $field, $record, $ajax_handler ) {

		if ( empty( $field['value'] ) ) {
			return;
		}

		if ( (int) $field['value'] > 0 ) {
			$ajax_handler->add_error(
				$field['id'],
				esc_html__( 'The field must contain a positive number.', 'textdomain' )
			);
		}

		if ( ( ! empty( $field['minimum'] ) ) && ( (int) $field['value'] > $field['minimum'] ) ) {
			$ajax_handler->add_error(
                $field['id'],
                sprintf( esc_html__( 'The field must be greater than %s.', 'elementor-pro' ), $field['minimum'] )
            );
		}

	}

}
```

In the example above, the field has a custom control called `minimum` where the user can set the minimum number. We have two validation checks to make sure the value is a positive number and its value is greater than the defined minimum number.
