# Registering Dynamic Tags

When you create new [Dynamic Tags](/dynamic-tags/) you need to register them to let the **Dynamic Tags Manager** know them. The registration process is done by hooking to the `elementor/dynamic_tags/register_tags` action hook.

## Registering New Dynamic Tags

To register new dynamic tags use the following code:

```php
/**
 * Register new Elementor dynamic tags.
 *
 * @param \Elementor\Core\DynamicTags\Manager $dynamic_tags_manager Elementor dynamic tags manager.
 *
 * @return void
 */
function register_new_dynamic_tags( $dynamic_tags_manager ) {

	require_once( __DIR__ . '/dynamic-tags/dynamic-tag-1.php' );
	require_once( __DIR__ . '/dynamic-tags/dynamic-tag-2.php' );

	$dynamic_tags_manager->register_tag( 'Elementor_Dynamic_Tag_1' );
	$dynamic_tags_manager->register_tag( 'Elementor_Dynamic_Tag_2' );

}
add_action( 'elementor/dynamic_tags/register_tags', 'register_new_dynamic_tags' );
```

We hook to the `elementor/dynamic_tags/register_tags` action hook that holds `$dynamic_tags_manager` parameter and pass a callback function that imports the new dynamic tag files and then registers them with the dynamic tags manager.

## New Registration Method

As of Elementor 3.5, developers should use the new way to register dynamic tags:

```php
/**
 * Register new Elementor dynamic tags.
 *
 * @param \Elementor\Core\DynamicTags\Manager $dynamic_tags_manager Elementor dynamic tags manager.
 *
 * @return void
 */
function register_new_dynamic_tags( $dynamic_tags_manager ) {

	require_once( __DIR__ . '/dynamic-tags/dynamic-tag-1.php' );
	require_once( __DIR__ . '/dynamic-tags/dynamic-tag-2.php' );

	$dynamic_tags_manager->register( new \Elementor_Dynamic_Tag_1() );
	$dynamic_tags_manager->register( new \Elementor_Dynamic_Tag_2() );

}
add_action( 'elementor/dynamic_tags/register', 'register_new_dynamic_tags' );
```

We hook to the new `elementor/dynamic_tags/register` action hook which holds the dynamic tags manager. Then we use the manager to register new dynamic tags by passing the dynamic tag instance.
