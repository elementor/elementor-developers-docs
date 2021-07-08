# Rendering Style

Another common [widget rendering](./widget-rendering) use-case is using the control value to style different HTML elements. Usually used by controls from the "Content" tab.

## Styling Elements

Let's say you have a widget with a two controls in which the users can set a title and control the element "color".

```php {34-44}
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function _register_controls() {

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

		$this->start_controls_section(
			'section_style',
			[
				'label' => __( 'Style', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'color',
			[
				'label' => __( 'Color', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '#f00',
				'selectors' => [
					'{{WRAPPER}} h3' => 'color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_section();

	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		echo '<h3>' . $settings['title'] . '</h3>';
	}

	protected function _content_template() {
		?>
		<h3>{{{ settings.title }}}</h3>
		<?php
	}

}
```

Note that each element in the page includes a set of style settings that are printed as CSS rules under a unique element selector. The widget can easily use the returned control value has a design rule.

Our test widget will add custom CSS rules to the page CSS file. Those rules will affect only this widget as the use `{ { WRAPPER } }` prefix meaning that only this instance of the widget will use this color.