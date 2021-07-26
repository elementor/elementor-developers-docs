# Registering Locations

To support Elementor Locations, the theme needs to register supported location in the `functions.php` file. Theme developers can support all core locations, support some locations or create their own custom locations.

To register new locations we need to hook to the `elementor/theme/register_locations` action and use either the `register_all_core_location()` method to register all the locations or the `register_location()` method to register custom locations.

## Registering All Locations

Registering all core locations is done using the following code:

```php
function theme_prefix_register_elementor_locations( $elementor_theme_manager ) {

	$elementor_theme_manager->register_all_core_location();

}
add_action( 'elementor/theme/register_locations', 'theme_prefix_register_elementor_locations' );
```

## Registering Some Locations

Registering some of the core locations is done using the following code:

```php
function theme_prefix_register_elementor_locations( $elementor_theme_manager ) {

	$elementor_theme_manager->register_location( 'header' );
	$elementor_theme_manager->register_location( 'footer' );
	// $elementor_theme_manager->register_location( 'single' );
	// $elementor_theme_manager->register_location( 'archive' );

}
add_action( 'elementor/theme/register_locations', 'theme_prefix_register_elementor_locations' );
```
## Registering New Locations

```php
function theme_prefix_register_elementor_locations( $elementor_theme_manager ) {

	$elementor_theme_manager->register_location(
		'main-sidebar',
		[
			'label' => __( 'Main Sidebar', 'theme-name' ),
			'multiple' => true,
			'edit_in_content' => false,
		]
	);

}
add_action( 'elementor/theme/register_locations', 'theme_prefix_register_elementor_locations' );
```

Let’s see what each argument does:

* **label** (_`string`_) – The location label in Elementor.
* **multiple** (_`bool`_) – Whether to display all the template belong to this location (`true`) or only the best match (`false`). Default is false, to display the best match template in the location.
* **edit_in_content** (_`bool`_) – Whether to this template is edited in the content area or the theme uses this location in the layout. Default is true, edit in the content area.