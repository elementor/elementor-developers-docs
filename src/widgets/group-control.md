# Group Control

**Group Control** is a set of [regular controls](./regular-control) and [responsive controls](./responsive-control) with similar functionality, which are grouped together into a single control (e.g. typography control, text shadow control, box shadow control, etc.). To add group controls to Elementor widgets, we use the `add_group_control()` method.

## Group Control Structure

Use the following to add  new group controls:

```php
$this->add_group_control(
	Group_Control_Class::get_type(),
	[
		'name' => 'control_name',
		'label' => __( 'Content', 'plugin-name' ),
	]
);
```

## Control Parameters

Each control has the following key parameters:

  * **Group Control Type** `(string)` – Unique name of a group control.
  * **Group Control Setting** `(array)` – Extra control parameters.
  * **Name** `(string)` – Unique ID used in the code. (Only chars, numbers and underscore are allowed)
  * **Label** `(string)` – Label displayed to the user in the panel.
  * **Separator** `(string)` – The position of the separator.
  * **Frontend Available** `(bool)` – Whether or not the data is available in the frontend using `getSettings()`.
  * **Conditions** `(array)` – Control display conditions.

**Note**: Each control has its own set of *Custom Settings* in addition to the default settings mentioned above.

## Examples

### Typography Control

When adding titles and custom content to Elementor widgets, we need to allow the user to design the text. We can use the typography control defined in the `Group_Control_Typography` class to set font size, font family, font weight, text transform, font style, line height and letter spacing.

```php {13-19}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'style_section',
			[
				'label' => __( 'Style', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'title_typography',
				'selector' => '{{WRAPPER}} .title',
			]
		);

		$this->end_controls_section();

	}

}
```

### Border Control

Border control is a bit different from typography control. It is defined in the `Group_Control_Border` class to set border type, border width and border color:

```php {13-19}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'style_section',
			[
				'label' => __( 'Style', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'border',
				'selector' => '{{WRAPPER}} .wrapper',
			]
		);

		$this->end_controls_section();

	}

}
```
