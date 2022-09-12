# Simple Example

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

To demonstrate how easy it is to extend theme conditions, we're going to create an addon that registers a condition which will check to see if a visitor is logged-in. This addon will help Elementor users display some templates to logged-in visitors and other templates to anonymous visitors.

## Folder Structure

The addon will have two files. One file for the logged-in user condition and the main file, which will register the condition and handle all the other stuff.

```
elementor-logged-in-user-condition/
|
├─ theme-conditions/
|  └─ logged-in-user-condition.php
|
└─ elementor-logged-in-user-condition.php
```

## Plugin Files

**elementor-logged-in-user-condition.php**

```php
<?php
/**
 * Plugin Name: Elementor Logged-In User Condition
 * Description: Custom addon that adds a logged-in user condition to Elementor.
 * Plugin URI:  https://elementor.com/
 * Version:     1.0.0
 * Author:      Elementor Developer
 * Author URI:  https://developers.elementor.com/
 * Text Domain: elementor-logged-in-user-condition
 *
 * Elementor tested up to: 3.7.0
 * Elementor Pro tested up to: 3.7.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Add a logged-in user condition to Elementor.
 *
 * @since 1.0.0
 * @param \ElementorPro\Modules\ThemeBuilder\Classes\Conditions_Manager $conditions_manager An instance of conditions manager.
 * @return void
 */
function add_new_logged_in_user_condition( $conditions_manager ) {

	require_once( __DIR__ . '/theme-conditions/logged-in-user-condition.php' );

	$conditions_manager->get_condition( 'general' )->register_sub_condition( new \Logged_In_User_Condition() );

}
add_action( 'elementor/theme/register_conditions', 'add_new_logged_in_user_condition' );
```

**theme-conditions/logged-in-user-condition.php**

```php
<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Elementor Logged-In User Condition.
 *
 * Add a logged-in user condition to Elementor.
 *
 * @since 1.0.0
 */
class Logged_In_User_Condition extends \ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base {

	/**
	 * Get condition group type.
	 *
	 * Retrieve logged-in user condition group type.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string
	 */
	public static function get_type() {
		return 'general';
	}

	/**
	 * Get condition name.
	 *
	 * Retrieve logged-in user condition unique ID.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string
	 */
	public function get_name() {
		return 'logged_in_user';
	}

	/**
	 * Get condition label.
	 *
	 * Retrieve logged-in user condition label.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string
	 */
	public function get_label() {
		return esc_html__( 'Logged-in user', 'elementor-logged-in-user-condition' );
	}

	/**
	 * Check condition.
	 *
	 * Validate logged-in user condition to ensure it complies with certain rules.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return bool
	 */
	public function check( $args ) {
		return is_user_logged_in();
	}

}
```

## The Result

The "Logged-In User" condition as displayed on the conditions screen:

<img :src="$withBase('/assets/img/elementor-theme-conditions-example-logged-in-user.png')" alt="Logged-In User Condition">
