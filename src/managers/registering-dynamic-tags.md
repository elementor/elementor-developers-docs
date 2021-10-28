# Registering Dynamic Tags

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

When you create new [dynamic tags](/dynamic-tags/), you must register them. This is done by hooking to the registration hook in the dynamic tags manager and passing a new dynamic tag instance.

## Registering New Dynamic Tags

As of Elementor 3.5, developers should use the following code to register new dynamic tags:

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

This hooks to the `elementor/dynamic_tags/register` action hook which holds the dynamic tags manager. The manager registers new dynamic tags by passing the dynamic tag instance.

## Registering New Dynamic Tags in Previous Versions

For earlier versions, prior to Elementor 3.5, register new dynamic tags using the following code:

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

This hooks to the `elementor/dynamic_tags/register_tags` action hook that holds the `$dynamic_tags_manager` parameter, passing a callback function importing the new dynamic tag files, and registering them with the dynamic tags manager.
