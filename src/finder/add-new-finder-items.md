# Add New Finder Items

For each new item (link) we add to the finder, we need to define several fields. This includes the label, the URL, the icon, etc. All these links are grouped together in an array and returned together.

## New Category

Finder categories include all the category labels and their items.

```php
class New_Finder_Category extends \Elementor\Core\Common\Modules\Finder\Base_Category {

	public function get_title() {
		return __( 'Category Label', 'plugin-name' );
	}

	public function get_category_items( array $options = [] ) {
		return [
			'elementor-website' => [
				'title' => __( 'Elementor', 'plugin-name' ),
				'icon' => 'elementor',
				'url' => 'https://elementor.com/',
				'keywords' => [ 'elementor', 'website' ],
			],
			'wordpress-website' => [
				'title' => __( 'WordPress', 'plugin-name' ),
				'icon' => 'wordpress',
				'url' => 'https://wordpress.org/',
				'keywords' => [ 'wordpress', 'website' ],
			],
		];
	}

}
```

Each item has to include the following properties:

  * **name** – Used to define the ID in the `$items` array (Required).
  * **title** – Used to define the label displayed to the user (Required).
  * **icon** – Used to define the icon displayed before the title/label.
  * **url** – Used to define the URL (Required).
  * **keywords** – Used to define relevant search keywords.

## Registering a Finder Category

When the finder category class is ready, we must add it to the categories manager. This is done using the `elementor/finder/categories/init` action hook.

When adding a new category, we need to provide a unique ID and the class itself, with this code:

```php
function register_new_finder_category( $categories_manager ) {

	$categories_manager->add_category( 'my-category-name', new New_Finder_Category() );

};
add_action( 'elementor/finder/categories/init', 'register_new_finder_category' );
```
