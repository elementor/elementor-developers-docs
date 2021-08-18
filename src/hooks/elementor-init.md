# Elementor Init

Elementor has a hook that fires when the plugin is fully loaded.

## Hook Details

* **Hook Type:** Action Hook
* **Hook Name:** `elementor/init`
* **Affects On:** Init Process

## Example

```php
function my_plugin() {

	// ...

}
add_action( 'elementor/init', 'my_plugin' );
```
