# Advanced Example

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

For a more advanced use-case, we'll replace static links with core WordPress functions, linking to the WordPress dashboard settings panels.

## Folder Structure

The addon will have two files. One file for the finder category and the other main file to register the class.

```
elementor-finder-wordpress-settings/
|
├─ finder/
|  └─ wordpress-settings.php
|
└─ elementor-finder-wordpress-settings.php
```

## Plugin Files

**elementor-finder-wordpress-settings.php**

```php
<?php
/**
 * Plugin Name: Elementor Finder WordPress Settings
 * Description: Custom WordPress settings links in Elementor Finder.
 * Plugin URI:  https://elementor.com/
 * Version:     1.0.0
 * Author:      Elementor Developer
 * Author URI:  https://developers.elementor.com/
 * Text Domain: elementor-finder-wordpress-settings
 *
 * Elementor tested up to: 3.5.0
 * Elementor Pro tested up to: 3.5.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Add custom Finder categories.
 *
 * Include finder file and register the class.
 *
 * @since 1.0.0
 * @param \Elementor\Core\Common\Modules\Finder\Categories_Manager $finder_categories_manager.
 * @return void
 */
function elementor_finder_wordpress_settings( $finder_categories_manager ) {

	require_once( __DIR__ . '/finder/wordpress-settings.php' );

	$finder_categories_manager->register( new Elementor_Finder_WordPress_Settings() );

};
add_action( 'elementor/finder/register', 'elementor_finder_wordpress_settings' );
```

**finder/social-media.php**

```php
<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Elementor Finder - WordPress Settings
 *
 * Provides searchable items related to WordPress settings.
 */
class Elementor_Finder_WordPress_Settings extends \Elementor\Core\Common\Modules\Finder\Base_Category {

	/**
	 * Get finder category id.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Finder category id.
	 */
	public function get_id() {
		return 'wordpress-settings';
	}

	/**
	 * Get finder category title.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Finder category title.
	 */
	public function get_title() {
		return esc_html__( 'WordPress Settings', 'elementor-finder-wordpress-settings' );
	}

	/**
	 * Get finder category items.
	 *
	 * @since 1.0.0
	 * @access public
	 * @param array $options
	 * @return array An array of category items.
	 */
	public function get_category_items( array $options = [] ) {
		return [
			'general' => [
				'title' => esc_html__( 'General', 'elementor-finder-wordpress-settings' ),
				'icon' => 'wordpress',
				'url' => admin_url( 'options-general.php' ),
				'keywords' => [ 'wordpress', 'dashboard', 'general', 'settings' ],
			],
			'writing' => [
				'title' => esc_html__( 'Writing', 'elementor-finder-wordpress-settings' ),
				'icon' => 'edit',
				'url' => admin_url( 'options-writing.php' ),
				'keywords' => [ 'wordpress', 'dashboard', 'writing', 'settings' ],
			],
			'reading' => [
				'title' => esc_html__( 'Reading', 'elementor-finder-wordpress-settings' ),
				'icon' => 'post-content',
				'url' => admin_url( 'options-reading.php' ),
				'keywords' => [ 'wordpress', 'dashboard', 'reading', 'settings' ],
			],
			'discussion' => [
				'title' => esc_html__( 'Discussion', 'elementor-finder-wordpress-settings' ),
				'icon' => 'comments',
				'url' => admin_url( 'options-discussion.php' ),
				'keywords' => [ 'wordpress', 'dashboard', 'discussion', 'settings' ],
			],
			'media' => [
				'title' => esc_html__( 'Media', 'elementor-finder-wordpress-settings' ),
				'icon' => 'image',
				'url' => admin_url( 'options-media.php' ),
				'keywords' => [ 'wordpress', 'dashboard', 'media', 'settings' ],
			],
			'permalink' => [
				'title' => esc_html__( 'Permalink', 'elementor-finder-wordpress-settings' ),
				'icon' => 'editor-link',
				'url' => admin_url( 'options-permalink.php' ),
				'keywords' => [ 'wordpress', 'dashboard', 'permalink', 'settings' ],
			],
		];
	}

}
```

## The Result

![Elementor Finder WordPress Settings](/assets/img/elementor-finder-wordPress-settings.png)
