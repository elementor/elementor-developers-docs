# Writing Your First Addon

To get started we will create a simple Elementor addon that registers two widget. The initial version will be a simple "Hello World" widget and as we go we will improve the widget with new functionality.

## Addon Folder Structure

Assuming you know how to create WordPress plugins, the plugin folder structure will look as follows:

```
elementor-addon/
|
├─ widgets/
|  ├─ hello-world-widget-1.php
|  └─ hello-world-widget-2.php
|
└─ elementor-addon.php
```

The plugin should be placed on your sites `wp-content/plugins/` folder.

You can zip the entire `elementor-addon` folder and upload the zip file to your site from "_WordPress Dashboard_" > "_Plugins_" screen.

## Addon files

The addon will have several files. The main file `elementor-addon.php` will register the widgets. The `hello-world-widget-1.php` and `hello-world-widget-2.php` files which will have the widgets functionality.

### Main Addon File

**elementor-addon.php**

```php
<?php
/**
 * Plugin Name: Elementor Addon
 * Description: Simple hello world widgets for Elementor.
 * Version:     1.0.0
 * Author:      Elementor Developer
 * Author URI:  https://developers.elementor.com/
 */

function register_hello_world_widget() {

	require_once( __DIR__ . '/widgets/hello-world-widget-1.php' );
	require_once( __DIR__ . '/widgets/hello-world-widget-2.php' );

	\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \Elementor_Hello_World_Widget_1() );
	\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \Elementor_Hello_World_Widget_2() );

}
add_action( 'elementor/widgets/widgets_registered', 'register_hello_world_widget' );
```

The header comments are a basic way WordPress uses to provide information about plugins.

![Plugins screen](/assets/img/elementor-addon-plugin-screen.png)

The widget registration function is the way Elementor registers new widgets. We use the `elementor/widgets/widgets_registered` lifecycle hook and run the `register_hello_world_widget()` function.

The function first loads the two widget files and then registers the widget classes using the widget manager.

![The two widgets in the widgets panel](/assets/img/elementor-addon-widgets.png)

### 1st Widget

**widgets/hello-world-widget-1.php**

```php
<?php
class Elementor_Hello_World_Widget_1 extends \Elementor\Widget_Base {

	public function get_name() {
		return 'hello_world_widget_1';
	}

	public function get_title() {
		return esc_html__( 'Hello World 1', 'elementor-addon' );
	}

	public function get_icon() {
		return 'eicon-code';
	}

	public function get_categories() {
		return [ 'basic' ];
	}

	public function get_keywords() {
		return [ 'hello', 'world' ];
	}

	protected function render() {
		?>

		<p> Hello World </p>

		<?php
	}
}
```

This a simple widget. It only prints "Hello World" text on screen.

### 2nd Widget

**widgets/hello-world-widget-2.php**

```php
<?php
class Elementor_Hello_World_Widget_2 extends \Elementor\Widget_Base {

	public function get_name() {
		return 'hello_world_widget_2';
	}

	public function get_title() {
		return esc_html__( 'Hello World 2', 'elementor-addon' );
	}

	public function get_icon() {
		return 'eicon-code';
	}

	public function get_categories() {
		return [ 'basic' ];
	}

	public function get_keywords() {
		return [ 'hello', 'world' ];
	}

	protected function register_controls() {

		// Content Tab Start

		$this->start_controls_section(
			'section_title',
			[
				'label' => esc_html__( 'Title', 'elementor-addon' ),
			]
		);

		$this->add_control(
			'title',
			[
				'label' => esc_html__( 'Title', 'elementor-addon' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA,
				'default' => esc_html__( 'Hello world', 'elementor-addon' ),
			]
		);

		$this->end_controls_section();

		// Content Tab End


		// Style Tab Start

		$this->start_controls_section(
			'section_title_style',
			[
				'label' => esc_html__( 'Title', 'elementor-addon' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'title_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .hello-world' => 'color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_section();

		// Style Tab End

	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		?>

		<p class="hello-world">
			<?php echo $settings['title']; ?>
		</p>

		<?php
	}
}
```

The second widget has two controls on the widget panel. One allows the user to choose the text (default text is "Hello World") and style the text with custom color.
