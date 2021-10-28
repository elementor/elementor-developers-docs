# Remove Finder Items

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

Developers can remove specific items from finder categories by using the `elementor/finder/categories` filter hook.

## Removing Items

In the example below, we'll remove the "`post`" item from the "`create`" category:

```php
function remove_elementor_finder_item( array $categories ) {

	unset( $categories['create']['items']['post'] );
	return $categories;

}
add_filter( 'elementor/finder/categories', 'remove_elementor_finder_item' );
```

The `$categories` parameter holds all the categories and their items. We can remove a specific item and return an updated array.
