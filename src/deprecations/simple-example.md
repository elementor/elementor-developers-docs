# Simple Example

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

A good example we often see is when addon developers create [widgets](./../widgets/widget-structure/) using deprecated methods prefixed with `_`. In the past, protected methods prefixed with `_` but in some point Elementor abandoned this naming convention.

## Widgets

Addons developers should update their code, replaceing deprecated methods. The fix is simple enough:

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
