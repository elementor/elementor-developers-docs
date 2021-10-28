# Editor Scripts

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

When you develop addons that extend [Elementor Editor](/editor/) and you have your own custom scripts, use `elementor/editor/before_enqueue_scripts` or `elementor/editor/after_enqueue_scripts` action hooks, which are fired when editor scripts are registered and enqueued.

## Registering Editor Scripts

In the example below, we'll register and enqueue custom scripts **before** Elementor scripts are registered and enqueued:

```php {11}
function my_plugin_editor_scripts() {

	wp_register_script( 'editor-script-1', plugins_url( 'assets/js/editor-script-1.js', __FILE__ ) );
	wp_register_script( 'editor-script-2', plugins_url( 'assets/js/editor-script-2.js', __FILE__ ), [ 'external-library' ] );
	wp_register_script( 'external-library', plugins_url( 'assets/js/libs/external-library.js', __FILE__ ) );

	wp_enqueue_script( 'editor-script-1' );
	wp_enqueue_script( 'editor-script-2' );

}
add_action( 'elementor/editor/before_enqueue_scripts', 'my_plugin_editor_scripts' );
```

Now we'll register and enqueue custom scripts **after** Elementor scripts are registered and enqueued:

```php {11}
function my_plugin_editor_scripts() {

	wp_register_script( 'editor-script-1', plugins_url( 'assets/js/editor-script-1.js', __FILE__ ) );
	wp_register_script( 'editor-script-2', plugins_url( 'assets/js/editor-script-2.js', __FILE__ ), [ 'external-library' ] );
	wp_register_script( 'external-library', plugins_url( 'assets/js/libs/external-library.js', __FILE__ ) );

	wp_enqueue_script( 'editor-script-1' );
	wp_enqueue_script( 'editor-script-2' );

}
add_action( 'elementor/editor/after_enqueue_scripts', 'my_plugin_editor_scripts' );
```
