# Widget DOM Optimization

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Elementor widgets define define their own markup in the `render()` method. However, Elementor wraps each widget in two `<div>` elements, the outer `<div class="elementor-widget">` element and the inner `<div class="elementor-widget-container">` element. These additional wrapper allow Elementor to add additional styles like background, margins, borders, motion effect etc.

Two wrapper for each widget increase the overall DOM size, reducing page performance. To overcome this, developers can use the `has_widget_inner_wrapper()` method to control the number of wrapper elements the widget has.

By switching to a single wrapper, a widget can reduces the DOM size and optimize it's footprint on the page. However, existing widgets that rely on the inner `.elementor-widget-container` wrapping element to style widgets, can keep backwards compatibility.

## Widget Markup

The current, unoptimized widget markup includes two wrapping elements:

```html
<div class="elementor-widget elementor-widget-{widget-name}">
	<div class="elementor-widget-container">
		...
	</div>
</div>
```

The optimized markup, has only one wrapping element:

```html
<div class="elementor-widget elementor-widget-{widget-name}">
	...
</div>
```

By default, Elementor uses the unoptimized markup for backward compatibility.

## Examples

### Optimized Widget DOM

To reduce the DOM size, developers can use the `has_widget_inner_wrapper()` method in the widget class, as shown below:

```php
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function has_widget_inner_wrapper(): bool {
		return false;
	}

}
```

This implementation instructs Elementor to render the widget with a single `<div>` wrapper.

### Retaining Unoptimized Widget DOM (for BC)

Legacy widgets that rely on the `.elementor-widget-container` class can continue using the unoptimized DOM by setting the method to return `true`:

```php{4-6,16}
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function has_widget_inner_wrapper(): bool {
		return true;
	}

	protected function register_controls(): void {

		$this->add_control(
			'color',
			[
				'label' => esc_html__( 'Color', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} > .elementor-widget-container h3' => 'color: {{VALUE}};',
				],
			]
		);
	}

	protected function render(): void {
		?>
		<h3>
			...
		</h3>
		<?php
	}
}
```

This widget can't use the optimized DOM capability as is uses the inner `.elementor-widget-container` CSS class to style the widget. Therefore, setting `has_widget_inner_wrapper()` to `true` will make sure that Elementor won't remove the inner wrapper for this widget.

## Notes

Please note that retaining unoptimized DOM is a temporary solution that allows addon developers to maintain compatibility while updating their code. The ultimate goal is to transition all widgets to use the optimized single-wrapper structure.

Optimized DOM for widget wrappers is not only setting `has_widget_inner_wrapper()` to `false`, it requires removal of `.elementor-widget-container` from all files, including PHP, CSS and JS.
