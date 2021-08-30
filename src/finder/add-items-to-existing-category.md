# Add Items to an Existing Category

In some cases, developers would like to add new items to existing finder categories. You can do that using the `elementor/finder/categories` filter hook.

## Add Items

In the example below, the developer is adding the `theme-template` item to the `create` category. This will allow the users to easily add new theme templates:

```php
public function add_new_finder_items( array $categories ) {

	$categories['create']['items']['theme-template'] = [
		'title' => __( 'Add New Theme Template', 'plugin-name' ),
		'icon' => 'plus-circle-o',
		'url' => $this->get_admin_templates_url() . '#add_new',
		'keywords' => [ 'template', 'theme', 'new', 'create' ],
	];
	return $categories;

}
add_filter( 'elementor/finder/categories', 'add_new_finder_items' );
```

The filter hook accepts the `$categories` parameter, which is basically an array of finder categories. We can filter categories from this array and return an updated array.
