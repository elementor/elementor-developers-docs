# Registering Widget Categories

When you create new [Elementor Widget Categories](/widgets/widget-categories) you need to register them to let Elementor know them. The registration process is done by hooking to the `elementor/elements/categories_registered` action hook.

## Registering New Widget Categories

To register new widget categories use the following code:

```php
function register_new_widget_categories( $elements_manager ) {

	$elements_manager->add_category(
		'first-category',
		[
			'title' => __( 'First Category', 'plugin-name' ),
			'icon' => 'fa fa-plug',
		]
	);
	$elements_manager->add_category(
		'second-category',
		[
			'title' => __( 'Second Category', 'plugin-name' ),
			'icon' => 'fa fa-plug',
		]
	);

}
add_action( 'elementor/elements/categories_registered', 'register_new_widget_categories' );
```

We hook to the `elementor/elements/categories_registered` action hook that holds `$elements_manager` parameter and pass a callback function that uses the manager to add new categories.
