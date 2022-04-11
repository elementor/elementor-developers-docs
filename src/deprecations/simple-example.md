# Simple Example

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

One example of commonly used deprecated conventions is when addon developers create [widgets](./../widgets/widget-structure/) using the deprecated prefix `_`. Previously, Elementor protected methods prefixed with `_` but that naming convention was deprecated. 

## Widgets

Addon developers should update their code, replacing deprecated methods. The fix is simple enough:

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
