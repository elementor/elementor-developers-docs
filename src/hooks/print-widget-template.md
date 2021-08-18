# Print Widget Template

Elementor has a hook that allows developers to change the widget JavaScript template in the [Elementor Preview](/editor/elementor-preview).

## Hook Details

* **Hook Type:** Action Hook
* **Hook Name:** `elementor/{$element_type}/print_template`
* **Notes:** The dynamic portion of the hook name, `$element_type`, refers to `widget`.
* **Affects On:** Elementor Preview

## Hook Arguments

| Argument   | Type                       | Description                     |
|------------|----------------------------|---------------------------------|
| `template` | _`string`_                 | The JavaScript template output. |
| `widget`   | _`\Elementor\Widget_Base`_ | The widget instance.            |

## Example

```php
function change_heading_js_template( $template, $widget ) {

	if ( 'heading' === $widget->get_name() ) {
		$old_template = '<a href="\' + settings.link.url + \'">\' + title_html + \'</a>';
		$new_template = '<a href="\' + settings.link.url + \'">\' + title_html + ( settings.link.is_external ? \'<i class="fa fa-external-link" aria-hidden="true"></i>\' : \'\' ) + \'</a>';
		$template = str_replace( $old_template, $new_template, $template );
	}

	return $template;

}
add_action( 'elementor/widget/print_template', 'change_heading_js_template', 10, 2 );
```

The code above it for example only, we do not recommend to use `str_replace` on templates, because the template may be changed and the `str_replace` will fail. Instead, take the whole original template and change it for your needs.

## Notes

To change the widget [content in the frontend](./render-widget-content) see `elementor/widget/render_content`.
