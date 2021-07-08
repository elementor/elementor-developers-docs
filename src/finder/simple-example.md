# Simple Example

To see how simple it is to extend the finder, we are going to create a very simple Finder category with static links to social media websites.

## The Code

```php
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
		return __( 'Social Media Websites', 'plugin-name' );
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
				'title' => __( 'Facebook', 'plugin-name' ),
				'icon' => 'facebook',
				'url' => 'https://facebook.com/',
				'keywords' => [ 'facebook', 'social', 'media' ],
			],
			'twitter' => [
				'title' => __( 'Twitter', 'plugin-name' ),
				'icon' => 'twitter',
				'url' => 'https://twitter.com/',
				'keywords' => [ 'twitter', 'social', 'media' ],
			],
			'linkedin' => [
				'title' => __( 'LinkedIn', 'plugin-name' ),
				'icon' => 'linkedin',
				'url' => 'https://linkedin.com/',
				'keywords' => [ 'linkedin', 'search' ],
			],
		];
	}

}

/**
 * Add custom Finder categories.
 *
 * @since 1.0.0
 * @param \Elementor\Core\Common\Modules\Finder\Categories_Manager $categories_manager.
 */
function elementor_finder_social_media( $categories_manager ) {

	$categories_manager->add_category(
		'social-media',
		new Elementor_Finder_Social_Media()
	);

};
add_action( 'elementor/finder/categories/init', 'elementor_finder_social_media' );
```
