# Plugin Structure

The main plugin class should have basic information about what is does, it should to check basic requirements and to load the required files to activate the plugin functionality.

## Plugin Class

First we will create a PHP class that will host all our functionality:

```php
final class Elementor_Test_Extension {

	const VERSION;
	const MINIMUM_ELEMENTOR_VERSION;
	const MINIMUM_PHP_VERSION;

	private static $_instance = null;
	public static function instance() {}

	public function __construct() {}
	public function when_wordpress_plugins_loaded() {}
	public function is_compatible() {
	public function init() {}
	public function includes() {}

}
Elementor_Test_Extension::instance();
```

## Single Instance

The plugin class should use a singleton design pattern to make sure it loads only once:

```php
final class Elementor_Test_Extension {

	/**
	 * Instance
	 *
	 * @since 1.0.0
	 * @access private
	 * @static
	 * @var Elementor_Test_Extension The single instance of the class.
	 */
	private static $_instance = null;

	/**
	 * Instance
	 *
	 * Ensures only one instance of the class is loaded or can be loaded.
	 *
	 * @since 1.0.0
	 * @access public
	 * @static
	 * @return Elementor_Test_Extension An instance of the class.
	 */
	public static function instance() {

		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}
		return self::$_instance;

	}

}
Elementor_Test_Extension::instance();
```

## Plugin Constructor

The constructor should initiate the plugin. The init process should check for basic requirements, such as whether Elementor is installed, activated and loaded, and then then run the plugin logic. Note that if one of the basic plugin requirements fails, the plugin logic won’t run.

```php
final class Elementor_Test_Extension {

	/**
	 * Constructor
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function __construct() {

		add_action( 'plugins_loaded', [ $this, 'when_wordpress_plugins_loaded' ] );

	}

	/**
	 * When WordPress Plugins Loaded
	 *
	 * After all WordPress plugins (including Elementor) are loaded, performs some compatibility checks.
	 * If all compatibility checks pass, initialize the plugin.
	 *
	 * Fired by `plugins_loaded` action hook.
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function when_wordpress_plugins_loaded() {

		if ( $this->is_compatible() ) {
			add_action( 'elementor/init', [ $this, 'init' ] );
		}

	}

	/**
	 * Compatibility Checks
	 *
	 * Checks if Elementor is installed and activated.
	 * Checks if the installed version of Elementor meets the plugin's minimum requirement.
	 * Checks if the installed PHP version meets the plugin's minimum requirement.
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function is_compatible() {

		// Compatibility checks here...

    }

	/**
	 * Initialize the plugin
	 *
	 * Load the plugin only after Elementor (and other plugins) are loaded.
	 * Load the files required to run the plugin.
	 *
	 * Fired by `plugins_loaded` action hook.
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function init() {

		// Plugin logic here...

	}

}
```
