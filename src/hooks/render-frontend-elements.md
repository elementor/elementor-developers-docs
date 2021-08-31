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

## Example

```php
/**
 * Add a custom class and a data attribute to all the elements
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
