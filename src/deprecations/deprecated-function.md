# Deprecated Function

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Elementor offers the `Deprecation::deprecated_function()` method to handle the deprecation process for functions and methods inside Elementor code.

## Use Cases

Previously, Elementor protected methods by using the `_` prefix. However, this convention is outdated. For instance, `_register_controls()` would now just be `register_controls()`.

Unifying components is another example of this change. Elementor 3.5 renamed many methods in order to unify the registration process. This entailed using [managers](./../managers/), renaming `register_widget_type()`, `register_control()`, `register_tag()`, `add_category()`, and others to simply `register()`.

## How To Deprecate Functions

In the following example we need to rename the `add_item()` method and replace it with `register()`.

For example, take the following code:

```php
class Items {

	function add_item( $item_instance ) {
		/* ... */
	}

}
```

The new code, with the deprecation handler, will look like this:

```php
use Elementor\Plugin;

class Items {

	function register( $item_instance ) {
		/* ... */
	}

	function add_item( $item_instance ) {
		// Deprecation handler
		Plugin::$instance->modules_manager->get_modules( 'dev-tools' )->deprecation->deprecated_function(
			'add_item()',
			'3.5.0',
			'register()'
		);

		// Backwards compatibility
		$this->register( $item_instance );
	}

}
```

The original method was renamed to `register()`. But, we didn't remove the `add_item()` method, we simply added a deprecation handler to inform developers still using this method to replace it with the new name.

After eight major versions, the code will look like this:

```php
class Items {

	function register( $item_instance ) {
		/* ... */
	}

}
```

## Updating Deprecated Functions

Addon developers who use the old `add_item()` method should simply rename the method to `register()`, as follows:

```diff
class MyItem extends Items {

-	protected function add_item() {
+	protected function register() {
		/* ... */
	}

}
```
