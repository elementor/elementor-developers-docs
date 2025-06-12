# Mask Shapes

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

Elementor offers the ability to apply overlay [masks](https://elementor.com/help/mask-option/) that create stylish designs for any element. By default Elementor offers a set of predefined masks. Additional masks can be added using a dedicated filter hook.

## Hook Details

* **Hook Type:** Filter Hook
* **Hook Name:** `elementor/mask_shapes/additional_shapes`
* **Affects:** Editor

## Hook Arguments

| Argument            | Type        | Description                       |
|---------------------|-------------|-----------------------------------|
| `additional_shapes` | _`array`_   | A list of additional mask shapes. |

An array of additional mask shapes that should include the following parameters: 

```
'mask-shape-id' => [
	'title' => (string) Mask label.
	'image' => (string) Mask file URI.
]
```

## Examples

To add new mask shapes use the following code:

```php
/**
 * Add additional mask shapes to Elementor.
 *
 * @since 1.0.0
 */
function custom_elementor_mask_shapes() {
	return [
		'shape-id-1' => [
			'title' => esc_html__( 'Shape name 1', 'textdomain' ),
			'image' => PLUGIN_ASSETS_URL . 'mask-shapes/shape-1.svg',
		],
		'shape-id-2' => [
			'title' => esc_html__( 'Shape name 2', 'textdomain' ),
			'image' => PLUGIN_ASSETS_URL . 'mask-shapes/shape-2.svg',
		],
	];
}
add_filter( 'elementor/mask_shapes/additional_shapes', 'custom_elementor_mask_shapes' );
```

To avoid conflicts with other plugins, shape IDs should be prefixed.

The `PLUGIN_ASSETS_URL` should be updated using `plugin_dir_path( __FILE__ )`, `get_stylesheet_directory_uri()` or any other method that retrieves the assets URL.
