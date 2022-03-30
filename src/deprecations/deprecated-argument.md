# Deprecated Argument

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Elementor offers the `Deprecation::deprecated_argument()` method to handle the deprecation process for arguments inside Elementor code.

## Use Cases

As code improves some arguments become redundant. The same functionality can be processed by retrieving the data internally without the need of external arguments.

When registerig controls you no longer need to pass the ID argument as the data comes from the class itself, from a seperate method.

## How To Deprecate Arguments

Our class has a `register()` method. This method accepted an `$id`. But now the ID moved into the class and we need to stop supporting the `$id` argument in the registration process.

The code:

```php
class Items_Manager {

	private $items;

	function register( $instance, $id = null ) {
		$this->items[ $id ] = $instance;
	}

}
```

The original method requires the `$id` argument. The new method should work with or without this argument.

The new code:

```php
use Elementor\Plugin;

class Items_Manager {

	private $items;

	function register( $instance, $id = null ) {
		if ( $id ) {
			// TODO: Remove this in the future.
			Plugin::instance()->modules_manager->get_modules( 'dev-tools' )->deprecation->deprecated_argument(
				'$id',
				'3.5.0'
			);
		} else {
			// TODO: Leave this in the future.
			$id = $instance->get_id();
		}

		$this->items[ $id ] = $instance;
	}

}
```

After 8 major versions the code will look like this:

```php
class Items_Manager {

	private $items;

	function register( $instance ) {
		$id = $instance->get_id();
		$this->items[ $id ] = $instance;
	}

}
```

## Updating Deprecated Arguments

Addon developers that use the `register()` method with the `$id` argument should simply remove the argument, as follows:

```diff
function register_new_items( $items_manager ) {

	require_once( __DIR__ . '/items/item-1.php' );
	require_once( __DIR__ . '/items/item-2.php' );

-	$items_manager->register( new \My_Item_1(), 'item-1' );
-	$items_manager->register( new \My_Item_1(), 'item-2' );
+	$items_manager->register( new \My_Item_1() );
+	$items_manager->register( new \My_Item_2() );

}
add_action( 'items/register', 'register_new_items' );
```
