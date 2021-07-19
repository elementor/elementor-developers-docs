# Editor Styles

When you develop addons that extend [The Editor](/editor/) and you need to register custom stylesheets, use the `elementor/editor/after_enqueue_styles` action hook which fires after Elementor Editor styles are registered.

## Registering Editor Styles

Register styles and enqueue them when using Elementor Editor:

```php
function my_plugin_editor_styles() {

	wp_register_style( 'editor-style-1', plugins_url( 'assets/css/editor-style-1.css', __FILE__ ) );
	wp_register_style( 'editor-style-2', plugins_url( 'assets/css/editor-style-2.css', __FILE__ ), [ 'external-framework' ] );
	wp_register_style( 'external-framework', plugins_url( 'assets/css/libs/external-framework.css', __FILE__ ) );

	wp_enqueue_style( 'editor-style-1' );
	wp_enqueue_style( 'editor-style-2' );

}
add_action( 'elementor/editor/after_enqueue_styles', 'my_plugin_editor_styles' );
```
