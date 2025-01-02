# Frontend Scripts

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Some addons have custom frontend scripts loaded on pages built with Elementor. Use `elementor/frontend/before_enqueue_scripts` or `elementor/frontend/after_enqueue_scripts` action hooks, which are fired when Elementor frontend scripts are registered and enqueued.

## Registering Frontend Scripts

In the example below, we'll register and enqueue custom scripts **before** Elementor frontend scripts are registered and enqueued:

```php {6,12}
function my_plugin_register_frontend_scripts() {
	wp_register_script( 'frontend-script-1', plugins_url( 'assets/js/frontend-script-1.js', __FILE__ ) );
	wp_register_script( 'frontend-script-2', plugins_url( 'assets/js/frontend-script-2.js', __FILE__ ), [ 'external-library' ] );
	wp_register_script( 'external-library', plugins_url( 'assets/js/libs/external-library.js', __FILE__ ) );
}
add_action( 'elementor/frontend/before_register_scripts', 'my_plugin_register_frontend_scripts' );

function my_plugin_enqueue_frontend_scripts() {
	wp_enqueue_script( 'frontend-script-1' );
	wp_enqueue_script( 'frontend-script-2' );
}
add_action( 'elementor/frontend/before_enqueue_scripts', 'my_plugin_enqueue_frontend_scripts' );
```

Now we'll register and enqueue custom scripts **after** Elementor frontend scripts are registered and enqueued:

```php {6,12}
function my_plugin_register_frontend_scripts() {
	wp_register_script( 'frontend-script-1', plugins_url( 'assets/js/frontend-script-1.js', __FILE__ ) );
	wp_register_script( 'frontend-script-2', plugins_url( 'assets/js/frontend-script-2.js', __FILE__ ), [ 'external-library' ] );
	wp_register_script( 'external-library', plugins_url( 'assets/js/libs/external-library.js', __FILE__ ) );
}
add_action( 'elementor/frontend/after_register_scripts', 'my_plugin_register_frontend_scripts' );

function my_plugin_enqueue_frontend_scripts() {
	wp_enqueue_script( 'frontend-script-1' );
	wp_enqueue_script( 'frontend-script-2' );
}
add_action( 'elementor/frontend/after_enqueue_scripts', 'my_plugin_enqueue_frontend_scripts' );
```

::: warning Please Note
Those scripts will be loaded on all pages built with Elementor. To reduce performance impact, make sure you minify the files.
:::
