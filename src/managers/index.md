# Elementor Managers

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Elementor is an extendable framework. It offers an architecture which allows external developers to add new functionality with addons. To do that, you need to create a new class for your component, which extends the base class and inherits its methods. You then need to register the class using the component manager, informing Elementor of its existence.

## Registering Elements

Each component has its own manager that holds all the references to all the registered elements. To register your own element, you need to access the registration method in the component manager.

To simplify the process, Elementor adopted a standard way to register new component elements. All you need to do is to hook to manager using a action hook, pass a callback function that imports your class and then registers the class using the component manager.

```php
function register_something( $some_manager ) {

	require_once( __DIR__ . '/something/something-1.php' );
	require_once( __DIR__ . '/something/something-2.php' );

	$some_manager->register( new \Elementor_Something_1() );
	$some_manager->register( new \Elementor_Something_2() );

}
add_action( 'elementor/something/register', 'register_something' );
```

## Managers

Check out the different elements you can register, and how to register them properly:

* [Registering Widgets](./registering-widgets/)
* [Registering Controls](./registering-controls/)
* [Registering Dynamic Tags](./registering-dynamic-tags/)
* [Registering Finder Categories](./registering-finder-categories/)
