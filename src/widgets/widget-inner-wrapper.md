# Widget DOM Optimization

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Elementor widgets define their own markup in the `render()` method. However, Elementor wraps each widget in two `<div>` elements; the outer `<div class="elementor-widget">` element, and the inner `<div class="elementor-widget-container">` element. These additional wrappers allow Elementor to add additional styles like background, margins, borders, motion effects, etc.

Two wrappers for each widget increases the overall DOM size, reducing page performance. To overcome this, developers can use the `has_widget_inner_wrapper()` method to control the number of wrapper elements the widget has.

By switching to a single wrapper, a widget can reduce the DOM size and optimize its footprint on the page. However, existing widgets that rely on the inner `.elementor-widget-container` wrapping element to style widgets, can maintain backwards compatibility.

## Widget Markup

The current, unoptimized widget markup, includes two wrapping elements:

```html
<div class="elementor-widget elementor-widget-{widget-name}">
	<div class="elementor-widget-container">
		...
	</div>
</div>
```

The optimized markup has only one wrapping element:

```html
<div class="elementor-widget elementor-widget-{widget-name}">
	...
</div>
```

Elementor had previously utilized unoptimized markup. Nowadays, the only websites with unoptimized markup are those that have deactivated the "Optimized DOM" feature. When enough addons have embraced this feature, Elementor will activate it on all websites.

### Wrapping Elements

The number of wrapping elements that each widget needs is up to the widget developer.

If it's a legacy widget that requires both `<div>` wrappers, as it reqieres the inner `.elementor-widget-container` wrapper, add the following method to the widget:

```php
public function has_widget_inner_wrapper(): bool {
	return true;
}
```

If it's a new widget that can work with only the outer `<div>` wrapper, without the inner `.elementor-widget-container` wrapper, add the following method to the widget:

```php
public function has_widget_inner_wrapper(): bool {
	return false;
}
```

If it's a legacy widget that was already optimized, and prefer to leave the choice to the website, based on the feature activation status, add the following method to the widget:

```php
public function has_widget_inner_wrapper(): bool {
	return ! Plugin::$instance->experiments->is_feature_active( 'e_optimized_markup' );
}
```

Finnaly, widgets that do not employ the `has_widget_inner_wrapper()` function will behave like unoptimized widgets with two wrapping `<div>` elements.

In any case, whether the experiment is active or not, developer need to think about the future when Elementor merges this feature. To prevent styling issues, make the nesseary updates. Add the `has_widget_inner_wrapper()` to all the widgets.

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
