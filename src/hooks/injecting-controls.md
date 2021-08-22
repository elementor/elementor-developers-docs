# Injecting Controls

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Elementor offers a set of special hooks that allow developers to insets new controls programmatically to all king of elements. You can insert new controls to all the elements, to specific elements, to Elementor default widgets, to widgets developers by other addon developers. The possibilities are endless.

There are 8 available hooks to choose from, 4 hooks are used to [inject controls to all the elements](#targeting-all-elements) and another 4 hooks are used [inject controls to specific elements](#targeting-specific-elements).

## Targeting All Elements

### Hooks Details

* **Hook Type:** Action Hooks
* **Hook Name:**
  * `elementor/element/before_section_start`
  * `elementor/element/after_section_start`
  * `elementor/element/before_section_end`
  * `elementor/element/after_section_end`
* **Affects On:** Editor

### Hooks Arguments

| Argument     | Type                          | Description                                                   |
|--------------|-------------------------------|---------------------------------------------------------------|
| `element`    | _`\Elementor\Controls_Stack`_ | The edited element.                                           |
| `section_id` | _`string`_                    | Section id.                                                   |
| `args`       | _`array`_                     | Section arguments sent to `$element->start_controls_section`. |

### `elementor/element/before_section_start`

### `elementor/element/after_section_end`

Runs before/after an editor section is registered. Here is the place to add additional sections before and after each section for all elements in panel if you need to add a section in a specific place (a specific element & section), prefer to use the next hook.

### Example

```php
/**
 * @param \Elementor\Controls_Stack $element    The element stack.
 * @param string                    $section_id Section ID.
 * @param array                     $args       Section arguments.
 */
add_action( 'elementor/element/before_section_start', function( $element, $section_id, $args ) {

	if ( 'section' === $element->get_name() && 'section_background' === $section_id ) {

		$element->start_controls_section(
			'custom_section',
			[
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
				'label' => __( 'Custom Section', 'plugin-name' ),
			]
		);

		$element->add_control(
			'custom_control',
			[
				'type' => \Elementor\Controls_Manager::NUMBER,
				'label' => __( 'Custom Control', 'plugin-name' ),
			]
		);

		$element->end_controls_section();

	}

}, 10, 3 );
```


### `elementor/element/after_section_start`

### `elementor/element/before_section_end`

Runs within an editor section. after it was opened/before the section is closed. Here is the place to add additional controls to existing sections. If you need to add a control to a specific place (a specific element & section), prefer to use the next hook.

### Example

```php
/**
 * @param \Elementor\Controls_Stack $element    The element stack.
 * @param string                    $section_id Section ID.
 * @param array                     $args       Section arguments.
 */
add_action( 'elementor/element/after_section_start', function( $element, $section_id, $args ) {

	if ( 'section' === $element->get_name() && 'section_background' === $section_id ) {

		$element->add_control(
			'custom_control',
			[
				'type' => \Elementor\Controls_Manager::NUMBER,
				'label' => __( 'Custom Control', 'plugin-name' ),
			]
		);

	}

}, 10, 3 );
```

## Targeting Specific Elements
### Hooks Details

* **Hook Type:** Action Hooks
* **Hook Name:**
  * `elementor/element/{$stack_name}/{$section_id}/before_section_start`
  * `elementor/element/{$stack_name}/{$section_id}/after_section_start`
  * `elementor/element/{$stack_name}/{$section_id}/before_section_end`
  * `elementor/element/{$stack_name}/{$section_id}/after_section_end`
* **Notes:** The dynamic portions of the hook name, `$stack_name` and `$section_id`, refers to the stack name and section ID, respectively.
* **Affects On:** Editor

To target a specific element (like the `heading` widget) and a specific section (like `section_title` section), use one of the following hooks:
* `elementor/element/heading/section_title/before_section_start`
* `elementor/element/heading/section_title/after_section_start`
* `elementor/element/heading/section_title/before_section_end`
* `elementor/element/heading/section_title/after_section_end`

### Hooks Arguments

| Argument  | Type             | Description                                                   |
|-----------|------------------|---------------------------------------------------------------|
| `element` | _`Element_Base`_ | The edited element.                                           |
| `args`    | _`array`_        | Section arguments sent to `$element->start_controls_section`. |

### `elementor/element/{$stack_name}/{$section_id}/before_section_start`

### `elementor/element/{$stack_name}/{$section_id}/after_section_end`

Runs before / after a specific element and a specific section.

### Example

```php
/**
 * @param \Elementor\Controls_Stack $element    The element stack.
 * @param array                     $args       Section arguments.
 */
add_action( 'elementor/element/heading/section_title/before_section_start', function( $element, $args ) {

	$element->start_controls_section(
		'custom_section',
		[
			'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			'label' => __( 'Custom Section', 'plugin-name' ),
		]
	);

	$element->add_control(
		'custom_control',
		[
			'type' => \Elementor\Controls_Manager::NUMBER,
			'label' => __( 'Custom Control', 'plugin-name' ),
		]
	);

	$element->end_controls_section();

}, 10, 2 );
```


### `elementor/element/{$stack_name}/{$section_id}/after_section_start`

### `elementor/element/{$stack_name}/{$section_id}/before_section_end`

Runs within an editor section. After it was opened / before the section is closed. Here is the place to add additional controls before and after a specific element and a specific section within that element.

### Example

```php
/**
 * @param \Elementor\Controls_Stack $element    The element stack.
 * @param array                     $args       Section arguments.
 */
add_action( 'elementor/element/heading/section_title/before_section_start', function( $element, $args ) {

	$element->add_control(
		'custom_control',
		[
			'type' => \Elementor\Controls_Manager::NUMBER,
			'label' => __( 'Custom Control', 'plugin-name' ),
		]
	);

}, 10, 2 );
```
