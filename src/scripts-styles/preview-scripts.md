# Preview Scripts

xxx

## Registering Preview Scripts

Register scripts and enqueue them on Elementor preview:

```php
function my_plugin_preview_scripts() {

	wp_register_script( 'preview-script-1', plugins_url( 'assets/js/preview-script-1.js', __FILE__ ) );
	wp_register_script( 'preview-script-2', plugins_url( 'assets/js/preview-script-2.js', __FILE__ ), [ 'external-library' ] );
	wp_register_script( 'external-library', plugins_url( 'assets/js/libs/external-library.js', __FILE__ ) );

	wp_enqueue_script( 'preview-script-1' );
	wp_enqueue_script( 'preview-script-2' );

}
add_action( 'elementor/preview/enqueue_scripts', 'my_plugin_preview_scripts' );
```
