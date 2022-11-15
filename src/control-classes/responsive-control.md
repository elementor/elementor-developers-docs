# Responsive Control

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

Responsive controls are basically [regular controls](./regular-control/) with special capabilities that let users set different values for different devices and screen sizes. To add responsive controls we use the `add_responsive_control()` method.

## Responsive Control Structure

The following code will add a new responsive control:

```php
$this->add_responsive_control(
	'control-name',
	[
		'label' => esc_html__( 'Spacing', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::SLIDER,
	]
);
```

## Control Parameters

Each control has the following key parameters:

* **Control Name** `(string)` – Unique ID used in the code.
* **Control Setting** `(array)` – Extra control parameters. Each control has its own set of *custom settings* in addition to the default settings based on the control type. Responsive controls have additional device-based setting like the different default values based on the screen size.

## Examples

### Responsive Slider

The regular slider control defined in `Control_Slider` adds a draggable range slider. To make it responsive, and allow the user to set different values based on the device, use the following code:

```php {13-41}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'style_section',
			[
				'label' => esc_html__( 'Style Section', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'space_between',
			[
				'type' => \Elementor\Controls_Manager::SLIDER,
				'label' => esc_html__( 'Spacing', 'textdomain' ),
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

Another handy control is the dimensions control, defined in `Control_Dimensions`. It adds input fields for top, right, bottom, left and includes the option to link the fields together. It’s usually used for margins, paddings and borders. With responsive dimensions, we can set different values based on the device:

```php {13-23}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'style_section',
			[
				'label' => esc_html__( 'Style Section', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'title_padding',
			[
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'label' => esc_html__( 'Padding', 'textdomain' ),
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

Finally, we are going to use the select/choose control, which is defined in `Control_Choose`. This will allow us to set custom alignments with responsive values, allowing users to set different alignments for different screen sizes.

```php {13-35}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'style_section',
			[
				'label' => esc_html__( 'Style Section', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'content_align',
			[
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'label' => esc_html__( 'Alignment', 'textdomain' ),
				'options' => [
					'left' => [
						'title' => esc_html__( 'Left', 'textdomain' ),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'textdomain' ),
						'icon' => 'eicon-text-align-center',
					],
					'right' => [
						'title' => esc_html__( 'Right', 'textdomain' ),
						'icon' => 'eicon-text-align-right',
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
