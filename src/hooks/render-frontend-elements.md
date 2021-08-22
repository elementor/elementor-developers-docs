# Render Frontend Elements

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Elementor has a hook that allows developers to add code before/after the element in the Frontend and in the Editor. It applied on the final HTML of the element. Either a single element or all the elements. Developers can change the HTML output before Elementor display it to the user.

## Hook Details

* **Hook Type:** Action Hooks
* **Hook Name:**
  * `elementor/frontend/before_render`
  * `elementor/frontend/after_render`
  * `elementor/frontend/{$element_type}/before_render`
  * `elementor/frontend/{$element_type}/after_render`
* **Notes:** The dynamic portion of the hook name, `$element_type`, refers to `element type`.
* **Affects On:** Frontend

## Hook Arguments

| Argument  | Type                        | Description           |
|-----------|-----------------------------|-----------------------|
| `element` | _`\Elementor\Element_Base`_ | The element instance. |

## Example

```php
/**
 * Add custom class and a data attribute to all the elements
 * containing a specific setting defined through the element
 * control.
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
