# Parse Element CSS

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Elementor has a hook that allows developers to add new CSS rules to the element before the CSS file is generated.

## Hook Details

* **Hook Type:** Action Hook
* **Hook Name:** `elementor/element/parse_css`
* **Affects On:** Frontend

## Hook Arguments

| Argument   | Type                               | Description                 |
|------------|------------------------------------|-----------------------------|
| `post_css` | _`\Elementor\Core\Files\CSS\Post`_ | The post CSS file instance. |
| `element`  | _`\Elementor\Element_Base`_        | The element instance.       |

## Example

Let's add simple CSS rule to the generated CSS file.s

```php
/**
 * Add custom CSS rule.
 *
 * @since 1.0.0
 * @param \Elementor\Core\Files\CSS\Post $post_css_file The post CSS file instance.
 * @param \Elementor\Element_Base        $element       The element instance.
 */
function add_custom_css_rule_to_the_css_file( $post_css_file, $element ) {

	$post_css_file->get_stylesheet()->add_rules(
		'.my-selector',
		[
			'width' => '50px',
			'height' => '50px',
		]
	);

}
add_action(	'elementor/element/parse_css', 'add_custom_css_rule_to_the_css_file', 10, 2 );
```

Now let's add a CSS rule with a unique elementor selector.

```php
/**
 * parse element CSS.
 *
 * @since 1.0.0
 * @param \Elementor\Core\Files\CSS\Post $post_css_file The post CSS file instance.
 * @param \Elementor\Element_Base        $element       The element instance.
 */
function add_custom_rules_to_css_file( $post_css_file, $element ) {

	$item_width = some_get_theme_config_function( 'item_width' );
	$item_height = some_get_theme_config_function( 'item_height' );

	$post_css_file->get_stylesheet()->add_rules(
		$element->get_unique_selector(),
		[
			'width' => $item_width . 'px',
			'height' => $item_height . 'px',
		]
	);

}
add_action(	'elementor/element/parse_css', 'add_custom_rules_to_css_file', 10, 2 );
```
