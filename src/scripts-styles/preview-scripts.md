# Preview Scripts

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

When you develop addons that extend [Elementor preview](./../editor/elementor-preview/) and need to register custom scripts, use the `elementor/preview/enqueue_scripts` action hook, which is fired when preview scripts are registered and enqueued.

## Registering Preview Scripts

In the example below, we'll register and enqueue custom scripts after Elementor scripts are registered and enqueued:

```php {6,12}
function my_plugin_register_preview_scripts() {
	wp_register_script( 'preview-script-1', plugins_url( 'assets/js/preview-script-1.js', __FILE__ ) );
	wp_register_script( 'preview-script-2', plugins_url( 'assets/js/preview-script-2.js', __FILE__ ), [ 'external-library' ] );
	wp_register_script( 'external-library', plugins_url( 'assets/js/libs/external-library.js', __FILE__ ) );
}
add_action( 'wp_enqueue_scripts', 'my_plugin_register_preview_scripts' );

function my_plugin_enqueue_preview_scripts() {
	wp_enqueue_script( 'preview-script-1' );
	wp_enqueue_script( 'preview-script-2' );
}
add_action( 'elementor/preview/enqueue_scripts', 'my_plugin_enqueue_preview_scripts' );
```
