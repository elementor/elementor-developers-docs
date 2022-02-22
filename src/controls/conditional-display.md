# Conditional Display

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

In some cases you need to diaply controls based on user selection in a dependent controls. For example, if a switcher control is turrned on then display few more controls. The controls mechnism in the editor has a special conditional display functionality. Let's see how to use it up.

## Condition Argument

To set conditional display to Elementor controls, use the `condition` argument in any control:

```php{6-8}
$this->add_control(
	'unique-control-name',
	[
		'label' => esc_html__( 'Control Label', 'plugin-name' ),
		'type' => \Elementor\Controls_Manager::TEXT,
		'condition' => [
			'dependent-control-name' => 'dependent-control-value',
		],
	]
);
```

## Multiple Conditions

Display conditions may depend on the number of controls. This is why the `condition` argument accepts an `array`. It checks if *all* the conditions are meet to decide whether the display the control.

To set multiple conditions, pass several values:

```php{6-10}
$this->add_control(
	'unique-control-name',
	[
		'label' => esc_html__( 'Control Label', 'plugin-name' ),
		'type' => \Elementor\Controls_Manager::TEXT,
		'condition' => [
			'dependent-control-1-name' => 'dependent-control-1-value',
			'dependent-control-2-name' => 'dependent-control-2-value',
			'dependent-control-3-name' => 'dependent-control-3-value',
		],
	]
);
```

## Equality Operators

A condition has two equality operators, it can check whether the control value *equal* OR *not equal* to some value.

### Equality Check

Display controls only if the dependent control equals to some value:

```php
'condition' => [
	'control-name' => 'control-value',
],
```

### Inequality Check

Display controls only if the dependent control is not equals to some value:

```php
'condition' => [
	'control-name!' => 'control-value',
],
```

We simply add a `!` suffix to the control name.

## Condition Example

Let's start with an example in which we want to allow the user to set borders and style them. To smplify the user-experiance, we initialy hide all the border controls and leave only a [switcher](./../controls/classes/control-switcher/). If the user turns on the switcher, he will see all the border controls.

```php{2,25-27,41-43,55-57}
$this->add_control(
	'border',
	[
		'label' => esc_html__( 'Border', 'plugin-name' ),
		'type' => \Elementor\Controls_Manager::SWITCHER,
	]
);

$this->add_control(
	'border_style',
	[
		'label' => esc_html__( 'Border Style', 'plugin-name' ),
		'type' => \Elementor\Controls_Manager::SELECT,
		'options' => [
			'' => esc_html__( 'None', 'plugin-name' ),
			'solid' => esc_html__( 'Solid', 'plugin-name' ),
			'double' => esc_html__( 'Double', 'plugin-name' ),
			'dotted' => esc_html__( 'Dotted', 'plugin-name' ),
			'dashed' => esc_html__( 'Dashed', 'plugin-name' ),
			'groove' => esc_html__( 'Groove', 'plugin-name' ),
		],
		'selectors' => [
			'{{WRAPPER}} .inner_class' => 'border-style: {{VALUE}}',
		],
		'condition' => [
			'border' => 'yes',
		],

	]
);

$this->add_control(
	'border_color',
	[
		'label' => esc_html__( 'Border Color', 'plugin-name' ),
		'type' => \Elementor\Controls_Manager::COLOR,
		'default' => '',
		'selectors' => [
			'{{WRAPPER}} .inner_class' => 'border-color: {{VALUE}}',
		],
		'condition' => [
			'border' => 'yes',
		],
	]
);

$this->add_responsive_control(
	'border_width',
	[
		'label' => esc_html__( 'Border Width', 'plugin-name' ),
		'type' => \Elementor\Controls_Manager::DIMENSIONS,
		'selectors' => [
			'{{WRAPPER}} .inner_class' => 'border-width: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
		],
		'condition' => [
			'border' => 'yes',
		],
	]
);
```

The example above shows us how all the border controls are dependent on a single border control. To set multiple dependent controls, we can set more conditions as the user adds more input.

In the example bellow the user first needs the turn on the switcher and then to set the border style, only then he will see the colors & width controls. We use multiple conditions with both equality and inequality checks.

```php{2,25-27,41-44,56-59}
$this->add_control(
	'border',
	[
		'label' => esc_html__( 'Border', 'plugin-name' ),
		'type' => \Elementor\Controls_Manager::SWITCHER,
	]
);

$this->add_control(
	'border_style',
	[
		'label' => esc_html__( 'Border Style', 'plugin-name' ),
		'type' => \Elementor\Controls_Manager::SELECT,
		'options' => [
			'' => esc_html__( 'None', 'plugin-name' ),
			'solid' => esc_html__( 'Solid', 'plugin-name' ),
			'double' => esc_html__( 'Double', 'plugin-name' ),
			'dotted' => esc_html__( 'Dotted', 'plugin-name' ),
			'dashed' => esc_html__( 'Dashed', 'plugin-name' ),
			'groove' => esc_html__( 'Groove', 'plugin-name' ),
		],
		'selectors' => [
			'{{WRAPPER}} .inner_class' => 'border-style: {{VALUE}}',
		],
		'condition' => [
			'border' => 'yes',
		],

	]
);

$this->add_control(
	'border_color',
	[
		'label' => esc_html__( 'Border Color', 'plugin-name' ),
		'type' => \Elementor\Controls_Manager::COLOR,
		'default' => '',
		'selectors' => [
			'{{WRAPPER}} .inner_class' => 'border-color: {{VALUE}}',
		],
		'condition' => [
			'border' => 'yes',
			'border_style!' => '',
		],
	]
);

$this->add_responsive_control(
	'border_width',
	[
		'label' => esc_html__( 'Border Width', 'plugin-name' ),
		'type' => \Elementor\Controls_Manager::DIMENSIONS,
		'selectors' => [
			'{{WRAPPER}} .inner_class' => 'border-width: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
		],
		'condition' => [
			'border' => 'yes',
			'border_style!' => '',
		],
	]
);
```
