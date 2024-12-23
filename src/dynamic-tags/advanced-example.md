# Advanced Example

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

This more advanced example will include the use of custom fields, and controls where the user can set fields. The tag will calculate the average of those fields and include a single control where the user can set a comma-separated list of ACF field IDs.

## Folder Structure

The addon will have two files. The dynamic tag with its functionality. And the main file will register the tag and tags group.

```
elementor-acf-average-dynamic-tag/
|
├─ dynamic-tags/
|  └─ acf-average-dynamic-tag.php
|
└─ elementor-acf-average-dynamic-tag.php
```

## Plugin Files

**elementor-acf-average-dynamic-tag.php**

```php
<?php
/**
 * Plugin Name: Elementor ACF Average Dynamic Tag
 * Description: Add dynamic tag that returns an ACF average.
 * Plugin URI:  https://elementor.com/
 * Version:     1.0.0
 * Author:      Elementor Developer
 * Author URI:  https://developers.elementor.com/
 * Text Domain: elementor-acf-average-dynamic-tag
 *
 * Requires Plugins: elementor
 * Elementor tested up to: 3.25.0
 * Elementor Pro tested up to: 3.25.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Register New Dynamic Tag Group.
 *
 * Register new site group for site-related tags.
 *
 * @since 1.0.0
 * @param \Elementor\Core\DynamicTags\Manager $dynamic_tags_manager Elementor dynamic tags manager.
 * @return void
 */
function register_site_dynamic_tag_group( $dynamic_tags_manager ) {

	$dynamic_tags_manager->register_group(
		'site',
		[
			'title' => esc_html__( 'Site', 'elementor-acf-average-dynamic-tag' )
		]
	);

}
add_action( 'elementor/dynamic_tags/register', 'register_site_dynamic_tag_group' );

/**
 * Register ACF Average Dynamic Tag.
 *
 * Include dynamic tag file and register tag class.
 *
 * @since 1.0.0
 * @param \Elementor\Core\DynamicTags\Manager $dynamic_tags_manager Elementor dynamic tags manager.
 * @return void
 */
function register_acf_average_dynamic_tag( $dynamic_tags_manager ) {

	require_once( __DIR__ . '/dynamic-tags/acf-average-dynamic-tag.php' );

	$dynamic_tags_manager->register( new \Elementor_Dynamic_Tag_ACF_Average );

}
add_action( 'elementor/dynamic_tags/register', 'register_acf_average_dynamic_tag' );
```

**dynamic-tags/acf-average-dynamic-tag.php**

```php
<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Elementor Dynamic Tag - ACF Average
 *
 * Elementor dynamic tag that returns an ACF average.
 *
 * @since 1.0.0
 */
class Elementor_Dynamic_Tag_ACF_Average extends \Elementor\Core\DynamicTags\Tag {

	/**
	 * Get dynamic tag name.
	 *
	 * Retrieve the name of the ACF average tag.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Dynamic tag name.
	 */
	public function get_name(): string {
		return 'acf-average';
	}

	/**
	 * Get dynamic tag title.
	 *
	 * Returns the title of the ACF average tag.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Dynamic tag title.
	 */
	public function get_title(): string {
		return esc_html__( 'ACF Average', 'elementor-acf-average-dynamic-tag' );
	}

	/**
	 * Get dynamic tag groups.
	 *
	 * Retrieve the list of groups the ACF average tag belongs to.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return array Dynamic tag groups.
	 */
	public function get_group(): array {
		return [ 'site' ];
	}

	/**
	 * Get dynamic tag categories.
	 *
	 * Retrieve the list of categories the ACF average tag belongs to.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return array Dynamic tag categories.
	 */
	public function get_categories(): array {
		return [ \Elementor\Modules\DynamicTags\Module::TEXT_CATEGORY ];
	}

	/**
	 * Register dynamic tag controls.
	 *
	 * Add input fields to allow the user to customize the ACF average tag settings.
	 *
	 * @since 1.0.0
	 * @access protected
	 * @return void
	 */
	protected function register_controls(): void {
		$this->add_control(
			'fields',
			[
				'label' => esc_html__( 'Fields', 'elementor-acf-average-dynamic-tag' ),
				'type' => 'text',
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
	public function render(): void {
		$fields = $this->get_settings( 'fields' );
		$sum = 0;
		$count = 0;
		$value = 0;

		// Make sure that ACF if installed and activated
		if ( ! function_exists( 'get_field' ) ) {
			echo 0;
			return;
		}

		foreach ( explode( ',', $fields ) as $index => $field_name ) {
			$field = get_field( $field_name );
			if ( (int) $field > 0 ) {
				$sum += (int) $field;
				$count++;
			}
		}

		if ( 0 !== $count ) {
			$value = $sum / $count;
		}

		echo $value;
	}

}
```

## The Result

The dynamic tag in a group view:

<img :src="$withBase('/assets/img/elementor-dynamic-tag-example-acf-average-groups.png')" alt="Dynamic tag example - group view">

The dynamic tag controls:

<img :src="$withBase('/assets/img/elementor-dynamic-tag-example-acf-average-controls.png')" alt="Dynamic tag example - controls">
