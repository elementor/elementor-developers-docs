# Elementor Managers

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Elementor is an extendable framework. It offers an architecture that allows external developers to add new functionality with addons. To do that you simply need to create a new class for your component that extend the base class and inherits its methods and then you need to register the class using the component manager to let Elementor know about it.

## Registering Elements

Each component has it's own manager that holds all the references to all the registered elements. To register your own element you need to use a registration method in the component manager. The traditional way to register new elements looks like that:

```php
function register_something() {

	require_once( __DIR__ . '/something/something-1.php' );
	require_once( __DIR__ . '/something/something-2.php' );

	\Elementor\Plugin::instance()->some_manager->register( new \Elementor_Something_1() );
	\Elementor\Plugin::instance()->some_manager->register( new \Elementor_Something_2() );

}
add_action( 'elementor/something/register', 'register_something' );
```

You hook to some kind of action hook, and pass a callback function that imports your class and then you register the class using the component manager located in `\Elementor\Plugin` class.

### Simplifying Registration

Elementor also improving the managers system across all the elements, standardizing the way you register new component elements and simplify the registration process.

The new registration method will include the manager as a parameter, this way external developers won't need know the namespace, classes and registration methods names. In addition, external plugins won't break sites when deactivating the Elementor plugin because the manager passed as a parameter.

```php
function register_something( $some_manager ) {

	require_once( __DIR__ . '/something/something-1.php' );
	require_once( __DIR__ . '/something/something-2.php' );

	$some_manager->register( new \Elementor_Something_1() );
	$some_manager->register( new \Elementor_Something_2() );

}
add_action( 'elementor/something/register', 'register_something' );
```

Please note that some managers already use the new syntax, are not. We plan to update many managers in Elementor 3.5 and in future versions should have fully standard way to register new elements.

## Managers

Check out the different elements you can register, and how to register them properly:

* [Registering Widgets](./registering-widgets)
* [Registering Controls](./registering-controls)
* [Registering Dynamic Tags](./registering-dynamic-tags)
* [Registering Finder Categories](./registering-finder-categories)
