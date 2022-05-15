# Unregistering Dynamic Tags

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Developers can remove [dynamic tags](./../dynamic-tags/) from the list of registered dynamic tags. This is done by hooking to the dynamic tags manager and unregistering specific dynamic tags by passing dynamic tag name.

## Unregistering Existing Dynamic Tags

As of Elementor 3.5, developers should use the following code to unregister existing dynamic tags:

```php
/**
 * Unregister Elementor dynamic tags.
 *
 * @param \Elementor\Core\DynamicTags\Manager $dynamic_tags_manager Elementor dynamic tags manager.
 * @return void
 */
function unregister_dynamic_tags( $dynamic_tags_manager ) {

	$dynamic_tags_manager->unregister( 'dynamic-tag-1' );
	$dynamic_tags_manager->unregister( 'dynamic-tag-2' );

}
add_action( 'elementor/dynamic_tags/register', 'unregister_dynamic_tags' );
```

This hooks to the `elementor/dynamic_tags/register` action hook which holds the dynamic tags manager. The manager then unregisters the dynamic tag by passing the dynamic tag name.
