# Add New Field

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

The forms widget has builtin field types but it also accepts new fields registered by external developers.

## Registering Fields

To register new fields you just need to initiate the field class:

```php
function register_new_form_fields( $form_fields_registrar ) {

	require_once( __DIR__ . '/forms/fields/field-1.php' );
	require_once( __DIR__ . '/forms/fields/field-2.php' );

	$form_fields_registrar->register( new \Field_1() );
	$form_fields_registrar->register( new \Field_2() );

}
add_action( 'elementor_pro/forms/fields/register', 'register_new_form_fields' );
```

This hooks to the `elementor_pro/forms/fields/register` action hook which holds the form registrar manager. The manager then registers the new fields by passing the field instances.
