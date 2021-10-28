# Complex Example

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

To showcase a complex dynamic tag, we are going to allow the user to display server variables from a list of available server variables. It will include a custom [dynamic tags group](./dynamic-tags-groups) and feature a control with a select box containing all the available server variables. The render function will return the variable the user selected and return its value.

## Folder Structure

The addon will have two files. The dynamic tag with its functionality. And the main file will register the tag and tags group.

```
elementor-server-variable-dynamic-tag/
|
├─ dynamic-tags/
|  └─ server-variable-dynamic-tag.php
|
└─ elementor-server-variable-dynamic-tag.php
```

## Plugin Files

**elementor-server-variable-dynamic-tag.php**

```php
<?php
/**
 * Plugin Name: Elementor Server Variable Dynamic Tag
 * Description: Add dynamic tag that returns an server variable.
 * Plugin URI:  https://elementor.com/
 * Version:     1.0.0
 * Author:      Elementor Developer
 * Author URI:  https://developers.elementor.com/
 * Text Domain: elementor-server-variable-dynamic-tag
 *
 * Elementor tested up to: 3.5.0
 * Elementor Pro tested up to: 3.5.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Register Request Variables Dynamic Tag Group.
 *
 * Register new dynamic tag group for Request Variables.
 *
 * @since 1.0.0
 * @return void
 */
function register_request_variables_dynamic_tag_group( $dynamic_tags ) {

	\Elementor\Plugin::instance()->dynamic_tags->register_group(
		'request-variables',
		[
			'title' => esc_html__( 'Request Variables', 'plugin-name' )
		]
	);

}
add_action( 'elementor/dynamic_tags/register_tags', 'register_request_variables_dynamic_tag_group' );

/**
 * Register Server Variable Dynamic Tag.
 *
 * Include dynamic tag file and register tag class.
 *
 * @since 1.0.0
 * @return void
 */
function register_server_variable_dynamic_tag( $dynamic_tags ) {

	require_once( __DIR__ . '/dynamic-tags/server-variable-dynamic-tag.php' );

	$dynamic_tags->register_tag( 'Elementor_Dynamic_Tag_Server_Variable' );

}
add_action( 'elementor/dynamic_tags/register_tags', 'register_server_variable_dynamic_tag' );
```

**dynamic-tags/server-variable-dynamic-tag.php**

```php
<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Elementor Dynamic Tag - Server Variable
 *
 * Elementor dynamic tag that returns a server variable.
 *
 * @since 1.0.0
 */
Class Elementor_Dynamic_Tag_Server_Variable extends \Elementor\Core\DynamicTags\Tag {

	/**
	 * Get dynamic tag name.
	 *
	 * Retrieve the name of the server variable tag.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Dynamic tag name.
	 */
	public function get_name() {
		return 'server-variable';
	}

	/**
	 * Get dynamic tag title.
	 *
	 * Returns the title of the server variable tag.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Dynamic tag title.
	 */
	public function get_title() {
		return esc_html__( 'Server Variable', 'plugin-name' );
	}

	/**
	 * Get dynamic tag groups.
	 *
	 * Retrieve the list of groups the server variable tag belongs to.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return array Dynamic tag groups.
	 */
	public function get_group() {
		return [ 'request-variables' ];
	}

	/**
	 * Get dynamic tag categories.
	 *
	 * Retrieve the list of categories the server variable tag belongs to.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return array Dynamic tag categories.
	 */
	public function get_categories() {
		return [ \Elementor\Modules\DynamicTags\Module::TEXT_CATEGORY ];
	}

	/**
	 * Register dynamic tag controls.
	 *
	 * Add input fields to allow the user to customize the server variable tag settings.
	 *
	 * @since 1.0.0
	 * @access protected
	 * @return void
	 */
	protected function register_controls() {
		$variables = [];

		foreach ( array_keys( $_SERVER ) as $variable ) {
			$variables[ $variable ] = ucwords( str_replace( '_', ' ', $variable ) );
		}

		$this->add_control(
			'user_selected_variable',
			[
				'type' => \Elementor\Controls_Manager::SELECT,
				'label' => esc_html__( 'Variable', 'plugin-name' ),
				'options' => $variables,
			]
		);
	}

	/**
	 * Render tag output on the frontend.
	 *
	 * Written in PHP and used to generate the final HTML.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return void
	 */
	public function render() {
		$user_selected_variable = $this->get_settings( 'user_selected_variable' );

		if ( ! $user_selected_variable ) {
			return;
		}

		if ( ! isset( $_SERVER[ $user_selected_variable ] ) ) {
			return;
		}

		$value = $_SERVER[ $user_selected_variable ];
		echo wp_kses_post( $value );
	}

}
```

## The Result

The dynamic tag in a group view:

![Dynamic tag example - groups](/assets/img/elementor-dynamic-tag-example-server-variable-groups.png)

The dynamic tag controls:

![Dynamic tag example - controls](/assets/img/elementor-dynamic-tag-example-server-variable-controls.png)
