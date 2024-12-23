# Widget Dependencies

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Some widgets are dependent on custom scripts for functionality and custom styles for look and feel. Widgets can use external JS libraries, CSS frameworks, or custom JS handlers. Let's see how to register them.

## Defining Dependencies

Inside the widget class we can deffine the required JS and CSS dependencies the following way:

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_script_depends(): array {
		return [ 'script-handle' ];
	}

	public function get_style_depends(): array {
		return [ 'style-handle' ];
	}

}
```

* **Script Dependencies** – The `get_script_depends()` method lets you define the JS files required to run the widget.

* **Style Dependencies** – The `get_style_depends()` method lets you define the CSS files required to run the widget.

Please note that these dependencies should already be registered. The widget class only informs Elementor what dependencies it needs to enqueue.

## Registering Scripts & Styles in WordPress

Like any other WordPress plugin, scripts and styles have to be registered using the [wp_register_script()](https://developer.wordpress.org/reference/functions/wp_register_script/) and [wp_register_style()](https://developer.wordpress.org/reference/functions/wp_register_style/) functions in the plugin’s PHP.

WordPress offers several hooks to register script/styles, depending on where they will be used:

* [wp_enqueue_scripts](https://developer.wordpress.org/reference/hooks/wp_enqueue_scripts/) - Hook for scripts and styles on front-end pages
* [login_enqueue_scripts](https://developer.wordpress.org/reference/hooks/login_enqueue_scripts/) - Hook for scripts and styles on login pages.
* [admin_enqueue_scripts](https://developer.wordpress.org/reference/hooks/admin_enqueue_scripts/) - Hook for scripts and styles on admin pages.

## Registering Scripts & Styles in Elementor

Elementor addon developers should register JS and CSS dependencies in the main file, usually where [widgets are registered](./add-new-widget/):

```php
/**
 * Register Elementor test widgets.
 */
function elementor_test_widgets_registration( $widgets_manager ) {

	require_once( __DIR__ . '/widgets/test-widget-1.php' );
	require_once( __DIR__ . '/widgets/test-widget-2.php' );

	$widgets_manager->register( new \Elementor_Test_Widget_1() );
	$widgets_manager->register( new \Elementor_Test_Widget_2() );

}
add_action( 'elementor/widgets/register', 'elementor_test_widgets_registration' );

/**
 * Register scripts and styles for Elementor test widgets.
 */
function elementor_test_widgets_dependencies() {

	/* Scripts */
	wp_register_script( 'widget-script-1', plugins_url( 'assets/js/widget-script-1.js', __FILE__ ) );
	wp_register_script( 'widget-script-2', plugins_url( 'assets/js/widget-script-2.js', __FILE__ ), [ 'external-library' ] );
	wp_register_script( 'external-library', plugins_url( 'assets/js/libs/external-library.js', __FILE__ ) );

	/* Styles */
	wp_register_style( 'widget-style-1', plugins_url( 'assets/css/widget-style-1.css', __FILE__ ) );
	wp_register_style( 'widget-style-2', plugins_url( 'assets/css/widget-style-2.css', __FILE__ ), [ 'external-framework' ] );
	wp_register_style( 'external-framework', plugins_url( 'assets/css/libs/external-framework.css', __FILE__ ) );

}
add_action( 'wp_enqueue_scripts', 'elementor_test_widgets_dependencies' );
```

Then, each widgets should set its dependencies as follows:

```php
class Elementor_Test_Widget_1 extends \Elementor\Widget_Base {

	public function get_script_depends(): array {
		return [ 'external-library' ];
	}

	public function get_style_depends(): array {
		return [ 'external-framework' ];
	}

}
```

```php
class Elementor_Test_Widget_2 extends \Elementor\Widget_Base {

	public function get_script_depends(): array {
		return [ 'widget-script-1', 'widget-script-2' ];
	}

	public function get_style_depends(): array {
		return [ 'widget-style-1', 'widget-style-2' ];
	}

}
```

This way, Elementor can build the dependency tree and enqueue only dependencies for widgets used in the page.

### Using Elementor Assets

Third-party developers can use assets registered by Elementor, for instance using [Swiper](https://swiperjs.com/) to create carousel-based widgets.

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_style_depends(): array {
		return [ 'swiper', 'widget-custom-style' ];
	}

	public function get_script_depends(): array {
		return [ 'swiper', 'widget-custom-script' ];
	}

}
```

Elementor registers swiper for its carousel widgets, and Elementor Pro and many other Elementor Addons use it instead of registering its own versiosn of the library.

### Using Elementor Scripts

To use different Elementor JS methods, widgets needs to declare `elementor-frontend` as a dependency:

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_script_depends(): array {
		return [ 'elementor-frontend', 'widget-custom-script' ];
	}

}
```

This can be handy when 3rd party widgets register their own frontend handlers. Read more about it on [controls `frontend_available` argument](./../editor-controls/frontend-available/).
