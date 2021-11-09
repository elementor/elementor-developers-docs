# Print Widget Template

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Elementor has a hook that lets developers change a widget's JavaScript template in the [preview](/editor/elementor-preview) area.

## Hook Details

* **Hook Type:** Filter Hook
* **Hook Name:** `elementor/{$element_type}/print_template`
* **Notes:** The dynamic portion of the hook name, `$element_type`, refers to `widget`.
* **Affects:** Preview

## Hook Arguments

| Argument   | Type                       | Description                     |
|------------|----------------------------|---------------------------------|
| `template` | _`string`_                 | The JavaScript template output  |
| `widget`   | _`\Elementor\Widget_Base`_ | The widget instance             |

## Example

```php
/**
 * Update the heading widget JS template in Elementor preview.
 *
 * Adds an icon to all the external links.
 *
 * @since 1.0.0
 * @param string                 $template The JavaScript template output.
 * @param \Elementor\Widget_Base $widget   The widget instance.
 */
function change_heading_js_template( $template, $widget ) {

	if ( 'heading' === $widget->get_name() ) {
		$old_template = '<a href="\' + settings.link.url + \'">\' + title_html + \'</a>';
		$new_template = '<a href="\' + settings.link.url + \'">\' + title_html + ( settings.link.is_external ? \'<i class="fa fa-external-link" aria-hidden="true"></i>\' : \'\' ) + \'</a>';
		$template = str_replace( $old_template, $new_template, $template );
	}

	return $template;

}
add_filter( 'elementor/widget/print_template', 'change_heading_js_template', 10, 2 );
```

The code above is only an example. We do not recommend using `str_replace` on templates, because the template may be changed and the `str_replace` will fail. Instead, edit the entire original template for your needs.

## Notes

To change the widget [content in the frontend](/hooks/render-widget-content) see `elementor/widget/render_content`.
