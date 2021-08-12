# Registering Elements

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Elementor is an extendable framework. It offers an architecture that allows external developers to add new functionality with addons. To do that you simply need to create a new class for your component and then register the class to let Elementor know about it.

## Lifecycle Hooks

Each component has it's own hooks but the registration method. The common way to register new hooks looks like that:

```php
function register_something() {

	require_once( __DIR__ . '/something/something-1.php' );
	require_once( __DIR__ . '/something/something-2.php' );

	\Elementor\Plugin::instance()->some_manager->register( new \Elementor_Something_1() );
	\Elementor\Plugin::instance()->some_manager->register( new \Elementor_Something_2() );

}
add_action( 'elementor/something/register', 'register_something' );
```

You hook to some kind of action hook, and pass a callback function that imports your class and then you register the class to the component manager.

## Registering Widgets

To register widget related elements:

* **Widgets**
  * [Registering Widgets](./registering-widgets)
  * [Registering Widget Categories](./registering-widget-categories)
* **Controls**
  * [Registering Controls](./registering-controls)
* **Dynamic Tags**
  * [Registering Dynamic Tags](./registering-dynamic-tags)
* **Finder**
  * [Registering Finder Categories](./registering-finder-categories)
