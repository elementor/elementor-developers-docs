# Control Popovers

**Control Popovers** are UI wrappers used to group controls and display them in popups over the panel. When using popovers you can clean your panel by moving controls to popups and display them only when the user choose to see them by clicking the popover control. The best example to understand popovers is to see how the typography control works. Typography has a toggle control, only if the user choose to change the default typography settings he will see the extra controls in a popover. Popovers are created using two methods: `start_popover()` creates a new popover and `end_popover()` closes the popover.

## Control Popovers Structure

Adding a new control popovers is done as follows:

```php
$this->add_control(
	'popover-toggle',
	[
		'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,
		'label' => __( 'Box', 'plugin-name' ),
		'label_off' => __( 'Default', 'plugin-name' ),
		'label_on' => __( 'Custom', 'plugin-name' ),
		'return_value' => 'yes',
	]
);

$this->start_popover();

$this->end_popover();
```

## Control Parameters

Each control has the following key parameters:

* **Popovers Name** `(string)` – Unique id used in the code.
* **Popovers Setting** `(array)` – Extra popover parameters.
* **Label** `(string)` – Label displayed to the user in the panel.
  * **Type** `(string)` – The control type.
  * **Label Off** `(string)` – Label displayed when default settings are set.
  * **Label On** `(string)` – Label displayed when custom settings are set.
  * **Return Value** `(string)` – String returned when custom settings are set.

## Examples

### Control Popovers

Let's group controls into two popovers, "Normal" tab and "Hover" tab:

```php {13-22,24,32}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'style_section',
			[
				'label' => __( 'Style Section', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'popover-toggle',
			[
				'label' => __( 'Box', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,
				'label_off' => __( 'Default', 'plugin-name' ),
				'label_on' => __( 'Custom', 'plugin-name' ),
				'return_value' => 'yes',
			]
		);

		$this->start_popover();

		$this->add_control();

		$this->add_control();

		$this->add_control();

		$this->end_popover();

		$this->end_controls_section();

	}

}
```