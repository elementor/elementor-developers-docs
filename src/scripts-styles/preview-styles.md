# Preview Styles

xxx

## Registering Preview Styles

Register styles and enqueue them on Elementor preview:

```php
function my_plugin_preview_styles() {

	wp_register_style( 'preview-style-1', plugins_url( 'assets/css/preview-style-1.css', __FILE__ ) );
	wp_register_style( 'preview-style-2', plugins_url( 'assets/css/preview-style-2.css', __FILE__ ), [ 'external-framework' ] );
	wp_register_style( 'external-framework', plugins_url( 'assets/css/libs/external-framework.css', __FILE__ ) );

	wp_enqueue_style( 'preview-style-1' );
	wp_enqueue_style( 'preview-style-2' );

}
add_action( 'elementor/preview/enqueue_styles', 'my_plugin_preview_styles' );
```
