# Remove Finder Items

Developers can remove specific items from Finder Categories. It can be achieved using the `elementor/finder/categories` filter hook.

## Removing Items

To remove the "`post`" item from the "`create`" category, we will use the following code:

```php
function remove_elementor_finder_item( array $categories ) {

	unset( $categories['create']['items']['post'] );
	return $categories;

}
add_filter( 'elementor/finder/categories', 'remove_elementor_finder_item' );
```

The `$categories` parameter holds all the categories and their items. We can remove a specific item and return an updated array.
