# Widget DOM Optimization

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Elementor widgets define their own markup in the `render()` method. However, Elementor wraps each widget in two `<div>` elements; the outer `<div class="elementor-widget">` element, and the inner `<div class="elementor-widget-container">` element. In the past, these additional wrappers allow Elementor to add additional styles and features.

However, two wrappers for each widget increases the overall DOM size, reducing page performance. To overcome this, developers can use the `has_widget_inner_wrapper()` method to control the number of wrapper elements the widget has.

By switching to a single wrapper, a widget can reduce the DOM size and optimize its footprint on the page. But, existing widgets that rely on the inner `.elementor-widget-container` wrapping element to style widgets, can maintain backwards compatibility.

## Widget Markup

The old, unoptimized widget markup, includes two wrapping elements:

```html
<div class="elementor-widget elementor-widget-{widget-name}">
	<div class="elementor-widget-container">
		...
	</div>
</div>
```

The new, optimized markup, has only one wrapping element:

```html
<div class="elementor-widget elementor-widget-{widget-name}">
	...
</div>
```

Elementor had previously utilized unoptimized markup. Nowadays, all Elementor and Elementor Pro widgets use optimized markup. Elementor provided a transition period for external developers to adopt the optimized widget markup.

### Wrapping Elements

The number of wrapping elements required for each widget is determined by the widget developer. Elementor provided a transition period for external developers to adopt the optimized widget markup.

Legacy widgets that require both `<div>` wrappers, including the inner `.elementor-widget-container` wrapper, use the following method in the widget:

```php
public function has_widget_inner_wrapper(): bool {
	return true;
}
```

New widgets that can work with only the outer `<div>` wrapper, without the inner `.elementor-widget-container` wrapper, use the following method in the widget:

```php
public function has_widget_inner_wrapper(): bool {
	return false;
}
```

Finnaly, widgets that do not employ the `has_widget_inner_wrapper()` function will behave like unoptimized widgets with two wrapping `<div>` elements. This behaviour may change in the future to optimize the remaining widgets.

### Future 

Developers should plan ahead for when unoptimized widgets will stop being rendered. To avoid compatibility and styling problems, every widget should include the `has_widget_inner_wrapper()` method set to return `false`.

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

This widget can't use the optimized DOM capability as it uses the inner `.elementor-widget-container` CSS class to style the widget. Therefore, setting `has_widget_inner_wrapper()` to `true` will make sure that Elementor doesn't remove the inner wrapper for this widget.

## Notes

Please note that retaining unoptimized DOM is a temporary solution that allows addon developers to maintain compatibility while updating their code. The ultimate goal is to transition all widgets to use the optimized single-wrapper structure.

Optimized DOM for widget wrappers is not only setting `has_widget_inner_wrapper()` to `false`, it requires removal of `.elementor-widget-container` from all files, including PHP, CSS and JS.

In the example code above, simply remove the `.elementor-widget-container` class from the selector:

```diff
-	'{{WRAPPER}} > .elementor-widget-container h3' => 'color: {{VALUE}};',
+	'{{WRAPPER}} h3' => 'color: {{VALUE}};',
```
