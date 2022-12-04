# Conditional Display

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

In some cases, you may need to display controls based on a user’s selection in a dependent control. For example, turning a switcher control on may trigger the display of other controls. The controls mechanism in the editor has a special conditional display functionality. Let's see how it is used.

## Condition Argument

To set a conditional display for Elementor controls, use the `condition` argument in any control.

### Single-Value Condition

The display condition may depend on an exact value:

```php{6-8}
$this->add_control(
	'unique-control-name',
	[
		'label' => esc_html__( 'Control Label', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::TEXT,
		'condition' => [
			'dependent-control-name' => 'exact-value',
		],
	]
);
```

### Multi-Value Condition

The display condition may depend on a set of values:

```php{6-8}
$this->add_control(
	'unique-control-name',
	[
		'label' => esc_html__( 'Control Label', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::TEXT,
		'condition' => [
			'dependent-control-name' => [ 'value-1', 'value-2' ],
		],
	]
);
```

Elementor uses a logical `OR` (`||`) operator when passing an array of values.

## Multiple Conditions

Display conditions may depend on the number of controls. This is why the `condition` argument accepts an `array`. It uses the logical `AND` (`&&`) operator, checking to see if *all* the conditions are met in order to decide whether or not to display the control.

To set multiple conditions, pass several values:

