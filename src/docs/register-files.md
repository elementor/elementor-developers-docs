# Register Files

The extension can load other files required to run the plugin. Elementor has some hooks that allow developers to register components. It's very important to use the correct hook as Elementor loads files dynamically only when they are used, to improve site performance.

## Registering Custom Styles

Some plugins have custom stylesheets, we can register them on Elementor frontend using the `elementor/frontend/after_enqueue_styles` action hook.

```php
final class Elementor_Test_Extension {

	public function init() {

		add_action( 'elementor/frontend/after_enqueue_styles', [ $this, 'plugin_styles' ] );

	}

	public function plugin_styles() {

		wp_register_style( 'custom-style-1', plugins_url( 'assets/css/style-1.css', __FILE__ ) );
		wp_register_style( 'custom-style-2', plugins_url( 'assets/css/style-2.css', __FILE__ ), [ 'external-framework' ] );
		wp_register_style( 'external-framework', plugins_url( 'assets/css/libs/external-framework.css', __FILE__ ) );

	}

}
```

## Registering Custom Scripts

Other plugins have custom scripts, in those cases can register them on Elementor frontend using the `elementor/frontend/after_register_scripts` action hook:

```php
final class Elementor_Test_Extension {

	public function init() {

		add_action( 'elementor/frontend/after_register_scripts', [ $this, 'plugin_scripts' ] );

	}

	public function plugin_scripts() {

		wp_register_script( 'custom-script-1', plugins_url( 'assets/js/script-1.js', __FILE__ ) );
		wp_register_script( 'custom-script-2', plugins_url( 'assets/js/script-2.js', __FILE__ ), [ 'jquery', 'external-library' ] );
		wp_register_script( 'external-library', plugins_url( 'assets/js/libs/external-library.js', __FILE__ ) );

	}

}
```

## Registering New Widgets

To add a new widget to Elementor we need to register the widget class using the widget manager. It’s a pretty simple process, it is done using the `elementor/widgets/widgets_registered` action.

```php
final class Elementor_Test_Extension {

	public function init() {

		// Include plugin files
		$this->includes();

		// Register widgets
		add_action( 'elementor/widgets/widgets_registered', [ $this, 'register_widgets' ] );

	}

	public function includes() {

		require_once( __DIR__ . '/includes/widgets/test-widget-1.php' );
		require_once( __DIR__ . '/includes/widgets/test-widget-2.php' );

	}

	public function register_widgets() {

		\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \Elementor_Test_Widget1() );
		\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \Elementor_Test_Widget2() );

	}

}
```

## Registering New Controls

To add a new controls to Elementor we need to register the control class using the `elementor/controls/controls_registered` action hook.

```php
final class Elementor_Test_Extension {

	public function init() {
		// Include plugin files
		$this->includes();

		// Register controls
		add_action( 'elementor/controls/controls_registered', [ $this, 'register_controls' ] );

	}

	public function includes() {

		require_once( __DIR__ . '/includes/controls/test-control-1.php' );
		require_once( __DIR__ . '/includes/controls/test-control-2.php' );

	}

	public function register_controls() {

		$controls_manager = \Elementor\Plugin::$instance->controls_manager;
		$controls_manager->register_control( 'control-type-1', new Test_Control1() );
		$controls_manager->register_control( 'control-type-2', new Test_Control2() );

	}

}
```
