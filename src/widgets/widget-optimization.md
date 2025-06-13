# Widget Optimization

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Elementor provides various methods to optimize widgets and enhance performance. To maintain backward compatibility, not all optimizations are applied to every widget. Additionally, each widget has unique characteristics, so certain optimizations may not be applicable in all cases.

## Performance Optimization Methods

Widget developers can implement the following two optional methods in their widget classes to help Elementor handle widgets more efficiently:

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function has_widget_inner_wrapper(): bool {}

	protected function is_dynamic_content(): bool {}

}
```

* **DOM Optimization** - The `has_widget_inner_wrapper()` method lets you determine whether the widget uses optimized DOM structure or not.

* **Element Output Caching** - The `is_dynamic_content()` method lets you determine whether the widget returns dynamic content, to cache the element HTML output or not.