```php{6-10}
$this->add_control(
	'unique-control-name',
	[
		'label' => esc_html__( 'Control Label', 'textdomain' ),
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

A condition has two equality operators, it can check whether the control value is *equal* OR *not equal* to a value.

### Equality Check

Display controls only if the dependent control equals a certain value:

```php
'condition' => [
	'control-name' => 'control-value',
],
```

### Inequality Check

Display controls only if the dependent control does not equal a certain value:

```php
'condition' => [
	'control-name!' => 'control-value',
],
```

We simply add a `!` suffix to the control name.

## Condition Example

Let's start with an example in which we want to allow users to set borders and style them. To simplify the user experience, we initially hide all the border controls and leave only a [switcher](./control-switcher/). If a user turns on the switcher, they will see all the border controls.


```php{2,25-27,41-43,55-57}
$this->add_control(
	'border',
	[
		'label' => esc_html__( 'Border', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::SWITCHER,
	]
);

$this->add_control(
	'border_style',
	[
		'label' => esc_html__( 'Border Style', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::SELECT,
		'options' => [
			'' => esc_html__( 'None', 'textdomain' ),
			'solid' => esc_html__( 'Solid', 'textdomain' ),
			'double' => esc_html__( 'Double', 'textdomain' ),
			'dotted' => esc_html__( 'Dotted', 'textdomain' ),
			'dashed' => esc_html__( 'Dashed', 'textdomain' ),
			'groove' => esc_html__( 'Groove', 'textdomain' ),
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
		'label' => esc_html__( 'Border Color', 'textdomain' ),
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
		'label' => esc_html__( 'Border Width', 'textdomain' ),
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

In the example above all the border controls are dependent on a single border control. To set multiple dependent controls, we can set more conditions allowing the user to add more inputs.

In the example below, the user needs to first turn on the switcher and set a border style. Only then, will the color and width controls appear. To do this we will need to set multiple conditions using both equality and inequality checks.

```php{2,25-27,41-44,56-59}
$this->add_control(
	'border',
	[
		'label' => esc_html__( 'Border', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::SWITCHER,
	]
);

$this->add_control(
	'border_style',
	[
		'label' => esc_html__( 'Border Style', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::SELECT,
		'options' => [
			'' => esc_html__( 'None', 'textdomain' ),
			'solid' => esc_html__( 'Solid', 'textdomain' ),
			'double' => esc_html__( 'Double', 'textdomain' ),
			'dotted' => esc_html__( 'Dotted', 'textdomain' ),
			'dashed' => esc_html__( 'Dashed', 'textdomain' ),
			'groove' => esc_html__( 'Groove', 'textdomain' ),
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
		'label' => esc_html__( 'Border Color', 'textdomain' ),
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
		'label' => esc_html__( 'Border Width', 'textdomain' ),
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

## Advanced Conditions

Elementor has an advanced conditional display functionality for controls in the editor. Instead of using the `condition` argument, use the `conditions` argument (with an **s**).

### Available Values

The `conditions` argument accepts an array with the following values:

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th><code>relation</code></th>
			<td>(<code>string</code>) Relation check with either <code>and</code> / <code>or</code> logical operators.<br> Default is <code>and</code>.</td>
		</tr>
		<tr>
			<th><code>terms</code></th>
			<td>(<code>array</code>) An array of arrays containing the rules.
				<ul>
					<li><code>name</code> - The dependent control name.</li>
					<li><code>value</code> - The dependent control value.</li>
					<li><code>operator</code> - The equality operator, <code>==</code>, <code>!=</code>, <code>!==</code>, <code>in</code>, <code>!in</code>, <code>contains</code>, <code>!contains</code>, <code><</code>, <code><=</code>, <code>></code>, <code>>=</code>, <code>===</code>. Default is <code>===</code>.</li>
				</ul>
			</td>
		</tr>
	</tbody>
</table>

### More Operators

Before implementing the 'conditions' argument, you could only use equality and inequality checks. Now you have many more operators at your disposal: `==`, `!=`, `!==`, `in`, `!in`, `contains`, `!contains`, `<`, `<=`, `>`, `>=` and `===`.

We can replace the simple `condition` argument:

```php
'condition' => [
	'control-name!' => 'control-value',
],
```

with the advanced `conditions` argument, and include the `operator` rule inside the `term` array:

```php
'conditions' => [
	'terms' => [
		[
			'name' => 'control-name',
			'operator' => '!==',
			'value' => 'control-value',
		],
	],
],
```

This also makes it easier to use equality operators for numeric values (`<`, `<=`, `>`, `>=`, `==`, `===`, `!=` and `!==`):

```php
'conditions' => [
	'terms' => [
		[
			'name' => 'spacing',
			'operator' => '>=',
			'value' => 0,
		],
	],
],
```

Below is an example of checking against multiple values:

```php
'conditions' => [
	'terms' => [
		[
			'name' => 'background_type',
			'operator' => 'in',
			'value' => [ 'classic', 'gradient', 'video', 'slideshow' ],
		],
	],
],
```

Below is an example of checking if the term contains a value:

```php
'conditions' => [
	'terms' => [
		[
			'name' => 'heading',
			'operator' => 'contains',
			'value' => 'elementor',
		],
	],
],
```

### Multiple Conditions 

As mentioned above, the simple `condition` argument allows developers to combine several conditions:

```php
'condition' => [
	'border' => 'yes',
	'border_style!' => '',
],
```

The advanced `conditions` argument has the same ability:

```php
'conditions' => [
    'terms' => [
        [
            'name' => 'border',
            'operator' => '===',
            'value' => 'yes',
        ],
        [
            'name' => 'border_style',
            'operator' => '!==',
            'value' => '',
        ],
    ],
],
```

However, with the `condition` argument all the terms must be met in order to display the control, while the advanced `conditions` argument allows you to add more logical operators using the new `relation` value.

### Term Relations

Now we can use not only the `and` logical operator but also the `or` operator to check the relationship between terms:

```php
'conditions' => [
	'relation' => 'or',
	'terms' => [
		[
			'name' => 'background',
			'operator' => '!==',
			'value' => '',
		],
		[
			'name' => 'border',
			'operator' => '!==',
			'value' => '',
		],
	],
],
```

### Nested Conditions

We can also nest conditions: 

```php
'conditions' => [
	'relation' => 'or',
	'terms' => [
		[
			'name' => 'video_type',
			'operator' => '===',
			'value' => 'youtube',
		],
		[
			'relation' => 'and',
			'terms' => [
				[
					'name' => 'show_image_overlay',
					'operator' => '===',
					'value' => 'yes',
				],
				[
					'name' => 'video_type',
					'operator' => '!==',
					'value' => 'hosted',
				],
			],
		],
	],
],
```

All this gives developers the ability to create very strict rules with many nested levels for conditional control display.

## Repeaters & Conditional Display

Conditional control display and [repeaters](./control-repeater/) are special case. There are some things you can do, and some thinkg you can't. Let's cover three use cases.

### Entire Repeater Control

You can conditionaly hide/display the entire repeater:

```php{2,8-9,30-32}
$this->add_control(
	'display_list',
	[
		'label' => esc_html__( 'Display List', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::SWITCHER,
		'label_on' => esc_html__( 'Yes', 'textdomain' ),
		'label_off' => esc_html__( 'No', 'textdomain' ),
		'return_value' => 'yes',
		'default' => 'yes',
	]
);

$this->add_control(
	'list',
	[
		'label' => esc_html__( 'Repeater List', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::REPEATER,
		'fields' => [
			[
				'name' => 'list_title',
				'label' => esc_html__( 'Title', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::TEXT,
			],
			[
				'name' => 'list_content',
				'label' => esc_html__( 'Content', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::WYSIWYG,
			],
		],
		'condition' => [
			'display_list' => 'yes',
		],
	]
);
```

In this case there are two controls, the value of the first control affects the display of the second control.

### Repeater Inner Fields

You can conditionaly hide/display fields inside the repeater:

```php{8,13-14,25-27}
$this->add_control(
	'list',
	[
		'label' => esc_html__( 'Repeater List', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::REPEATER,
		'fields' => [
			[
				'name' => 'display_content',
				'label' => esc_html__( 'Display Content', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Yes', 'textdomain' ),
				'label_off' => esc_html__( 'No', 'textdomain' ),
				'return_value' => 'yes',
				'default' => 'yes',
			],
			[
				'name' => 'list_title',
				'label' => esc_html__( 'Title', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::TEXT,
			],
			[
				'name' => 'list_content',
				'label' => esc_html__( 'Content', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::WYSIWYG,
				'condition' => [
					'display_content' => 'yes',
				],
			],
		],
	]
);
```

In this case we have a repeater with three inner controls, the value of one inner-control affects the display of an other inner-control.

### Dependents From Different Levels

But you can't mix different levels. Inner controls can't be dependent on the value of a main control. 

```php{2,8-9,28-30}
$this->add_control(
	'display_content',
	[
		'label' => esc_html__( 'Display Content', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::SWITCHER,
		'label_on' => esc_html__( 'Yes', 'textdomain' ),
		'label_off' => esc_html__( 'No', 'textdomain' ),
		'return_value' => 'yes',
		'default' => 'yes',
	]
);

$this->add_control(
	'list',
	[
		'label' => esc_html__( 'Repeater List', 'textdomain' ),
		'type' => \Elementor\Controls_Manager::REPEATER,
		'fields' => [
			[
				'name' => 'list_title',
				'label' => esc_html__( 'Title', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::TEXT,
			],
			[
				'name' => 'list_content',
				'label' => esc_html__( 'Content', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::WYSIWYG,
				'condition' => [
					'display_content' => 'yes',
				],
			],
		],
	]
);
```

This is not allowed. It won't work.
