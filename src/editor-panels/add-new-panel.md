# Add New Panel

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Elementor offers many built-in editor panels out of the box, but it also allows external developers to register new editor panels.

## Hooks

To add new editor panels we need to enqueue the JS files that handle the panels registration process. The `elementor/editor/v2/scripts/enqueue` action hook enqueues the scripts that handle the Elementor Editor components. Please note that `elementor-packages-editor-panels` is a dependency script for panel components.

## Panels Script

To enqueue the script that adds new editor panels use the following code:

```php
function enqueue_new_editor_panels() {

	wp_enqueue_script(
		'my-plugin',
		plugins_url( 'assets/js/my-plugin-editor-panel.js', __FILE__ ),
		[ 'elementor-packages-editor-panels' ],
		null,
		true
	);

}
add_action( 'elementor/editor/v2/scripts/enqueue', 'enqueue_new_editor_panels' );
```

For more information about the [panel structure](./panel-structure.md), read about the widget class structure.
