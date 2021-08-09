# Simple Example

To see how simple it is to extend the finder, we are going to create a very simple Finder category with static links to social media websites.

## Folder Structure

The addon will have four files. Two index files to prevent direct access to files, one file for the finder category and the main file to register the class.

```
elementor-finder-social-media/
|
├─ finder/
|  ├─ index.php
|  └─ social-media.php
|
├─ index.php
└─ elementor-finder-social-media.php
```

## Plugin Files

**index.php**

```php
<?php
// Silence is golden.
```

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
function elementor_finder_social_media( $categories_manager ) {

	require_once( __DIR__ . '/finder/social-media.php' );

	$categories_manager->add_category( 'social-media', new Elementor_Finder_Social_Media() );

};
add_action( 'elementor/finder/categories/init', 'elementor_finder_social_media' );
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
 * Elementor Finder - Social Media
 *
 * Provides searchable items to social media websites.
 */
class Elementor_Finder_Social_Media extends \Elementor\Core\Common\Modules\Finder\Base_Category {

	/**
	 * Get finder category title.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Finder category title.
	 */
	public function get_title() {
		return __( 'Social Media Websites', 'elementor-finder-social-media' );
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
			'facebook' => [
				'title' => __( 'Facebook', 'elementor-finder-social-media' ),
				'icon' => 'facebook',
				'url' => 'https://facebook.com/',
				'keywords' => [ 'facebook', 'social', 'media' ],
			],
			'twitter' => [
				'title' => __( 'Twitter', 'elementor-finder-social-media' ),
				'icon' => 'twitter',
				'url' => 'https://twitter.com/',
				'keywords' => [ 'twitter', 'social', 'media' ],
			],
			'pinterest' => [
				'title' => __( 'Pinterest', 'elementor-finder-social-media' ),
				'icon' => 'pinterest',
				'url' => 'https://www.pinterest.com/',
				'keywords' => [ 'pinterest', 'social', 'media' ],
			],
		];
	}

}
```

## The Result

![Elementor Finder Social Media](/assets/img/elementor-finder-social-media.png)
