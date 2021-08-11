# Dynamic Tags Controls

Simple tags return dynamic data that has no dependencies, for example a random number. More complex tags may have optional fields where the user can configure his custom data, for example a random number where the user can set a minimum and a maximum values. Later on, the render method will use those custom fields to generate the final output.

## Registering Controls

To set custom controls for dynamic tags use the `register_controls()` method as follows:

```php
Class Elementor_Test_Tag extends \Elementor\Core\DynamicTags\Tag {

	protected function register_controls() {

		$this->add_control(
			'text_param',
			[
				'type' => \Elementor\Controls_Manager::TEXT,
				'label' => __( 'Text Param', 'plugin-name' ),
				'placeholder' => __( 'Enter your title', 'plugin-name' ),
			]
		);

		$this->add_control(
			'number_param',
			[
				'type' => \Elementor\Controls_Manager::NUMBER,
				'label' => __( 'Number Param', 'plugin-name' ),
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
				'label' => __( 'Select Param', 'plugin-name' ),
				'options' => [
					'default' => __( 'Default', 'plugin-name' ),
					'yes' => __( 'Yes', 'plugin-name' ),
					'no' => __( 'No', 'plugin-name' ),
				],
				'default' => 'no',
			]
		);

	}

}
```

The same control mechanism used for [Widget Controls](/widgets/widget-controls).
