# Field Content Template

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

When [rendering widgets](./../widgets/widget-rendering/) we have a PHP template and a JS template. However, [form field rendering](./field-render/) only has the PHP template, without the JS template. External developers can use a workaround to overcome this barrier.

## Rendering JS Template

The following code is a simple workaround to render a JS template inside the Elementor editor.

```php
<?php
class Elementor_Test_Field extends \ElementorPro\Modules\Forms\Fields\Field_Base {

	public function __construct() {
		parent::__construct();
		add_action( 'elementor/preview/init', [ $this, 'editor_preview_footer' ] );
	}

	public function editor_preview_footer(): void {
		add_action( 'wp_footer', [ $this, 'content_template_script' ] );
	}

	public function content_template_script(): void {
		?>
		<script>
		jQuery( document ).ready( () => {

			elementor.hooks.addFilter(
				'elementor_pro/forms/content_template/field/<?php echo $this->get_type(); ?>',
				function ( inputField, item, i ) {
					const fieldType  = 'text';
					const fieldId    = `form_field_${i}`;
					const fieldClass = `elementor-field-textual elementor-field ${item.css_classes}`;
					const title      = "<?php echo esc_html__( 'Some text...', 'textdomain' ); ?>";

					return `<input type="${fieldType}" id="${fieldId}" class="${fieldClass}" title="${title}">`;
				}, 10, 3
			);

		});
		</script>
		<?php
	}

}
```

::: warning Please Note
1. The workaround described above is a temporary solution.
2. We may introduce an official `content_template()` method to render JS templates, the same as is done for Elementor widgets.
3. To make sure your code is future compatible, make sure your field class doesn't have a method called `content_template()`.
:::
