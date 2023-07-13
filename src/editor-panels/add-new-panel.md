# Add New Panel

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Elementor offers many built-in panels out of the box, but it also allows external developers to register new panels.

## Hooks

The editor is a JS framework. To register new panels we need to register & enqueue the JS files that handle the panels registration prosses.

The `elementor/editor/v2/scripts/register` and `elementor/editor/v2/scripts/enqueue` action hooks register and enqueues the scripts that handle the Elementor Editor compenents.

It's important to note that the `elementor-packages-editor-panels` is a dependency script for panel components.

## Registering Panels

To register new panel use the following code:

```php
function register_new_editor_panels() {
	wp_register_script( 'my-plugin', plugins_url( 'assets/js/editor-panel.js', __FILE__ ), [ 'elementor-packages-editor-panels' ], null, true );
}
add_action( 'elementor/editor/v2/scripts/register', 'register_new_editor_panels' );
​
function enqueue_new_editor_panels() {
	wp_enqueue_script( 'my-plugin' );
}
add_action( 'elementor/editor/v2/scripts/enqueue', 'enqueue_new_editor_panels' );
```
