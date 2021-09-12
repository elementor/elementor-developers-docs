# Dynamic Tags Controls

Simple tags return dynamic data that have no dependencies, such as a random number. More complex tags may have optional fields where users can configure their custom data, such as a random number where the user can set minimum and maximum values. Later, the render method will use those custom fields to generate the final output.

## Registering Controls

To set custom controls for dynamic tags, use the `register_controls()` method as follows:

```php
Class Elementor_Test_Tag extends \Elementor\Core\DynamicTags\Tag {

	protected function register_controls() {

		$this->add_control(
			'text_param',
			[
				'type' => \Elementor\Controls_Manager::TEXT,
				'label' => esc_html__( 'Text Param', 'plugin-name' ),
				'placeholder' => esc_html__( 'Enter your title', 'plugin-name' ),
			]
		);

		$this->add_control(
			'number_param',
			[
				'type' => \Elementor\Controls_Manager::NUMBER,
				'label' => esc_html__( 'Number Param', 'plugin-name' ),
				'min' => 0,
				'max' => 100,
				'step' => 1,
				'default' => 50,
			]
		);

		$this->add_control(
			'select_param',
			[
				'type' => \Elementor\Controls_Manager::SELECT,
				'label' => esc_html__( 'Select Param', 'plugin-name' ),
				'options' => [
					'default' => esc_html__( 'Default', 'plugin-name' ),
					'yes' => esc_html__( 'Yes', 'plugin-name' ),
					'no' => esc_html__( 'No', 'plugin-name' ),
				],
				'default' => 'no',
			]
		);

	}

}
```

The same control mechanism is used for [widget controls](/widgets/widget-controls).
