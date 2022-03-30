# Deprecated Action Hook

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Elementor offers the `Deprecation::do_deprecated_action()` method to handle the deprecation process for actions hooks inside Elementor code.

## Use Cases

When refactoring naming conventions, the old naming conventions should work alongside the new ones.

A recent example happened when Elementor unified the registration process in different components in versions 3.5. Many action hooks across different [managers](./../managers/) renamed.

## How To Deprecate Action Hooks

We have an action hook called `elementor/old/action`, and we want to rename it to `elementor/old/action`.

The code:

```php
class Name {

	function init( $args ) {
		do_action( 'elementor/old/action', $args );
	}

}
```

The new code with the deprecation handler will look like this:

```php
use Elementor\Plugin;

class Name {

	function init( $args ) {
		// Deprecation handler
		Plugin::$instance->modules_manager->get_modules( 'dev-tools' )->deprecation->do_deprecated_action(
			'elementor/old/action',
			[ $args ],
			'3.5.0',
			'elementor/new/action'
		);

		// Run the new hook
		do_action( 'elementor/new/action', $args );
	}

}
```

The new `elementor/new/action` hook will run as expected. In addition, the deprecation handler will run the old hook (for backwards compatibility) with some notices for developers. 

After 8 major versions the code will look like this:

```php
class Name {

	function init( $args ) {
		do_action( 'elementor/new/action', $args );
	}

}
```

## Updating Deprecated Action Hooks

Addon developers that use the old hook should simply rename it, as follows:

```diff
function hook_callback() {
	/* ... */
}
- add_action( 'elementor/old/action', 'hook_callback' );
+ add_action( 'elementor/new/action', 'hook_callback' );
```

