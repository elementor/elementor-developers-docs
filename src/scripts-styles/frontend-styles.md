# Frontend Styles

When using custom stylesheets, they must be registered to all pages using Elementor. Use the `elementor/frontend/before_enqueue_styles` or `elementor/frontend/after_enqueue_styles` action hooks, which are fired when Elementor frontend styles are registered and enqueued.

## Registering Frontend Styles

In the example below, we'll register and enqueue custom stylesheets **before** Elementor frontend styles are registered and enqueued:

```php {11}
function my_plugin_frontend_stylesheets() {

	wp_register_style( 'frontend-style-1', plugins_url( 'assets/css/frontend-style-1.css', __FILE__ ) );
	wp_register_style( 'frontend-style-2', plugins_url( 'assets/css/frontend-style-2.css', __FILE__ ), [ 'external-framework' ] );
	wp_register_style( 'external-framework', plugins_url( 'assets/css/libs/external-framework.css', __FILE__ ) );

	wp_enqueue_style( 'frontend-style-1' );
	wp_enqueue_style( 'frontend-style-2' );

}
add_action( 'elementor/frontend/before_enqueue_styles', 'my_plugin_frontend_stylesheets' );
```

Now we'll register and enqueue custom stylesheets **after** Elementor frontend styles are registered and enqueued:

```php {11}
function my_plugin_frontend_stylesheets() {

	wp_register_style( 'frontend-style-1', plugins_url( 'assets/css/frontend-style-1.css', __FILE__ ) );
	wp_register_style( 'frontend-style-2', plugins_url( 'assets/css/frontend-style-2.css', __FILE__ ), [ 'external-framework' ] );
	wp_register_style( 'external-framework', plugins_url( 'assets/css/libs/external-framework.css', __FILE__ ) );

	wp_enqueue_style( 'frontend-style-1' );
	wp_enqueue_style( 'frontend-style-2' );

}
add_action( 'elementor/frontend/after_enqueue_styles', 'my_plugin_frontend_stylesheets' );
```

::: warning Please Note
These stylesheets will be loaded on all pages built with Elementor. To reduce performance impact, make sure you minify the files.
:::
