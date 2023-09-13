# Simple Example

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

One example of commonly used deprecated conventions is when addon developers create [widgets](./../widgets/widget-structure/) using methods with deprecated `_` prefix. Previously, Elementor protected methods prefixed with `_` but that naming convention was deprecated. 

## Widgets

Addon developers should update their code, replacing deprecated methods. The fix is very simple, just remove the `_` prefixes:

```diff
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_name() {}

	public function get_title() {}

	public function get_icon() {}

	public function get_categories() {}

-	protected function _register_controls() {}
+	protected function register_controls() {}

-	protected function _render() {}
+	protected function render() {}

-	protected function _content_template() {}
+	protected function content_template() {}

}
```
