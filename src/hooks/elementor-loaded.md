# Elementor Loaded

Elementor has a hook that fires when the plugin is loaded, before loading all the components.

## Hook Details

* **Hook Type:** Action Hook
* **Hook Name:** `elementor/loaded`
* **Affects On:** Init Process

## Example

```php
function my_plugin() {

	// ...

}
add_action( 'elementor/loaded', 'my_plugin' );
```
