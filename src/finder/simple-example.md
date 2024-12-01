# Simple Example

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

To see how easy it is to extend the finder, we are going to create a very simple finder category with static links to social media websites.

## Folder Structure

The addon will have two files. One file for the finder category and a main file to register the class.

```
elementor-finder-social-media/
|
├─ finder/
|  └─ social-media.php
|
└─ elementor-finder-social-media.php
```

## Plugin Files

**elementor-finder-social-media.php**

```php
<?php
/**
 * Plugin Name: Elementor Finder Social Media
 * Description: Custom Social Media links in Elementor Finder.
 * Plugin URI:  https://elementor.com/
 * Version:     1.0.0
 * Author:      Elementor Developer
 * Author URI:  https://developers.elementor.com/
 * Text Domain: elementor-finder-social-media
 *
 * Requires Plugins: elementor
 * Elementor tested up to: 3.24.0
 * Elementor Pro tested up to: 3.24.0
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
function elementor_finder_social_media( $finder_categories_manager ) {

	require_once( __DIR__ . '/finder/social-media.php' );

	$finder_categories_manager->register( new Elementor_Finder_Social_Media() );

};
add_action( 'elementor/finder/register', 'elementor_finder_social_media' );
```

**finder/social-media.php**

```php
<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Elementor Finder - Social Media
 *
 * Provides searchable items to social media websites.
 */
class Elementor_Finder_Social_Media extends \Elementor\Core\Common\Modules\Finder\Base_Category {

	/**
	 * Get finder category id.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Finder category id.
	 */
	public function get_id(): string {
		return 'social-media';
	}

	/**
	 * Get finder category title.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Finder category title.
	 */
	public function get_title(): string {
		return esc_html__( 'Social Media Websites', 'elementor-finder-social-media' );
	}

	/**
	 * Get finder category items.
	 *
	 * @since 1.0.0
	 * @access public
	 * @param array $options
	 * @return array An array of category items.
	 */
	public function get_category_items( array $options = [] ): array {
		return [
			'facebook' => [
				'title' => esc_html__( 'Facebook', 'elementor-finder-social-media' ),
				'icon' => 'facebook',
				'url' => 'https://facebook.com/',
				'keywords' => [ 'facebook', 'social', 'media' ],
			],
			'twitter' => [
				'title' => esc_html__( 'Twitter', 'elementor-finder-social-media' ),
				'icon' => 'twitter',
				'url' => 'https://twitter.com/',
				'keywords' => [ 'twitter', 'social', 'media' ],
			],
			'pinterest' => [
				'title' => esc_html__( 'Pinterest', 'elementor-finder-social-media' ),
				'icon' => 'pinterest',
				'url' => 'https://www.pinterest.com/',
				'keywords' => [ 'pinterest', 'social', 'media' ],
			],
		];
	}

}
```

## The Result

<img :src="$withBase('/assets/img/elementor-finder-social-media.png')" alt="Elementor Finder Social Media">
