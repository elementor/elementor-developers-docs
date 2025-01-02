# Initialization Process

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

After passing all compatibility checks, we can safely run the addon and start extending Elementor's functionality. We can load other files, hook to filters and actions and write custom code.

## Registering Custom Scripts & Styles

The addon can register and enqueue [scripts and styles](./../scripts-styles/). Let's see an example of how this is done:

```php
final class Plugin {

	/**
	 * Initialize
	 *
	 * Load the addons functionality only after Elementor is initialized.
	 *
	 * Fired by `elementor/init` action hook.
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function init(): void {
		add_action( 'elementor/frontend/after_register_styles', [ $this, 'register_frontend_styles' ] );
		add_action( 'elementor/frontend/after_register_scripts', [ $this, 'register_frontend_scripts' ] );

		add_action( 'elementor/frontend/after_enqueue_styles', [ $this, 'enqueue_frontend_styles' ] );
		add_action( 'elementor/frontend/after_enqueue_scripts', [ $this, 'enqueue_frontend_scripts' ] );
	}

	public function register_frontend_styles(): void {
		wp_register_style( 'frontend-style-1', plugins_url( 'assets/css/frontend-style-1.css', __FILE__ ) );
		wp_register_style( 'frontend-style-2', plugins_url( 'assets/css/frontend-style-2.css', __FILE__ ), [ 'external-framework' ] );
		wp_register_style( 'external-framework', plugins_url( 'assets/css/libs/external-framework.css', __FILE__ ) );
	}

	public function register_frontend_scripts(): void {
		wp_register_script( 'frontend-script-1', plugins_url( 'assets/js/frontend-script-1.js', __FILE__ ) );
		wp_register_script( 'frontend-script-2', plugins_url( 'assets/js/frontend-script-2.js', __FILE__ ), [ 'external-library' ] );
		wp_register_script( 'external-library', plugins_url( 'assets/js/libs/external-library.js', __FILE__ ) );
	}

	public function enqueue_frontend_styles(): void {
		wp_enqueue_style( 'frontend-style-1' );
		wp_enqueue_style( 'frontend-style-2' );
	}

	public function enqueue_frontend_scripts(): void {
		wp_enqueue_script( 'frontend-script-1' );
		wp_enqueue_script( 'frontend-script-2' );
	}

}
```

## Registering New Widgets

To add new widgets to Elementor, we need to register them using the [widget manager](./../managers/registering-widgets/) mechanism. It’s a pretty simple process, we hook to the widget registration hook, include the widget's files and register the widget's classes.

```php
final class Plugin {

	/**
	 * Initialize
	 *
	 * Load the addons functionality only after Elementor is initialized.
	 *
	 * Fired by `elementor/init` action hook.
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function init(): void {

		add_action( 'elementor/widgets/register', [ $this, 'register_widgets' ] );

	}

	/**
	 * Register Widgets
	 *
	 * Load widgets files and register new Elementor widgets.
	 *
	 * Fired by `elementor/widgets/register` action hook.
	 *
	 * @param \Elementor\Widgets_Manager $widgets_manager Elementor widgets manager.
	 */
	public function register_widgets( $widgets_manager ): void {

		require_once( __DIR__ . '/includes/widgets/widget-1.php' );
		require_once( __DIR__ . '/includes/widgets/widget-2.php' );

		$widgets_manager->register( new \Widget_1() );
		$widgets_manager->register( new \Widget_2() );

	}

}
```

## Registering New Controls

Now let's see how to register new controls using the [controls manager](./../managers/registering-controls/). Again, we are hooking to the control registration action to load the controls files and register the control classes.

```php
final class Plugin {

	/**
	 * Initialize
	 *
	 * Load the addons functionality only after Elementor is initialized.
	 *
	 * Fired by `elementor/init` action hook.
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function init(): void {

		add_action( 'elementor/controls/register', [ $this, 'register_controls' ] );

	}

	/**
	 * Register Controls
	 *
	 * Load controls files and register new Elementor controls.
	 *
	 * Fired by `elementor/controls/register` action hook.
	 *
	 * @param \Elementor\Controls_Manager $controls_manager Elementor controls manager.
	 */
	public function register_controls( $controls_manager ): void {

		require_once( __DIR__ . '/includes/controls/control-1.php' );
		require_once( __DIR__ . '/includes/controls/control-2.php' );

		$controls_manager->register( new \Control_1() );
		$controls_manager->register( new \Control_2() );

	}

}
```
