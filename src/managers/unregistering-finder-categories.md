# Unregistering Finder Categories

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Developers can remove [finder categories](./../finder/) from the list of registered categories. This is done by hooking to the finder categories manager and unregistering specific category by passing the category name.

## Unregistering Existing Finder Categories

As of Elementor 3.6, developers should use the following code to unregister existing categories:

```php
/**
 * Unregister Elementor finder categories.
 *
 * @param \Elementor\Core\Common\Modules\Finder\Categories_Manager $finder_categories_manager Elementor finder categories manager.
 * @return void
 */
function unregister_finder_categories( $finder_categories_manager ) {

	$finder_categories_manager->unregister( 'finder-category-1' );
	$finder_categories_manager->unregister( 'finder-category-2' );

}
add_action( 'elementor/finder/register', 'unregister_finder_categories' );
```

This hooks to the `elementor/finder/register` action hook which holds the finder categories manager. The manager then unregisters finder categories by passing the category name.
