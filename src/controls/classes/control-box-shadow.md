# Box Shadow Control

Elementor Box Shadow control displays an input fields for horizontal shadow, vertical shadow, shadow blur, shadow spread and shadow color.

The control is defined in `Control_Box_Shadow` class which extends `Control_Base_Multiple` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::BOX_SHADOW` constant.

## Arguments


## Return Value

```
[
	'horizontal' => 0,
	'vertical' => 0,
	'blur' => 10,
	'spread' => 0,
	'color' => 'rgba(0,0,0,0.5)',
]
```

(_`array`_) An array containing box shadow data:

* **$horizontal** (_`int`_) Box shadow horizontal size.
* **$vertical** (_`int`_) Box shadow vertical size.
* **$blur** (_`int`_) Box shadow blur.
* **$spread** (_`int`_) Box shadow spread.
* **$color** (_`string`_) Box shadow color.

## Usage

```php {14-23}
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'style_section',
			[
				'label' => esc_html__( 'Style', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'custom_box_shadow',
			[
				'label' => esc_html__( 'Box Shadow', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::BOX_SHADOW,
				'selectors' => [
					'{{SELECTOR}}' => 'box-shadow: {{HORIZONTAL}}px {{VERTICAL}}px {{BLUR}}px {{SPREAD}}px {{COLOR}};',
				],
			]
		);

		$this->end_controls_section();

	}

}
```

## Notes

Please not that developers should not use this control rather the [Box Shadow Group Control](./../../../controls/classes/group-control-box-shadow).
