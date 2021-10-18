# Simple Example

Let's build an addon that adds a new control to Elementor. The control will display a select field with the ability to choose currencies.

## Folder Structure

The addon will have three files. The main file will register the control and the JS file. To test the control we will create a simple test widget.

```
elementor-currency-control/
|
├─ controls/
|  └─ currency.php
|
├─ widgets/
|  └─ currency-widget.php
|
└─ elementor-currency-control.php
```

## Plugin Files

**elementor-currency-control.php**

```php
<?php
/**
 * Plugin Name: Elementor Currency Control
 * Description: Add new Elementor control for currencies selection.
 * Plugin URI:  https://elementor.com/
 * Version:     1.0.0
 * Author:      Elementor Developer
 * Author URI:  https://developers.elementor.com/
 * Text Domain: elementor-currency-control
 *
 * Elementor tested up to: 3.5.0
 * Elementor Pro tested up to: 3.5.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Register Currency Control.
 *
 * Include control file and register control class.
 *
 * @since 1.0.0
 * @return void
 */
function register_currency_control() {

	require_once( __DIR__ . '/controls/currency.php' );

    \Elementor\Plugin::instance()->controls_manager->register_control( 'currency', new \Elementor_Currency_Control() );

}
add_action( 'elementor/controls/controls_registered', 'register_currency_control' );

/**
 * Register Currency Widget.
 *
 * Include widget file and register widget class.
 *
 * @since 1.0.0
 * @return void
 */
function register_currency_widget() {

	require_once( __DIR__ . '/widgets/currency-widget.php' );

	\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \Elementor_Currency_Widget() );

}
add_action( 'elementor/widgets/widgets_registered', 'register_currency_widget' );
```

**controls/currency.php**

```php
<?php
/**
 * Elementor currency control.
 *
 * A control for displaying a select field with the ability to choose currencies.
 *
 * @since 1.0.0
 */
class Elementor_Currency_Control extends \Elementor\Base_Data_Control {

	/**
	 * Get currency control type.
	 *
	 * Retrieve the control type, in this case `currency`.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Control type.
	 */
	public function get_type() {
		return 'currency';
	}

	/**
	 * Get currencies.
	 *
	 * Retrieve all the available currencies.
	 *
	 * @since 1.0.0
	 * @access public
	 * @static
	 *
	 * @return array Available currencies.
	 */
	public static function get_currencies() {
		return [
			'USD' => 'USD ($)',
			'EUR' => 'EUR (€)',
			'GBP' => 'GBP (£)',
			'JPY' => 'JPY (¥)',
			'ILS' => 'ILS (₪)',
		];
	}

	/**
	 * Get currency control default settings.
	 *
	 * Retrieve the default settings of the currency control. Used to return
	 * the default settings while initializing the currency control.
	 *
	 * @since 1.0.0
	 * @access protected
	 * @return array Currency control default settings.
	 */
	protected function get_default_settings() {
		return [
			'currencies' => self::get_currencies()
		];
	}

	/**
	 * Get currency control default value.
	 *
	 * Retrieve the default value of the currency control. Used to return the
	 * default value while initializing the control.
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @return array Currency control default value.
	 */
	public function get_default_value() {
		return 'EUR';
	}

	/**
	 * Render currency control output in the editor.
	 *
	 * Used to generate the control HTML in the editor using Underscore JS
	 * template. The variables for the class are available using `data` JS
	 * object.
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function content_template() {
		$control_uid = $this->get_control_uid();
		?>
		<div class="elementor-control-field">

			<# if ( data.label ) {#>
			<label for="<?php echo $control_uid; ?>" class="elementor-control-title">{{{ data.label }}}</label>
			<# } #>

			<div class="elementor-control-input-wrapper">
				<select id="<?php echo $control_uid; ?>" data-setting="{{ data.name }}">
					<option value=""><?php echo esc_html__( 'Select currency', 'elementor-currency-control' ); ?></option>
					<# _.each( data.currencies, function( currency_label, currency_value ) { #>
					<option value="{{ currency_value }}">{{{ currency_label }}}</option>
					<# } ); #>
				</select>
			</div>

		</div>

		<# if ( data.description ) { #>
		<div class="elementor-control-field-description">{{{ data.description }}}</div>
		<# } #>
		<?php
	}

}
```

**widgets/currency-widget.php**

```php
<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Elementor Currency Widget.
 *
 * Elementor widget that uses the currency control.
 *
 * @since 1.0.0
 */
class Elementor_Currency_Widget extends \Elementor\Widget_Base {

	/**
	 * Get widget name.
	 *
	 * Retrieve currency widget name.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget name.
	 */
	public function get_name() {
		return 'currency';
	}

	/**
	 * Get widget title.
	 *
	 * Retrieve currency widget title.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget title.
	 */
	public function get_title() {
		return esc_html__( 'Currency', 'elementor-currency-control' );
	}

	/**
	 * Get widget icon.
	 *
	 * Retrieve currency widget icon.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget icon.
	 */
	public function get_icon() {
		return 'eicon-cart-medium';
	}

	/**
	 * Get custom help URL.
	 *
	 * Retrieve a URL where the user can get more information about the widget.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget help URL.
	 */
	public function get_custom_help_url() {
		return 'https://developers.elementor.com/widgets/';
	}

	/**
	 * Get widget categories.
	 *
	 * Retrieve the list of categories the currency widget belongs to.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return array Widget categories.
	 */
	public function get_categories() {
		return [ 'general' ];
	}

	/**
	 * Get widget keywords.
	 *
	 * Retrieve the list of keywords the currency widget belongs to.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return array Widget keywords.
	 */
	public function get_keywords() {
		return [ 'currency', 'currencies' ];
	}

	/**
	 * Register currency widget controls.
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
				'label' => esc_html__( 'Content', 'elementor-currency-control' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'price',
			[
				'label' => esc_html__( 'Price', 'elementor-currency-control' ),
				'type' => \Elementor\Controls_Manager::NUMBER,
				'default' => 100,
			]
		);

		$this->add_control(
			'price_currency',
			[
				'label' => esc_html__( 'Currency', 'elementor-currency-control' ),
				'type' => 'currency',
			]
		);

		$this->end_controls_section();

	}

	/**
	 * Render currency widget output on the frontend.
	 *
	 * Written in PHP and used to generate the final HTML.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function render() {
		$settings = $this->get_settings_for_display();
		echo $settings['price_currency'] . ' ' . $settings['price'];
	}

}
```

## The Result

![Currency control in a widget](/assets/img/elementor-control-currencies.png)
