# Registering Finder Categories

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

When you create new [finder categories](./../finder/) you must register them. This is done by hooking to the registration hook in the finder manager and passing a new finder category instance.

## Registering New Finder Categories

Developers should use the following code to register new finder categories:

```php
/**
 * Register new Elementor finder categories.
 *
 * @param \Elementor\Core\Common\Modules\Finder\Categories_Manager $finder_categories_manager Elementor finder categories manager.
 * @return void
 */
function register_new_finder_categories( $finder_categories_manager ) {

	require_once( __DIR__ . '/finder/finder-1.php' );
	require_once( __DIR__ . '/finder/finder-2.php' );

	$finder_categories_manager->register( new \Elementor_Finder_Category_1() );
	$finder_categories_manager->register( new \Elementor_Finder_Category_2() );

}
add_action( 'elementor/finder/register', 'register_new_finder_categories' );
```

This code hooks to the `elementor/finder/register` action hook that holds the finder categories manager. The manager then registers new finder categories by passing the finder category instance.
