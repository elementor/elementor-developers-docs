# Remove Finder Categories

Developers can use the `elementor/finder/categories` filter hook to remove entire finder categories along with all their items. 

## Removing Categories

In the example below, we'll remove the "`edit`" category: 

```php
function remove_elementor_finder_category( array $categories ) {

	unset( $categories['edit'] );
	return $categories;

}
add_filter( 'elementor/finder/categories', 'remove_elementor_finder_category' );
```

The filter hook accepts the `$categories` parameter, which is basically an array of finder categories. We can filter categories from this array and return an updated array.
