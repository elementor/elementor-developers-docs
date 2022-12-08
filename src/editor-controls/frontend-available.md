# Frontend Available

In some cases, developers need to use the control value inside the widget JS loaded in the frontend. For example, an Elementor widget that uses an external slider library needs to get the amount of slides to display and pass the data to the library script in the frontend. Elementor lets developers expose control values to be used in the frontend.

## Frontend Available Argument

The editor has hundreds of controls. Exposing all of them in the frontend can cause performance issues. This is why by default all control values are not available in the frontend. Developers can override this setting by explicitly choosing which control data will be availble in the frontend. This is done using the `frontend_available` argument.

```php{7}
$this->add_control(
	'unique-control-name',
	[
		'label' => esc_html__( 'Control Label', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::NUMBER,
		'default' => 100,
		'frontend_available' => true,
	]
);
```

By default, `frontend_available` is set to `false`. Developers can override this by setting it to `true`.

## Fetch Control Data

Each widget can load [custom script handlers](./../widgets/widget-dependencies/) which are loaded dynamically if the widget is used in the page.

```php{30-34}
<?php
/**
 * Register Elementor test widget.
 *
 * Include widget file and register widget class.
 *
 * @since 1.0.0
 * @param \Elementor\Widgets_Manager $widgets_manager Elementor widgets manager.
 * @return void
 */
function elementor_test_widget_registration( $widgets_manager ) {

	require_once( __DIR__ . '/widgets/test-widget.php' );

	$widgets_manager->register( new \Elementor_Test_Widget() );

}
add_action( 'elementor/widgets/register', 'elementor_test_widget_registration' );

/**
 * Register Elementor test widget dependencies.
 *
 * Registers all the scripts and styles to be enqueued later.
 *
 * @since 1.0.0
 * @return void
 */
function elementor_test_widget_dependencies() {

	wp_register_script(
		'test-widget-handler',
		plugins_url( 'js/test-widget.js', __FILE__ ),
		[ 'elementor-frontend' ] // Dependent on 'elementor-frontend' script.
	);

}
add_action( 'wp_enqueue_scripts', 'elementor_test_widget_dependencies' );
```

```php{39-41,62,67,85,99}
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	/**
	 * Get widget name.
	 *
	 * Retrieve test widget name.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget name.
	 */
	public function get_name() {
		return 'test_widget';
	}

	/**
	 * Get widget title.
	 *
	 * Retrieve test widget title.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget title.
	 */
	public function get_title() {
		return esc_html__( 'Test Widget', 'textdomain' );
	}

	/**
	 * Get script dependencies.
	 *
	 * Retrieve the list of script dependencies the element requires.
	 *
	 * @since 1.9.0
	 * @access public
	 * @return array Element scripts dependencies.
	 */
	public function get_script_depends() {
		return [ 'test-widget-handler' ];
	}

	/**
	 * Register widget controls.
	 *
	 * Add input fields to allow the user to customize the widget settings.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'some_number',
			[
				'label' => esc_html__( 'Some Number', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::NUMBER,
				'default' => 100,
				'frontend_available' => true,
			]
		);

		$this->end_controls_section();

	}

	/**
	 * Render widget output on the frontend.
	 *
	 * Written in PHP and used to generate the final HTML.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function render() {
		?>
		<div class="test-widget"></div>
		<?php
	}

	/**
	 * Render widget output in the editor.
	 *
	 * Written as a Backbone JavaScript template and used to generate the live preview.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function content_template() {
		?>
		<div class="test-widget"></div>
		<?php
	}

}
```

Please note that the widget's `render()` method does not display any output. We want to insert the data from the control using JS. To do that, we registered a JS script located in `js/test-widget.js`, using the `get_style_depends()` method.

Now, the widget JS handler class should extend the `elementorModules.frontend.handlers.Base` class. This base class acts as an "abstract" class, defining basic methods like `onInit()` and providing access to the exposed control data using `getElementSettings()`.

```js
/**
 * Test Widget JS Handler Class
 */
class TestWidgetHandler extends elementorModules.frontend.handlers.Base {

	/**
	 * Update Test Widget Content
	 *
	 * Custom method used by test-widget that inserts the control value using JS.
	 */
	updateTestWidgetContent() {
		if ( ! this.contentWrapper ) {
			const widgetUniqueSelector = `div[data-id="${this.getID()}"] .test-widget`;
			this.contentWrapper = document.querySelector( widgetUniqueSelector );
		}

		this.contentWrapper.innerText = this.getElementSettings( 'some_number' );
	}

	/**
	 * On Init
	 *
	 * Runs when the widget is loaded and initialized in the frontend.
	 */
	onInit() {
		this.updateTestWidgetContent();
	}

	/**
	 * On Element Change
	 *
	 * Runs every time a control value is changed by the user in the editor.
	 *
	 * @param {string} propertyName - The ID of the control that was changed.
	 */
	onElementChange( propertyName ) {
		if ( 'some_number' === propertyName ) {
			this.updateTestWidgetContent();
		}
	}

}

/**
 * Register JS Handler for the Test Widget
 *
 * When Elementor frontend was initiated, and the widget is ready, register the widet
 * JS handler.
 */
window.addEventListener( 'elementor/frontend/init', () => {
	const addHandler = ( $element ) => {
		elementorFrontend.elementsHandler.addHandler( TestWidgetHandler, { $element } );
	};

	elementorFrontend.hooks.addAction( 'frontend/element_ready/test_widget.default', addHandler );
} );
```
