# Control Values

You can set custom default value for your control. If, for example, you added new field, you can define their default value.

## Control Default Value

Set the default values to display when initializing the control. Please note that some controls return single value (strings, numbers bool etc.), while other controls return arrays. Make sure you set a default value with the same data type.

Settings default a value for a [data control](./data-controls) which return a single value:

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

<!--
Settings default a value for a [multi value control](./multi-value-controls) which return an array:

```php
class Elementor_Test_Control extends \Elementor\Control_Base_Multiple  {

	public function get_default_value() {
		return [
			'width' => '',
			'height' => '',
		];
	}

}
```
-->

## Overriding Default Values

When controls are used in widgets, you can either use the default value set by the control or override it and set your own default values:

```php {14-21,23-31}
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

		// Control default value will be used, i.e. 'Europe'
		$this->add_control(
			'continent_1',
			[
				'label' => __( 'Continent 1', 'plugin-name' ),
				'type' => 'continents-control',
			]
		);

		// Custom default value will be used, i.e. 'North America'
		$this->add_control(
			'continent_2',
			[
				'label' => __( 'Continent 2', 'plugin-name' ),
				'type' => 'continents-control',
				'default' => 'North America',
			]
		);

		$this->end_controls_section();

	}

}
```