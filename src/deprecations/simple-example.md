# Simple Example

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

One example of commonly used deprecated conventions is when addon developers create [widgets](./../widgets/widget-structure/) using methods with deprecated `_` prefix. Previously, Elementor protected methods prefixed with `_` but that naming convention was deprecated. 

## Widgets

Addon developers should update their code, replacing deprecated methods. The fix is very simple, just remove the `_` prefixes:

```diff
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_name(): string {}

	public function get_title(): string {}

	public function get_icon(): string {}

	public function get_categories(): array {}

-	protected function _register_controls(): void {}
+	protected function register_controls(): void {}

-	protected function _render(): void {}
+	protected function render(): void {}

-	protected function _content_template(): void {}
+	protected function content_template(): void {}

}
```
