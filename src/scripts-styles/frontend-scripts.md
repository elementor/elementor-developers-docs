# Frontend Scripts

Some addons have custom scripts run on client side. To load frontend scripts on all pages using Elementor, use the `elementor/frontend/after_register_scripts` action hook which fires after Elementor frontend scripts are registered.

## Registering Frontend Scripts

Register scripts and enqueue them on frontend pages using Elementor:

```php
function my_plugin_frontend_scripts() {

	wp_register_script( 'frontend-script-1', plugins_url( 'assets/js/frontend-script-1.js', __FILE__ ) );
	wp_register_script( 'frontend-script-2', plugins_url( 'assets/js/frontend-script-2.js', __FILE__ ), [ 'external-library' ] );
	wp_register_script( 'external-library', plugins_url( 'assets/js/libs/external-library.js', __FILE__ ) );

	wp_enqueue_script( 'frontend-script-1' );
	wp_enqueue_script( 'frontend-script-2' );

}
add_action( 'elementor/frontend/after_register_scripts', 'my_plugin_frontend_scripts' );
```

::: warning Please Note
Those scripts will be loaded on all pages using Elementor. To reduce performance impact, make sure to remove unused code and minify the files.
:::
