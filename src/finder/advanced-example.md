# Advanced Example

For a more advanced use-case, we'll replace static links with core WordPress functions, linking to the WordPress dashboard settings panels.

## Folder Structure

The addon will have four files. Two index files to prevent direct access to files, one file for the finder category and the main file to register the class:

```
elementor-finder-wordpress-settings/
|
├─ finder/
|  ├─ index.php
|  └─ wordpress-settings.php
|
├─ index.php
└─ elementor-finder-wordpress-settings.php
```

## Plugin Files

**index.php**

```php
<?php
// Silence is golden.
```

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
 * Elementor tested up to: 3.3.0
 * Elementor Pro tested up to: 3.3.0
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
 * @param \Elementor\Core\Common\Modules\Finder\Categories_Manager $categories_manager.
 * @return void
 */
function elementor_finder_wordpress_settings( $categories_manager ) {

	require_once( __DIR__ . '/finder/wordpress-settings.php' );

	$categories_manager->add_category( 'wordpress-settings', new Elementor_Finder_WordPress_Settings() );

};
add_action( 'elementor/finder/categories/init', 'elementor_finder_wordpress_settings' );
```

**finder/index.php**

```php
<?php
// Silence is golden.
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
	 * Get finder category title.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Finder category title.
	 */
	public function get_title() {
		return __( 'WordPress Settings', 'elementor-finder-wordpress-settings' );
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
				'title' => __( 'General', 'elementor-finder-wordpress-settings' ),
				'icon' => 'wordpress',
				'url' => admin_url( 'options-general.php' ),
				'keywords' => [ 'wordpress', 'dashboard', 'general', 'settings' ],
			],
			'writing' => [
				'title' => __( 'Writing', 'elementor-finder-wordpress-settings' ),
				'icon' => 'edit',
				'url' => admin_url( 'options-writing.php' ),
				'keywords' => [ 'wordpress', 'dashboard', 'writing', 'settings' ],
			],
			'reading' => [
				'title' => __( 'Reading', 'elementor-finder-wordpress-settings' ),
				'icon' => 'post-content',
				'url' => admin_url( 'options-reading.php' ),
				'keywords' => [ 'wordpress', 'dashboard', 'reading', 'settings' ],
			],
			'discussion' => [
				'title' => __( 'Discussion', 'elementor-finder-wordpress-settings' ),
				'icon' => 'comments',
				'url' => admin_url( 'options-discussion.php' ),
				'keywords' => [ 'wordpress', 'dashboard', 'discussion', 'settings' ],
			],
			'media' => [
				'title' => __( 'Media', 'elementor-finder-wordpress-settings' ),
				'icon' => 'image',
				'url' => admin_url( 'options-media.php' ),
				'keywords' => [ 'wordpress', 'dashboard', 'media', 'settings' ],
			],
			'permalink' => [
				'title' => __( 'Permalink', 'elementor-finder-wordpress-settings' ),
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
