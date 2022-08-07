# Add New Action

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

The form widget has several built-in actions, but external developers can create and register new form actions.

## Registering Actions

To register new actions you simply need to initiate the action class:

```php
function register_new_form_actions( $form_actions_registrar ) {

	require_once( __DIR__ . '/forms/actions/action-1.php' );
	require_once( __DIR__ . '/forms/actions/action-2.php' );

	$form_actions_registrar->register( new \Action_1() );
	$form_actions_registrar->register( new \Action_2() );

}
add_action( 'elementor_pro/forms/actions/register', 'register_new_form_actions' );
```

This hooks to the `elementor_pro/forms/actions/register` action hook, which holds the form registrar manager. The manager then registers the new actions by passing the action instances.
