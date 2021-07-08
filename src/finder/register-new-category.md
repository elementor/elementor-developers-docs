# Register New Category

When the Finder category class is ready, you need to add it to the categories manager. We do that using `elementor/finder/categories/init` action hook.

## Registering Finder Category

When we add a new category, we need to provide the a unique ID and the class itself, the following way:

```php
function my_custom_finder_category( $categories_manager ) {

	include_once( 'path/to/category/class/file' );

	$categories_manager->add_category(
		'my-category-name',
		new New_Finder_Category()
	);

};
add_action( 'elementor/finder/categories/init', 'my_custom_finder_class' );
```

If the class is saved in a separate file we need to include it (see the `include_once()` function in the code above). If the class is in the same file, the include function can be removed.
