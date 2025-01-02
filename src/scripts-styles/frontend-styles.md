# Frontend Styles

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

When using custom stylesheets, they must be registered to all pages using Elementor. Use the `elementor/frontend/before_enqueue_styles` or `elementor/frontend/after_enqueue_styles` action hooks, which are fired when Elementor frontend styles are registered and enqueued.

## Registering Frontend Styles

In the example below, we'll register and enqueue custom stylesheets **before** Elementor frontend styles are registered and enqueued:

```php {6,12}
function my_plugin_register_frontend_styles() {
	wp_register_style( 'frontend-style-1', plugins_url( 'assets/css/frontend-style-1.css', __FILE__ ) );
	wp_register_style( 'frontend-style-2', plugins_url( 'assets/css/frontend-style-2.css', __FILE__ ), [ 'external-framework' ] );
	wp_register_style( 'external-framework', plugins_url( 'assets/css/libs/external-framework.css', __FILE__ ) );
}
add_action( 'elementor/frontend/before_register_styles', 'my_plugin_register_frontend_styles' );

function my_plugin_enqueue_frontend_styles() {
	wp_enqueue_style( 'frontend-style-1' );
	wp_enqueue_style( 'frontend-style-2' );
}
add_action( 'elementor/frontend/before_enqueue_styles', 'my_plugin_enqueue_frontend_styles' );
```

Now we'll register and enqueue custom stylesheets **after** Elementor frontend styles are registered and enqueued:

```php {6,12}
function my_plugin_register_frontend_stylesheets() {
	wp_register_style( 'frontend-style-1', plugins_url( 'assets/css/frontend-style-1.css', __FILE__ ) );
	wp_register_style( 'frontend-style-2', plugins_url( 'assets/css/frontend-style-2.css', __FILE__ ), [ 'external-framework' ] );
	wp_register_style( 'external-framework', plugins_url( 'assets/css/libs/external-framework.css', __FILE__ ) );
}
add_action( 'elementor/frontend/after_register_styles', 'my_plugin_register_frontend_stylesheets' );

function my_plugin_enqueue_frontend_stylesheets() {
	wp_enqueue_style( 'frontend-style-1' );
	wp_enqueue_style( 'frontend-style-2' );
}
add_action( 'elementor/frontend/after_enqueue_styles', 'my_plugin_enqueue_frontend_stylesheets' );
```

::: warning Please Note
These stylesheets will be loaded on all pages built with Elementor. To reduce performance impact, make sure you minify the files.
:::
