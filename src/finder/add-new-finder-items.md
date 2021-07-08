# Add New Finder Items

For each new link we add to the Finder we need to define several fields like the label, the URL, the icon etc. All the links are grouped together in an array and returned together.

## Category Name

First we define the category:

```php
class New_Finder_Category extends \Elementor\Core\Common\Modules\Finder\Base_Category {

	public function get_title() {
		return __( 'Some Label', 'plugin-name' );
	}

}
```

## List of Items

Next are the items. Each item have to include the following properties:

* **name** – Used to define the ID in the `$items` array (Required).
  * **title** – Used to define the label displayed to the user (Required).
  * **icon** – Used to define the icon displayed before the title/label.
  * **url** – Used to define the URL (Required).
  * **keywords** – Used to define relevant search keywords.

```php
class New_Finder_Category extends \Elementor\Core\Common\Modules\Finder\Base_Category {

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
