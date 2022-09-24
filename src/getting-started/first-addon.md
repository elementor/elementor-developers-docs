# Creating Your First Addon

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

Let’s create a simple Elementor addon that adds two widgets to Elementor. The first will be a simple "Hello World" widget while the second will be similar, but with improved functionality. 

## Addon Folder Structure

The first step will be to register the two widgets.

The addon should be placed on your site’s `wp-content/plugins/` folder with the folder structure looking like this:

```
elementor-addon/
|
├─ widgets/
|  ├─ hello-world-widget-1.php
|  └─ hello-world-widget-2.php
|
└─ elementor-addon.php
```

You can zip the entire `elementor-addon` folder and upload the `zip` file to your site from "_WordPress Dashboard_" > "_Plugins_" screen.

## Addon files

These widgets will require several files. The main file `elementor-addon.php` will register the widgets. The `hello-world-widget-1.php` and `hello-world-widget-2.php` files will control the widget’s functionality: 

### The Main Addon File

**elementor-addon.php**

```php
<?php
/**
 * Plugin Name: Elementor Addon
 * Description: Simple hello world widgets for Elementor.
 * Version:     1.0.0
 * Author:      Elementor Developer
 * Author URI:  https://developers.elementor.com/
 * Text Domain: elementor-addon
 */

function register_hello_world_widget( $widgets_manager ) {

	require_once( __DIR__ . '/widgets/hello-world-widget-1.php' );
	require_once( __DIR__ . '/widgets/hello-world-widget-2.php' );

	$widgets_manager->register( new \Elementor_Hello_World_Widget_1() );
	$widgets_manager->register( new \Elementor_Hello_World_Widget_2() );

}
add_action( 'elementor/widgets/register', 'register_hello_world_widget' );
```

Header comments are the standard way WordPress uses to provide information about plugins:

<img :src="$withBase('/assets/img/elementor-addon-plugin-screen.png')" alt="Plugins screen">

Elementor register new widgets with the widget registration function. Here, we will use the `elementor/widgets/register` lifecycle hook to run the `register_hello_world_widget()` function.

The function first loads the two widget files and then registers the widget classes using the widget manager. After running the code, the widget panel will display the two widgets:

<img :src="$withBase('/assets/img/elementor-addon-widgets.png')" alt="The two widgets in the widgets panel">

### The First Widget

The first widget is `widgets/hello-world-widget-1.php`. It’s quite simple, it simply prints the text, "Hello World" on the screen. Create it using the following code:

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

### The Second Widget

The second widget is `widgets/hello-world-widget-2.php`. It creates two controls in the widget panel. One allows the user to enter their own text and style the text with a custom color (with "Hello World" being the default text). Create it using the following code:

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
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
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

Now that you’ve seen how easy it is to create your first Elementor addon, it’s time to take advantage of the growing Elementor market and start working on your own cool ideas.

Continue reading more about [Building Advanced Addons](./../addons/) with best practices, codding standarts and even more [code examples](./../addons/addon-example/).
