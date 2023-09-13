# Simple Example

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

To demonstrate how easy it is to create new form actions, we're going to create an addon which will ping an external server.

## Folder Structure

The addon will have two files. One file for the new form action and a main file to register the action and handle all the other stuff.

```
elementor-forms-ping-action/
|
├─ form-actions/
|  └─ ping.php
|
└─ elementor-forms-ping-action.php
```

## Plugin Files


**elementor-forms-ping-action.php**

```php
<?php
/**
 * Plugin Name: Elementor Forms Ping Action
 * Description: Custom addon which will ping an external server.
 * Plugin URI:  https://elementor.com/
 * Version:     1.0.0
 * Author:      Elementor Developer
 * Author URI:  https://developers.elementor.com/
 * Text Domain: elementor-forms-ping-action
 *
 * Elementor tested up to: 3.16.0
 * Elementor Pro tested up to: 3.16.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Add new form action after form submission.
 *
 * @since 1.0.0
 * @param ElementorPro\Modules\Forms\Registrars\Form_Actions_Registrar $form_actions_registrar
 * @return void
 */
function add_new_ping_action( $form_actions_registrar ) {

	include_once( __DIR__ .  '/form-actions/ping.php' );

	$form_actions_registrar->register( new \Ping_Action_After_Submit() );

}
add_action( 'elementor_pro/forms/actions/register', 'add_new_ping_action' );
```

**form-actions/ping.php**

```php
<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Elementor form ping action.
 *
 * Custom Elementor form action which will ping an external server.
 *
 * @since 1.0.0
 */
class Ping_Action_After_Submit extends \ElementorPro\Modules\Forms\Classes\Action_Base {

	/**
	 * Get action name.
	 *
	 * Retrieve ping action name.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string
	 */
	public function get_name() {
		return 'ping';
	}

	/**
	 * Get action label.
	 *
	 * Retrieve ping action label.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string
	 */
	public function get_label() {
		return esc_html__( 'Ping', 'elementor-forms-ping-action' );
	}

	/**
	 * Run action.
	 *
	 * Ping an external server after form submission.
	 *
	 * @since 1.0.0
	 * @access public
	 * @param \ElementorPro\Modules\Forms\Classes\Form_Record  $record
	 * @param \ElementorPro\Modules\Forms\Classes\Ajax_Handler $ajax_handler
	 */
	public function run( $record, $ajax_handler ) {

		wp_remote_post(
			'https://api.example.com/',
			[
				'method' => 'GET',
				'headers' => [
					'Content-Type' => 'application/json',
				],
				'body' => wp_json_encode([
					'site' => get_home_url(),
					'action' => 'Form submitted',
				]),
				'httpversion' => '1.0',
				'timeout' => 60,
			]
		);

	}

	/**
	 * Register action controls.
	 *
	 * Ping action has no input fields to the form widget.
	 *
	 * @since 1.0.0
	 * @access public
	 * @param \Elementor\Widget_Base $widget
	 */
	public function register_settings_section( $widget ) {}

	/**
	 * On export.
	 *
	 * Ping action has no fields to clear when exporting.
	 *
	 * @since 1.0.0
	 * @access public
	 * @param array $element
	 */
	public function on_export( $element ) {}

}
```

## The Result

The new "Ping" action inside the "Action After Submit" section:

<img :src="$withBase('/assets/img/elementor-form-actions-example-ping.png')" alt="Elementor Form - Ping Action">
