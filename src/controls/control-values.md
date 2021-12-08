# Control Values

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

You can set custom default values for your control. For example, if you add a new field, you can define its default value.

## Control Default Value

Set the default values to display when initializing the control. Note that some controls return a single value (strings, numbers, bool etc.), while other controls return arrays. Make sure you set a default value with the same data type.

The following will set a default value for a [data control](./data-controls/), which will return a single value:

```php
class Elementor_Test_Control extends \Elementor\Base_Data_Control {

	public function get_type() {
		return 'continents-control';
	}

	protected function get_default_settings() {
		return [
			'continents' => [ 'Asia', 'Africa', 'Europe', 'North America', 'South America', 'Australia/Oceania', 'Antarctica', ]
		];
	}

	public function get_default_value() {
		return 'Europe';
	}

}
```

## Overriding Default Values

When controls are used in widgets, you can either use the default value set by the control or override it and set your own default values:

```php {14-21,23-31}
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'section_content',
			[
				'label' => esc_html__( 'Content', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		// Control default value will be used, i.e. 'Europe'
		$this->add_control(
			'continent_1',
			[
				'label' => esc_html__( 'Continent 1', 'plugin-name' ),
				'type' => 'continents-control',
			]
		);

		// Custom default value will be used, i.e. 'North America'
		$this->add_control(
			'continent_2',
			[
				'label' => esc_html__( 'Continent 2', 'plugin-name' ),
				'type' => 'continents-control',
				'default' => 'North America',
			]
		);

		$this->end_controls_section();

	}

}
```
