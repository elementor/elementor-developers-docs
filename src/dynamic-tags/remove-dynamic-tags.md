# Remove Dynamic Tags

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

To remove existing dynamic tag developers can simply unregister existing tags by passing the dynamic tag name.

## Hooks

To do that we need to hook to the `elementor/dynamic_tags/register` action which holds the dynamic tags manager, and pass the dynamic tag name to the `unregister()` method.

## Unregistering Dynamic Tags

To unregister existing dynamic tags use the following code:

```php
function unregister_dynamic_tags( $dynamic_tags_manager ) {

	$dynamic_tags_manager->unregister( 'dynamic-tag-1' );
	$dynamic_tags_manager->unregister( 'dynamic-tag-2' );

}
add_action( 'elementor/dynamic_tags/register', 'unregister_dynamic_tags' );
```
