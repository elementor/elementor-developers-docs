# Frontend Styles

When you have custom stylesheets you need to register on all pages that are using Elementor, use the `elementor/frontend/after_enqueue_styles` action hook which fires after Elementor frontend styles are registered.

## Registering Frontend Styles

Register stylesheets and enqueue them on frontend pages using Elementor:

```php
function my_plugin_frontend_stylesheets() {

	wp_register_style( 'frontend-style-1', plugins_url( 'css/frontend-style-1.css', __FILE__ ) );
	wp_register_style( 'frontend-style-2', plugins_url( 'css/frontend-style-2.css', __FILE__ ), [ 'external-framework' ] );
	wp_register_style( 'external-framework', plugins_url( 'js/libs/external-framework.css', __FILE__ ) );

	wp_enqueue_style( 'frontend-style-1' );
	wp_enqueue_style( 'frontend-style-2' );

}
add_action( 'elementor/frontend/after_enqueue_styles', 'my_plugin_frontend_stylesheets' );
```

::: warning Please Note
Those stylesheets will be loaded on all pages using Elementor. To reduce performance impact, make sure to remove unused styles and minify the files.
:::
