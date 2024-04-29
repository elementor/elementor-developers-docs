# Group Control

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

Group Control is a set of [regular controls](./regular-control/) and [responsive controls](./responsive-control/) with similar functionality, which are grouped together into a single control (e.g. typography control, text shadow control, box shadow control). To add group controls we use the `add_group_control()` method.

## Group Control Structure

Use the following code to add  group controls:

```php
$this->add_group_control(
	Group_Control_Class::get_type(),
	[
		'name' => 'control_name',
		'label' => esc_html__( 'Content', 'textdomain' ),
	]
);
```

## Control Parameters

Each control has the following key parameters:

* **Group Control Type** `(string)` – Unique name of a group control.
* **Group Control Setting** `(array)` – Extra control parameters. Each control has its own set of *custom settings* in addition to the default settings based on the control type. For example, the "exclude" setting will allow to exclude some inner controls from the group.

## Examples

### Typography Control

When adding titles and custom content to Elementor widgets, we need to allow the user to design the text. We can use the typography control defined in the `Group_Control_Typography` class to set font size, font family, font weight, text transform, font style, line height and letter spacing.

```php {13-19}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'style_section',
			[
				'label' => esc_html__( 'Style', 'textdomain' ),
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
				'label' => esc_html__( 'Style', 'textdomain' ),
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

### Advanced Group Control Label Modify

Here's an advanced setup for changing the background control label.

```php {13-19}
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'style_section',
			[
				'label' => esc_html__( 'Style', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_group_control(
		    Group_Control_Background::get_type(),
		    [
			'name'     => 'control_name',
			'label'    => esc_html__('Background', 'textdomain'),
			'types'    => ['classic', 'gradient', 'video'],
			'fields_options' => [
			    'background' => [
				'label' => 'New Label Here...'
			    ],
			],
			'selector' => '{{WRAPPER}}',
		    ]
		);

		$this->end_controls_section();

	}

}
```
