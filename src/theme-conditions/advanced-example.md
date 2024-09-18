# Advanced Example

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

For a more advanced use-case, we're going to create an addon that registers conditions based on the role of a logged-in visitor. The addon will help Elementor users to display some templates only to visitors with specific roles.

## Folder Structure

The addon will have three files. Two files for the conditions and the main file to register the condition and handle all the other stuff.

```
elementor-user-role-conditions/
|
├─ theme-conditions/
|  ├─ logged-in-user-condition.php
|  └─ user-role-condition.php
|
└─ elementor-user-role-conditions.php
```

## Plugin Files

**elementor-user-role-conditions.php**

```php
<?php
/**
 * Plugin Name: Elementor User Role Conditions
 * Description: Custom addon that adds user role conditions to Elementor.
 * Plugin URI:  https://elementor.com/
 * Version:     1.0.0
 * Author:      Elementor Developer
 * Author URI:  https://developers.elementor.com/
 * Text Domain: elementor-user-role-conditions
 *
 * Requires Plugins: elementor
 * Elementor tested up to: 3.24.0
 * Elementor Pro tested up to: 3.24.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Add user role conditions to Elementor.
 *
 * @since 1.0.0
 * @param \ElementorPro\Modules\ThemeBuilder\Classes\Conditions_Manager $conditions_manager An instance of conditions manager.
 * @return void
 */
function add_new_user_role_conditions( $conditions_manager ) {

	require_once( __DIR__ . '/theme-conditions/logged-in-user-condition.php' );
	require_once( __DIR__ . '/theme-conditions/user-role-condition.php' );

	$conditions_manager->get_condition( 'general' )->register_sub_condition( new \Logged_In_User_Condition() );
}
add_action( 'elementor/theme/register_conditions', 'add_new_user_role_conditions' );
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
		return esc_html__( 'Logged-in User', 'elementor-user-role-conditions' );
	}

	/**
	 * Get condition all label.
	 *
	 * Retrieve logged-in user condition 'All' label.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string
	 */
	public function get_all_label() {
		return esc_html__( 'Any user role', 'elementor-user-role-conditions' );
	}

	/**
	 * Register sub-conditions.
	 *
	 * Add sub-conditions based on user role.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return void
	 */
	public function register_sub_conditions() {
		global $wp_roles;

		if ( ! isset( $wp_roles ) ) {
			$wp_roles = new \WP_Roles();
		}

		$user_roles_list = $wp_roles->get_names();

		foreach ( $user_roles_list as $role ) {
			$this->register_sub_condition( new \User_Role_Condition( $role ) );
		}
	}

	/**
	 * Check condition.
	 *
	 * Validate logged-in user condition to ensure it complies to certain rules.
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

**theme-conditions/user-role-condition.php**

```php
<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Elementor User Role Conditions.
 *
 * Add a user role conditions to Elementor.
 *
 * @since 1.0.0
 */
class User_Role_Condition extends \ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base {

	/**
	 * Condition constructor.
	 *
	 * Initialize user role condition.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string
	 */
	public function __construct( $user_role ) {
		parent::__construct();

		$this->user_role = $user_role;
	}

	/**
	 * Get condition group type.
	 *
	 * Retrieve user role condition group type.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string
	 */
	public static function get_type() {
		return 'logged_in_user';
	}

	/**
	 * Get condition name.
	 *
	 * Retrieve user role condition unique ID.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string
	 */
	public function get_name() {
		return strtolower( $this->user_role . '_role' );
	}

	/**
	 * Get condition label.
	 *
	 * Retrieve user role condition label.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string
	 */
	public function get_label() {
		/* translators: %s: User role label. */
		return sprintf( esc_html__( '%s role', 'elementor-user-role-conditions' ), $this->user_role );
	}

	/**
	 * Check condition.
	 *
	 * Validate user role condition to ensure it complies to certain rules.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return bool
	 */
	public function check( $args ) {
		$current_user = wp_get_current_user();
		$site_roles = (array) $current_user->roles;
		return in_array( $this->user_role, $site_roles );
	}

}
```

## The Result

The "Logged-In User" > "User Roles" conditions:

<img :src="$withBase('/assets/img/elementor-theme-conditions-example-user-roles.png')" alt="User role conditions">

The "User Roles" list:

<img :src="$withBase('/assets/img/elementor-theme-conditions-example-user-roles-list.png')" alt="The list of user roles">
