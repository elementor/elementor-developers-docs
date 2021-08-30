# Rendering Text

The most common [widget rendering](./widget-rendering) use case is to print the value of a simple text control. These controls are usually found in the content tab.

## Printing Text Values

Let's say you have a widget with a single control in which the users can set a "title". To print the title entered by the user, we simply echo the control value:

```php {14-22,28-31,33-37}
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'section_content',
			[
				'label' => __( 'Content', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'title',
			[
				'label' => __( 'Title', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'placeholder' => __( 'Enter your title', 'plugin-name' ),
			]
		);

		$this->end_controls_section();

	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		echo '<h3>' . $settings['title'] . '</h3>';
	}

	protected function content_template() {
		?>
		<h3>{{{ settings.title }}}</h3>
		<?php
	}

}
```
