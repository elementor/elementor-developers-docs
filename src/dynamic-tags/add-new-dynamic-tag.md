# Add New Dynamic Tag

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Elementor offers many builtin dynamic tags out of the box, but it also allows external developers to register new tags.

## Hooks

To do that we simply hook to the `elementor/dynamic_tags/register` action which provides access to the dynamic tags manager as a parameter. Developers can use the manager to add new tags using the `register()` method with the dynamic tag instance.

## Registering Dynamic Tags

To register new dynamic tags use the following code:

```php
function register_new_dynamic_tags( $dynamic_tags_manager ) {

	require_once( __DIR__ . '/dynamic-tags/dynamic-tag-1.php' );
	require_once( __DIR__ . '/dynamic-tags/dynamic-tag-2.php' );

	$dynamic_tags_manager->register( new \Elementor_Dynamic_Tag_1() );
	$dynamic_tags_manager->register( new \Elementor_Dynamic_Tag_2() );

}
add_action( 'elementor/dynamic_tags/register', 'register_new_dynamic_tags' );
```

The manager registers the new tag by accepting the dynamic tags instances. For more information about the dynamic tag class, read about the [dynamic tag class structure](./dynamic-tags-structure/).
