# Remove Finder Categories

Developers can remove an entire Finder category with all its items. It can be achieved using the `elementor/finder/categories` filter hook.

## Removing Categories

To remove the "`edit`" category, for example, we will use the following code:

```php
function remove_elementor_finder_category( array $categories ) {

	unset( $categories['edit'] );
	return $categories;

}
add_filter( 'elementor/finder/categories', 'remove_elementor_finder_category' );
```

The filter hook accepts the `$categories` parameter, which is basically an array of Finder categories. We can filter categories from this array and return an updated array.
