# Registering Finder Categories

When you create new [Finder Categories](/finder/) you need to register them to let the **Finder Categories Manager** know them. The registration process is done by hooking to the `elementor/finder/categories/init` action hook.

## Registering New Finder Categories

To register new finder categories use the following code:

```php
function register_new_finder_categories( $categories_manager ) {

	require_once( __DIR__ . '/finder/finder-1.php' );
	require_once( __DIR__ . '/finder/finder-2.php' );

	$categories_manager->add_category( 'finder-category-1', new Elementor_Finder_Category_1() );
	$categories_manager->add_category( 'finder-category-2', new Elementor_Finder_Category_2() );

}
add_action( 'elementor/finder/categories/init', 'register_new_finder_categories' );
```

We hook to the `elementor/finder/categories/init` action hook that holds `$categories_manager` parameter and pass a callback function that imports the new finder files and then registers them with the finder categories manager.
