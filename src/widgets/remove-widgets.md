# Remove Widgets

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

To remove existing widget developers can simply unregister existing widget by passing the widget name.

## Hooks

To do that we need to hook to the `elementor/widgets/register` action which holds the widgets manager, and pass the widget name to the `unregister()` method.

## Unregistering Widgets

To unregister existing widgets use the following code:

```php
function unregister_widgets( $widgets_manager ) {

	$widgets_manager->unregister( 'widget-1' );
	$widgets_manager->unregister( 'widget-2' );

}
add_action( 'elementor/widgets/register', 'unregister_widgets' );
```
