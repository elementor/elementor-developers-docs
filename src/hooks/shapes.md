# Shape Dividers

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

Elementor offers the ability to add graphic shapes that separate the sections of a page. By default Elementor offers a set of predefined [shape dividers](https://elementor.com/help/shape-divider/). Additional shapes can be added using a dedicated filter hook.

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
'shape-id' => [
	'title'        => (string) Shape label.
	'url'          => (string) Shape file URI.
	'path'         => (string) Shape file path.
	'has_flip'     => (bool)   Whether to allow to flip the shape vertically. Default is false.
	'height_only'  => (bool)   Whether to allow to set width & height or only height. Default is false.
	'has_negative' => (bool)   Whether the shape has a negative variation. Default is false.
]
```

To support negative variations, you should add two files:

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

	$additional_shapes['shape-1'] = [
		'title'        => esc_html__( 'Shape 1', 'plugin-name' ),
		'url'          => get_stylesheet_directory_uri() . '/assets/shapes/shape-1.svg',
		'path'         => get_stylesheet_directory() . '/assets/shapes/shape-1.svg'
		'height_only'  => true,
	];

	$additional_shapes['shape-2'] = [
		'title'        => esc_html__( 'Shape 2', 'plugin-name' ),
		'url'          => get_stylesheet_directory_uri() . '/assets/shapes/shape-2.svg',
		'path'         => get_stylesheet_directory() . '/assets/shapes/shape-2.svg'
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

	$additional_shapes['shape-1'] = [
		'title'        => esc_html__( 'Shape 1', 'plugin-name' ),
		'url'          => plugins_url( __FILE__ ) . 'assets/shapes/shape-1.svg',
		'path'         => plugin_dir_path( __FILE__ ) . 'assets/shapes/shape-1.svg'
		'height_only'  => true,
	];

	$additional_shapes['shape-2'] = [
		'title'        => esc_html__( 'Shape 2', 'plugin-name' ),
		'url'          => plugins_url( __FILE__ ) . 'assets/shapes/shape-2.svg',
		'path'         => plugin_dir_path( __FILE__ ) . 'assets/shapes/shape-2.svg'
		'has_flip'     => true,
		'has_negative' => true,
		'height_only'  => true,
	];

	return $additional_shapes;

}
add_filter( 'elementor/shapes/additional_shapes', 'custom_elementor_shape_dividers' );
```
