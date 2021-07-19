# Editor Scripts

When you develop addons that extend [The Editor](/editor/) and you need to register custom scripts, use the `elementor/editor/after_register_scripts` action hook which fires after Elementor Editor scripts are registered.

## Registering Editor Scripts

Register scripts and enqueue them when using Elementor Editor:

```php
function my_plugin_editor_scripts() {

	wp_register_script( 'editor-script-1', plugins_url( 'assets/js/editor-script-1.js', __FILE__ ) );
	wp_register_script( 'editor-script-2', plugins_url( 'assets/js/editor-script-2.js', __FILE__ ), [ 'external-library' ] );
	wp_register_script( 'external-library', plugins_url( 'assets/js/libs/external-library.js', __FILE__ ) );

	wp_enqueue_script( 'editor-script-1' );
	wp_enqueue_script( 'editor-script-2' );

}
add_action( 'elementor/editor/after_register_scripts', 'my_plugin_editor_scripts' );
```
