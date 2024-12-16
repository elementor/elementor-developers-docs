# Widget Optimization

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Elementor offers several methods and best practices to optimize widgets and improve performance. The optimizations are not implemented for all widgets in order to maintain backwards compatibility. In addition, each widget has its own characteristics. The widget developer needs to add some extra methods to the widget class to make sure Elementor knows how to process it.

## Performance Optimization Methods

Elementor widgets has two performance optimization methods:

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function has_widget_inner_wrapper(): bool {}

	protected function is_dynamic_content(): bool {}

}
```

* **DOM Optimization** - The `has_widget_inner_wrapper()` method lets you determine whether the widget uses optimized DOM structure or not.

* **Element Output Caching** - The `is_dynamic_content()` method lets you determine whether the widget returns dynamic content, to cache the element HTML output or not.
