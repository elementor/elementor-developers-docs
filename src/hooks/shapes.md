# Shape Dividers

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

Elementor offers the ability to add graphic [shape dividers](https://elementor.com/help/shape-divider/) that separate the sections of a page. By default Elementor offers a set of predefined dividers. Additional shape dividers can be added using a dedicated filter hook.

## Hook Details

* **Hook Type:** Filter Hook
* **Hook Name:** `elementor/shapes/additional_shapes`
* **Affects:** Editor

## Hook Arguments

| Argument            | Type        | Description                          |
|---------------------|-------------|--------------------------------------|
| `additional_shapes` | _`array`_   | A list of additional shape dividers. |

An array of additional shape dividers should include the following parameters: 

```
'shape-divider-id' => [
	'title'        => (string) Shape divider label.
	'url'          => (string) Shape divider file URI.
	'path'         => (string) Shape divider file path.
	'has_flip'     => (bool)   Whether to allow to flip the shape vertically. Default is false.
	'height_only'  => (bool)   Whether to allow to set width & height or only height. Default is false.
	'has_negative' => (bool)   Whether the shape divider has a negative variation. Default is false.
]
```

To support negative variations, you should include two files:

* `shape.svg`
* `shape-negative.svg`

The first is the original design, the other is the same design but with negative colors.

## Examples

To add new shape dividers in your theme, use the following code:

```php
/**
 * Add additional shape dividers to Elementor.
 *
 * @since 1.0.0
 * @param array $additional_shapes Additional Elementor shape dividers.
 */
function custom_elementor_shape_dividers( $additional_shapes ) {

	$additional_shapes['shape-divider-1'] = [
		'title'        => esc_html__( 'Shape divider 1', 'textdomain' ),
		'url'          => get_stylesheet_directory_uri() . '/assets/shapes/shape-1.svg',
		'path'         => get_stylesheet_directory() . '/assets/shapes/shape-1.svg',
		'height_only'  => true,
	];

	$additional_shapes['shape-divider-2'] = [
		'title'        => esc_html__( 'Shape divider 2', 'textdomain' ),
		'url'          => get_stylesheet_directory_uri() . '/assets/shapes/shape-2.svg',
		'path'         => get_stylesheet_directory() . '/assets/shapes/shape-2.svg',
		'has_flip'     => true,
		'has_negative' => true,
		'height_only'  => true,
	];

	return $additional_shapes;

}
add_filter( 'elementor/shapes/additional_shapes', 'custom_elementor_shape_dividers' );
```

To add new shape dividers in your plugin, use the following code:

```php
/**
 * Add additional shape dividers to Elementor.
 *
 * @since 1.0.0
 * @param array $additional_shapes Additional Elementor shape dividers.
 */
function custom_elementor_shape_dividers( $additional_shapes ) {

	$additional_shapes['shape-divider-1'] = [
		'title'        => esc_html__( 'Shape divider 1', 'textdomain' ),
		'url'          => plugins_url( __FILE__ ) . 'assets/shapes/shape-1.svg',
		'path'         => plugin_dir_path( __FILE__ ) . 'assets/shapes/shape-1.svg',
		'height_only'  => true,
	];

	$additional_shapes['shape-divider-2'] = [
		'title'        => esc_html__( 'Shape divider 2', 'textdomain' ),
		'url'          => plugins_url( __FILE__ ) . 'assets/shapes/shape-2.svg',
		'path'         => plugin_dir_path( __FILE__ ) . 'assets/shapes/shape-2.svg',
		'has_flip'     => true,
		'has_negative' => true,
		'height_only'  => true,
	];

	return $additional_shapes;

}
add_filter( 'elementor/shapes/additional_shapes', 'custom_elementor_shape_dividers' );
```
