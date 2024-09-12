# Selectors Dictionary

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

In some cases, you may need to update the values of a specific control. But, doing this might break existing sites which store the old values in the database. For these cases, Elementor offers a dictionary that helps developers transform old values into new values before using them in the code.

## Selectors Dictionary Argument

Use the `selectors_dictionary` argument to replace old values with the new ones.

```php{6-9}
$this->add_control(
	'text-align',
	[
		'label' => esc_html__( 'Control Label', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::SELECT,
		'selectors_dictionary' => [
			'old-value-1' => 'new-value-1',
			'old-value-2' => 'new-value-2',
		],
	]
);
```

## Selectors Dictionary Examples

### Dictionary with Choose Control

Let's see how we can update control values and migrate the control from "**Physical CSS Properties**" to "[Logical CSS Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties)". We want to replace `text-align: right|center|left;` with `text-align: start|center|end;`.

The original control saved one of three values in the database - `right`, `center` or `left`:

```php{8,12,16}
$this->add_control(
	'text-align',
	[
		'label' => esc_html__( 'Alignment', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::CHOOSE,
		'default' => 'center',
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
		'selectors' => [
			'{{WRAPPER}} .some-class' => 'text-align: {{VALUE}};',
		],
	]
);
```

Now we want to swap out these values for the values - `start`, `center` or `end`. But, for backward compatibility, we have to offer a solution taking into account the old values saved in the database.

We can use `selectors_dictionary` to solve this issue:

```php{8-11,16-19,21-24}
$this->add_control(
	'text-align',
	[
		'label' => esc_html__( 'Alignment', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::CHOOSE,
		'default' => 'center',
		'options' => [
			'end' => [
				'title' => esc_html__( 'End', 'textdomain' ),
				'icon' => 'eicon-text-align-' . ( is_rtl() ? 'right' : 'left' ),
			],
			'center' => [
				'title' => esc_html__( 'Center', 'textdomain' ),
				'icon' => 'eicon-text-align-center',
			],
			'start' => [
				'title' => esc_html__( 'Start', 'textdomain' ),
				'icon' => 'eicon-text-align-' . ( is_rtl() ? 'left' : 'right' ),
			],
		],
		'selectors_dictionary' => [
			'left' => is_rtl() ? 'end' : 'start',
			'right' => is_rtl() ? 'start' : 'end',
		],
		'selectors' => [
			'{{WRAPPER}} .some-class' => 'text-align: {{VALUE}};',
		],
	]
);
```

### Dictionary with Select Control

Let's see how we can use `selectors_dictionary` with a select control. In this case, a popular addon used to save `border-style` values using prefix classes. The addon had 5 CSS classes for each border-style type:

```php
$this->add_control(
	'border_style',
	[
		'label' => esc_html__( 'Border Style', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::SELECT,
		'options' => [
			'' => esc_html__( 'Default', 'textdomain' ),
			'1' => esc_html__( 'None', 'textdomain' ),
			'2' => esc_html__( 'Solid', 'textdomain' ),
			'3' => esc_html__( 'Double', 'textdomain' ),
			'4' => esc_html__( 'Dotted', 'textdomain' ),
			'5' => esc_html__( 'Dashed', 'textdomain' ),
		],
		'prefix_class' => 'border-style-',
	]
);
```

To fix this, and remove all the unnecessary CSS classes, we can use `selectors_dictionary` as follows:

```php{14-20}
$this->add_control(
	'border_style',
	[
		'label' => esc_html__( 'Border Style', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::SELECT,
		'options' => [
			'' => esc_html__( 'Default', 'textdomain' ),
			'1' => esc_html__( 'None', 'textdomain' ),
			'2' => esc_html__( 'Solid', 'textdomain' ),
			'3' => esc_html__( 'Double', 'textdomain' ),
			'4' => esc_html__( 'Dotted', 'textdomain' ),
			'5' => esc_html__( 'Dashed', 'textdomain' ),
		],
		'selectors_dictionary' => [
			'1' => 'none',
			'2' => 'solid',
			'3' => 'double',
			'4' => 'dotted',
			'5' => 'dashed',
		],
		'selectors' => [
			'{{WRAPPER}}' => 'border-style: {{VALUE}};',
		],
	]
);
```

In this case, replacing `prefix_class` with `selectors` is much more efficient. In addition, we don't break backwards compatibility. The `selectors_dictionary` helps convert the old values to new values.

## Notes

It's very important to remember that the `selectors_dictionary` argument works only with controls that return simple `string` values. It doesn't work on multi-value controls, unit controls, group controls or repeaters which all return `array` values.
