# Add New Condition

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

Elementor has several builtin consditions, but external developers can create and register new consditions.

## Registering Conditions

To register new conditions you just need to initiate the condition class:

```php
function register_new_theme_conditions( $conditions_manager  ) {

	require_once( __DIR__ . '/theme-conditions/condition-1.php' );
	require_once( __DIR__ . '/theme-conditions/condition-2.php' );

	$conditions_manager->get_condition( 'general' )->register_sub_condition( new \Condition_1() );
	$conditions_manager->get_condition( 'general' )->register_sub_condition( new \Condition_2() );

}
add_action( 'elementor/theme/register_conditions', 'register_new_theme_conditions' );
```

This hooks to the `elementor/theme/register_conditions` action hook which holds the conditions manager. The manager then registers the condition by initiating new condition instances.