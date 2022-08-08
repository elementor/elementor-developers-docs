# Simple Example

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

To put it all together, we're going to create a simple dynamic tag which will return a random number. To simplify the example, this dynamic tag won't have controls. But you can enhance the code and add two controls for minimum and maximum limits.

## Folder Structure

The addon will have two files. The dynamic tag with its functionality. And the main file will register the tag.

```
elementor-random-number-dynamic-tag/
|
├─ dynamic-tags/
|  └─ random-number-dynamic-tag.php
|
└─ elementor-random-number-dynamic-tag.php
```

## Plugin Files

**elementor-random-number-dynamic-tag.php**

```php
<?php
/**
 * Plugin Name: Elementor Random Number Dynamic Tag
 * Description: Add dynamic tag that returns a random number.
 * Plugin URI:  https://elementor.com/
 * Version:     1.0.0
 * Author:      Elementor Developer
 * Author URI:  https://developers.elementor.com/
 * Text Domain: elementor-random-number-dynamic-tag
 *
 * Elementor tested up to: 3.7.0
 * Elementor Pro tested up to: 3.7.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Register Random Number Dynamic Tag.
 *
 * Include dynamic tag file and register tag class.
 *
 * @since 1.0.0
 * @param \Elementor\Core\DynamicTags\Manager $dynamic_tags_manager Elementor dynamic tags manager.
 * @return void
 */
function register_random_number_dynamic_tag( $dynamic_tags_manager ) {

	require_once( __DIR__ . '/dynamic-tags/random-number-dynamic-tag.php' );

	$dynamic_tags_manager->register( new \Elementor_Dynamic_Tag_Random_Number );

}
add_action( 'elementor/dynamic_tags/register', 'register_random_number_dynamic_tag' );
```

**dynamic-tags/random-number-dynamic-tag.php**

```php
<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Elementor Dynamic Tag - Random Number
 *
 * Elementor dynamic tag that returns a random number.
 *
 * @since 1.0.0
 */
class Elementor_Dynamic_Tag_Random_Number extends \Elementor\Core\DynamicTags\Tag {

	/**
	 * Get dynamic tag name.
	 *
	 * Retrieve the name of the random number tag.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Dynamic tag name.
	 */
	public function get_name() {
		return 'random-number';
	}

	/**
	 * Get dynamic tag title.
	 *
	 * Returns the title of the random number tag.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Dynamic tag title.
	 */
	public function get_title() {
		return esc_html__( 'Random Number', 'elementor-random-number-dynamic-tag' );
	}

	/**
	 * Get dynamic tag groups.
	 *
	 * Retrieve the list of groups the random number tag belongs to.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return array Dynamic tag groups.
	 */
	public function get_group() {
		return [ 'actions' ];
	}

	/**
	 * Get dynamic tag categories.
	 *
	 * Retrieve the list of categories the random number tag belongs to.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return array Dynamic tag categories.
	 */
	public function get_categories() {
		return [ \Elementor\Modules\DynamicTags\Module::NUMBER_CATEGORY ];
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
		echo rand();
	}

}
```
