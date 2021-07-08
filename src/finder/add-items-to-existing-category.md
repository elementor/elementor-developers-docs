# Add Items to Existing Category

In some cases you would like to add new items to existing Finder categories. You can do that using the `elementor/finder/categories` filter hook.

## Add Items

To add a new items to an existing category, for example we would like to allow the user to add new theme templates we will add the `theme-template` item to the `create` category as follows:

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

The filter hook accepts the `$categories` parameter, which is basically an array of Finder categories. We can filter categories from this array and return an updated array.
