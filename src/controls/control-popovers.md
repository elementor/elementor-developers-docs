# Control Popovers

Control popovers are UI wrappers used to group controls and display them in popups, which will appear over the panel. Using popovers can help you can declutter the panel by moving controls to popovers and displaying them only when the user chooses to see them. An excellent example of this is the typography control. It contains a toggle, and only if the user chooses to change the default typography settings will the extra controls appear in a popover. Popovers are created using two methods: `start_popover()` creates a new popover and `end_popover()` closes the popover.

## Control Popovers Structure

Use the following code to add a new control popover:

```php
$this->add_control(
	'popover-toggle',
	[
		'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,
		'label' => esc_html__( 'Box', 'plugin-name' ),
		'label_off' => esc_html__( 'Default', 'plugin-name' ),
		'label_on' => esc_html__( 'Custom', 'plugin-name' ),
		'return_value' => 'yes',
	]
);

$this->start_popover();

$this->end_popover();
```

## Control Parameters

Each control has the following key parameters:

* **Popover Name** `(string)` – Unique id used in the code.
* **Popover Setting** `(array)` – Extra popover parameters.
  * **Label** `(string)` – Label displayed to the user in the panel.
  * **Type** `(string)` – The control type.
  * **Label Off** `(string)` – Label displayed when default settings are set.
  * **Label On** `(string)` – Label displayed when custom settings are set.
  * **Return Value** `(string)` – String returned when custom settings are set.
  * **Conditions** `(array)` – Control display conditions.

## Examples

### Control Popovers

In the example below, we'll group controls into two popovers - "Normal" tab and "Hover" tab:

```php {13-22,24,32}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'style_section',
			[
				'label' => esc_html__( 'Style Section', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'popover-toggle',
			[
				'label' => esc_html__( 'Box', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,
				'label_off' => esc_html__( 'Default', 'plugin-name' ),
				'label_on' => esc_html__( 'Custom', 'plugin-name' ),
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
