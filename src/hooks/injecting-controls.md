# Injecting Controls

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Elementor offers a set of special hooks that allow developers to inject new controls programmatically into many kinds of elements. You can inject new controls into all the elements, into specific elements, into the Elementor default widgets, and into widgets developed by other addon developers.

There are eight available hooks to choose from, four hooks are used to [inject controls into all the elements](#targeting-all-elements) and another 4 hooks are used to [inject controls into specific elements](#targeting-specific-elements).

## Targeting All Elements

### Hooks Details

* **Hook Type:** Action Hook
* **Hook Name:**
  * `elementor/element/before_section_start`
  * `elementor/element/after_section_start`
  * `elementor/element/before_section_end`
  * `elementor/element/after_section_end`
* **Affects:** Editor

### Hook Arguments

| Argument     | Type                          | Description                                                   |
|--------------|-------------------------------|---------------------------------------------------------------|
| `element`    | _`\Elementor\Controls_Stack`_ | The edited element.                                           |
| `section_id` | _`string`_                    | Section id.                                                   |
| `args`       | _`array`_                     | Section arguments sent to `$element->start_controls_section`  |

### `elementor/element/before_section_start`

### `elementor/element/after_section_end`

Runs before or after an editor section is registered. This is used to add additional sections before and after a section and affects all elements in a panel. If you need to add a section in a specific place (a specific element & section), the hooks described below would be preferable (See the section "**Targeting Specific Elements**).

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
				'label' => esc_html__( 'Custom Section', 'plugin-name' ),
			]
		);

		$element->add_control(
			'custom_control',
			[
				'type' => \Elementor\Controls_Manager::NUMBER,
				'label' => esc_html__( 'Custom Control', 'plugin-name' ),
			]
		);

		$element->end_controls_section();

	}

}, 10, 3 );
```


### `elementor/element/after_section_start`

### `elementor/element/before_section_end`

Runs within a section in the editor, after it was opened and before it was closed. This is the place to add additional controls to existing sections. If you need to add a control to a specific place (a specific element & section), the hooks described below would be preferable.

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
				'label' => esc_html__( 'Custom Control', 'plugin-name' ),
			]
		);

	}

}, 10, 3 );
```

## Targeting Specific Elements
### Hooks Details

* **Hook Type:** Action Hook
* **Hook Name:**
  * `elementor/element/{$stack_name}/{$section_id}/before_section_start`
  * `elementor/element/{$stack_name}/{$section_id}/after_section_start`
  * `elementor/element/{$stack_name}/{$section_id}/before_section_end`
  * `elementor/element/{$stack_name}/{$section_id}/after_section_end`
* **Notes:** The dynamic portions of the hook name, `$stack_name` and `$section_id`, refer to the stack name and section ID, respectively.
* **Affects:** Editor

To target a specific element (like the `heading` widget) and a specific section (like `section_title` section), use one of the following hooks:
* `elementor/element/heading/section_title/before_section_start`
* `elementor/element/heading/section_title/after_section_start`
* `elementor/element/heading/section_title/before_section_end`
* `elementor/element/heading/section_title/after_section_end`

### Hook Arguments

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
			'label' => esc_html__( 'Custom Section', 'plugin-name' ),
		]
	);

	$element->add_control(
		'custom_control',
		[
			'type' => \Elementor\Controls_Manager::NUMBER,
			'label' => esc_html__( 'Custom Control', 'plugin-name' ),
		]
	);

	$element->end_controls_section();

}, 10, 2 );
```


### `elementor/element/{$stack_name}/{$section_id}/after_section_start`

### `elementor/element/{$stack_name}/{$section_id}/before_section_end`

Runs within an editor section, after it was opened and before the section was closed. This is the place to add additional controls before, and after, a specific element and a specific section within that element.

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
			'label' => esc_html__( 'Custom Control', 'plugin-name' ),
		]
	);

}, 10, 2 );
```
