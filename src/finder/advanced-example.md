# Advanced Example

For more advanced use cases we can will replace static links with core WordPress functions linking to WordPress dashboard settings panels.

## The Code

```php
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
		return __( 'WordPress Settings', 'plugin-name' );
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
				'title' => __( 'General', 'plugin-name' ),
				'icon' => 'wordpress',
				'url' => admin_url( 'options-general.php' ),
				'keywords' => [ 'wordpress', 'dashboard', 'general', 'settings' ],
			],
			'writing' => [
				'title' => __( 'Writing', 'plugin-name' ),
				'icon' => 'edit',
				'url' => admin_url( 'options-writing.php' ),
				'keywords' => [ 'wordpress', 'dashboard', 'writing', 'settings' ],
			],
			'reading' => [
				'title' => __( 'Reading', 'plugin-name' ),
				'icon' => 'post-content',
				'url' => admin_url( 'options-reading.php' ),
				'keywords' => [ 'wordpress', 'dashboard', 'reading', 'settings' ],
			],
			'discussion' => [
				'title' => __( 'Discussion', 'plugin-name' ),
				'icon' => 'comments',
				'url' => admin_url( 'options-discussion.php' ),
				'keywords' => [ 'wordpress', 'dashboard', 'discussion', 'settings' ],
			],
			'media' => [
				'title' => __( 'Media', 'plugin-name' ),
				'icon' => 'media',
				'url' => admin_url( 'options-media.php' ),
				'keywords' => [ 'wordpress', 'dashboard', 'media', 'settings' ],
			],
			'permalink' => [
				'title' => __( 'Permalink', 'plugin-name' ),
				'icon' => 'editor-link',
				'url' => admin_url( 'options-permalink.php' ),
				'keywords' => [ 'wordpress', 'dashboard', 'permalink', 'settings' ],
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
function elementor_finder_wordpress_settings( $categories_manager ) {

	$categories_manager->add_category(
		'wordpress-settings',
		new Elementor_Finder_WordPress_Settings()
	);

};
add_action( 'elementor/finder/categories/init', 'elementor_finder_wordpress_settings' );
```
