# Text Shadow Control

Elementor Text Shadow control displays an input fields for horizontal shadow, vertical shadow, shadow blur and shadow color.

The control is defined in `Control_Text_Shadow` class which extends `Control_Base_Multiple` class.

Note that when using the control, the type should be set using the `\Elementor\Controls_Manager::TEXT_SHADOW` constant.

## Arguments


## Return Value

```
[
	'horizontal' => 0,
	'vertical' => 0,
	'blur' => 10,
	'color' => 'rgba(0,0,0,0.3)',
];
```

(_`array`_) An array containing text shadow data:

* **$horizontal** (_`int`_) Text shadow horizontal size.
* **$vertical** (_`int`_) Text shadow vertical size.
* **$blur** (_`int`_) Text shadow blur.
* **$color** (_`string`_) Text shadow color.

## Usage

```php {14-23}
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'custom_text_shadow'
			[
				'label' => esc_html__( 'Text Shadow', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::TEXT_SHADOW,
				'selectors' => [
					'{{SELECTOR}}' => 'text-shadow: {{HORIZONTAL}}px {{VERTICAL}}px {{BLUR}}px {{COLOR}};',
				],
			]
		);

		$this->end_controls_section();

	}

}
```

## Notes

Please not that developers should not use this control rather the [Text Shadow Group Control](./group-control-text-shadow).
