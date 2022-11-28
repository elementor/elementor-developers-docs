# Selectors Dictionary

In some cases we need to update the available values for a sertain control. But doing so, we may break existing sites that store the old values in the database. For those cases, Elementor offers a dictionary that helps developers to transform old values into new values before using them in the code.

## Selectors Dictionary Argument

Use the `selectors_dictionary` argument to set old values you want to replace and thier new value.

```php{6-9}
$this->add_control(
	'text-align',
	[
		'label' => esc_html__( 'Control Label', 'textdomain' ),
		'type' => Controls_Manager::SELECT,
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

The original control used to save in the database one of 3 values `right`, `center` or `left`:

```php{8,12,16}
$this->add_control(
	'text-align',
	[
		'label' => esc_html__( 'Alignment', 'textdomain' ),
		'type' => Controls_Manager::CHOOSE,
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
			'{{WRAPPER}} .some-class' => 'text-align: {{VALUE}}',
		],
	]
);
```

We want to migrate to `start`, `center` or `end`. But if for backwards compatibility, we have to offer a solution to the old values saved in the database.

We can use `selectors_dictionary` to solve this issue:

```php{21-24}
$this->add_control(
	'text-align',
	[
		'label' => esc_html__( 'Alignment', 'textdomain' ),
		'type' => Controls_Manager::CHOOSE,
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
		'selectors_dictionary' => [
			'left' => 'end',
			'right' => 'start',
		],
		'selectors' => [
			'{{WRAPPER}} .some-class' => 'text-align: {{VALUE}}',
		],
	]
);
```

### Dictionary with Select Control

Let's see how we can use selector dictionary with a select control. A popular addon used to save `border-style` vaules using prefix classes. The addon had 5 CSS classes for each border-style type:

```php
$this->add_control(
	'border_style',
	[
		'label' => esc_html__( 'Border Style', 'textdomain' ),
		'type' => Controls_Manager::SELECT,
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

To fix this, and remove all the unnessesary CSS classes we can use `selectors_dictionary` as follows:

```php{14-20}
$this->add_control(
	'border_style',
	[
		'label' => esc_html__( 'Border Style', 'textdomain' ),
		'type' => Controls_Manager::SELECT,
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

In this case, replacing `prefix_class` with `selectors` is much efficient. In addition, we don't break backwards compatibility. The `selectors_dictionary` helps convert the old values to new values.

## Notes

It's very important to remember that `selectors_dictionary` argument works only with controls that return simple `string` values. It doesn't work on multi-value controls, unit controls, group controls or repeaters which are all return `array` values.
