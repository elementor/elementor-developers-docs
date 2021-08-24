# Preview Scripts

When you develop addons that extend [Elementor preview](/editor/elementor-preview) and need to register custom scripts, use the `elementor/preview/enqueue_scripts` action hook, which is fired when Elementor Preview scripts are registered and enqueued.

## Registering Preview Scripts

Register and enqueue custom scripts after Elementor preview scripts are registered and enqueued:

```php {11}
function my_plugin_preview_scripts() {

	wp_register_script( 'preview-script-1', plugins_url( 'assets/js/preview-script-1.js', __FILE__ ) );
	wp_register_script( 'preview-script-2', plugins_url( 'assets/js/preview-script-2.js', __FILE__ ), [ 'external-library' ] );
	wp_register_script( 'external-library', plugins_url( 'assets/js/libs/external-library.js', __FILE__ ) );

	wp_enqueue_script( 'preview-script-1' );
	wp_enqueue_script( 'preview-script-2' );

}
add_action( 'elementor/preview/enqueue_scripts', 'my_plugin_preview_scripts' );
```
