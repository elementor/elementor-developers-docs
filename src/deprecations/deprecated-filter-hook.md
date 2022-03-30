# Deprecated Filter Hook

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Elementor offers the `Deprecation::apply_deprecated_filter()` method to handle the deprecation process for filter hooks inside Elementor code.

## Use Cases

When refactoring naming conventions, the old naming conventions should work alongside the new ones.

## How To Deprecate Filter Hooks

We have an filter hook called `elementor/old/filter`, and we want to rename it to `elementor/new/filter`.

The code:

```php
class Name {

	function init( $args ) {
		$value = apply_filters( 'elementor/old/filter', $value, $args );
	}

}
```

The new code with the deprecation handler will look like this:

```php
use Elementor\Plugin;

class Name {

	function init( $args ) {
		// Deprecation handler
		Plugin::$instance->modules_manager->get_modules( 'dev-tools' )->deprecation->apply_deprecated_filter(
			'elementor/old/filter',
			[ $args ],
			'3.5.0',
			'elementor/new/filter'
		);

		// Run the new filter
		$value = apply_filters( 'elementor/new/filter', $value, $args );
	}

}
```

The new `elementor/new/filter` hook will run as expected. In addition, the deprecation handler will run the old hook (for backwards compatibility) with some notices for developers. 

After 8 major versions the code will look like this:

```php
class Name {

	function init( $args ) {
		$value = apply_filters( 'elementor/new/filter', $value, $args );
	}

}
```

## Updating Deprecated Filter Hooks

Addon developers that use the old hook should simply rename it, as follows:

```diff
function hook_callback() {
	/* ... */
}
- add_filter( 'elementor/old/filter', 'hook_callback' );
+ add_filter( 'elementor/new/filter', 'hook_callback' );
```
