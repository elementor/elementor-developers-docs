# Render Frontend Elements

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Elementor has a hook that lets developers add code before or after elements in the frontend. This hook can be applied to either a single element or all the elements on a page and is applied to the final HTML output of the element(s).  Developers can use this hook to change the HTML output before Elementor displays it to the end-user.

## Hook Details

* **Hook Type:** Action Hook
* **Hook Name:**
  * `elementor/frontend/before_render`
  * `elementor/frontend/after_render`
  * `elementor/frontend/{$element_type}/before_render`
  * `elementor/frontend/{$element_type}/after_render`
* **Notes:** The dynamic portion of the hook name, `$element_type`, refers to `element type`.
* **Affects:** Frontend

## Hook Arguments

| Argument  | Type                        | Description           |
|-----------|-----------------------------|-----------------------|
| `element` | _`\Elementor\Element_Base`_ | The element instance. |

## Element Types

The dynamic portion `$element_type` refers to the type of element you're targeting. For example here are some types of elements you can use:

* `section` - applies on sections and inner-sections.
* `column` - applies on columns and inner-columns.
* `container` - applies on containers and inner-containers.
* `widget` - applies on all the widgets.

## Example

### All Elements

Apply changes to all the elements:

```php
<?php
/**
 * Add `<div>` before all the elements in the page.
 *
 * @since 1.0.0
 * @param \Elementor\Element_Base $element The element instance.
 */
function add_div_before_all_elements( $element ) {
	?>
	<div class="before-element">Text before element</div>
	<?php
}
add_action( 'elementor/frontend/before_render', 'add_div_before_all_elements' );

/**
 * Add `<div>` after all the elements in the page.
 *
 * @since 1.0.0
 * @param \Elementor\Element_Base $element The element instance.
 */
function add_div_after_all_elements( $element ) {
	?>
	<div class="after-element">Text after element</div>
	<?php
}
add_action( 'elementor/frontend/after_render', 'add_div_after_all_elements' );
```

### Specific Elements

Apply changes only on widgets:

```php
<?php
/**
 * Add `<div>` before all the widgets in the page.
 *
 * @since 1.0.0
 * @param \Elementor\Element_Base $element The element instance.
 */
function add_div_before_all_the_widget( $element ) {
	?>
	<div class="before-widget">Text before widget</div>
	<?php
}
add_action( 'elementor/frontend/widget/before_render', 'add_div_before_all_the_widget' );

/**
 * Add `<div>` after all the widgets in the page.
 *
 * @since 1.0.0
 * @param \Elementor\Element_Base $element The element instance.
 */
function add_div_after_all_the_widget( $element ) {
	?>
	<div class="after-widget">Text after widget</div>
	<?php
}
add_action( 'elementor/frontend/widget/after_render', 'add_div_after_all_the_widget' );
```

### Advanced Usage

Change the element instance using the `$element` parameter.

```php
<?php
/**
 * Add a custom class and a data attribute to all the elements
 * containing a specific setting defined through the element control.
 *
 * @since 1.0.0
 * @param \Elementor\Element_Base $element The element instance.
 */
function add_attributes_to_elements( $element ) {

	if ( ! $element->get_settings( 'my-custom-setting' ) ) {
		return;
	}

	$element->add_render_attribute(
		'_wrapper',
		[
			'class' => 'my-custom-class',
			'data-my-custom-value' => 'my-custom-data-value',
		]
	);

}
add_action( 'elementor/frontend/before_render', 'add_attributes_to_elements' );
```
