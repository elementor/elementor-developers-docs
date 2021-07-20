# Responsive Control

**Responsive Controls** are [regular controls](./regular-control) with special capability that lets the user set different values to different devices and screen sizes. To add Responsive Controls to Elementor widgets we are using the `add_responsive_control()` method.

## Responsive Control Structure

Adding a new responsive controls is done as follows:

```php
$this->add_responsive_control(
	'control-name',
	[
		'label' => __( 'Spacing', 'plugin-name' ),
		'type' => \Elementor\Controls_Manager::SLIDER,
	]
);
```

## Control Parameters

Each control has the following key parameters:

* **Control Name** `(string)` – Unique id used in the code.
* **Control Setting** `(array)` – Extra control parameters.
  * **Type** `(string)` – The control type.
  * **Label** `(string)` – The label displayed to the user in the panel.
  * **Show Label** `(bool)` – Whether to show the label.
  * **Label Block** `(bool)` – Whether to display the label in a separate line.
  * **Separator** `(string)` – The position of the separator.

**Note**: Each control has its own set of Custom Settings in addition to the default settings mentioned above.

## Examples

### Responsive Slider

The regular slider control defined in `Control_Slider` adds a draggable range slider. To make it responsive and allow the user to set different values based on the device, we will use the following code:

```php {13-41}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function _register_controls() {

		$this->start_controls_section(
			'style_section',
			[
				'label' => __( 'Style Section', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'space_between',
			[
				'type' => \Elementor\Controls_Manager::SLIDER,
				'label' => __( 'Spacing', 'plugin-name' ),
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'devices' => [ 'desktop', 'tablet', 'mobile' ],
				'desktop_default' => [
					'size' => 30,
					'unit' => 'px',
				],
				'tablet_default' => [
					'size' => 20,
					'unit' => 'px',
				],
				'mobile_default' => [
					'size' => 10,
					'unit' => 'px',
				],
				'selectors' => [
					'{{WRAPPER}} .widget-image' => 'margin-bottom: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();

	}

}
```

### Responsive Dimensions

Another handy control is the dimensions control that defined in `Control_Dimensions`. It adds input fields for top, right, bottom, left and the option to link them together. It’s is usually used for Margins, Paddings and Borders. With responsive dimensions we can set different values based on the device:

```php {13-23}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function _register_controls() {

		$this->start_controls_section(
			'style_section',
			[
				'label' => __( 'Style Section', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'title_padding',
			[
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'label' => __( 'Padding', 'plugin-name' ),
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} .widget-title' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();

	}

}
```

### Responsive Choose

Finally we are going to use Select/Choose control defined in `Control_Choose` to set custom alignment with responsive values allowing the user to set different alignment for different screen sizes.

```php {13-35}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function _register_controls() {

		$this->start_controls_section(
			'style_section',
			[
				'label' => __( 'Style Section', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'content_align',
			[
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'label' => __( 'Alignment', 'plugin-name' ),
				'options' => [
					'left' => [
						'title' => __( 'Left', 'plugin-name' ),
						'icon' => 'fa fa-align-left',
					],
					'center' => [
						'title' => __( 'Center', 'plugin-name' ),
						'icon' => 'fa fa-align-center',
					],
					'right' => [
						'title' => __( 'Right', 'plugin-name' ),
						'icon' => 'fa fa-align-right',
					],
				],
				'devices' => [ 'desktop', 'tablet' ],
				'prefix_class' => 'content-align-%s',
			]
		);

		$this->end_controls_section();

	}

}
```
