# Widget Structure

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Intermediate" />

Creating a custom Elementor Widget is not very different from creating a native WordPress widget. Start by creating a class that extends the `\Elementor\Widget_Base` class and fill in all the required methods.

Each widget needs to have a few basic settings - a unique name that will identify the widget in the code, a title that will be used as the widget label, and an icon. There are also advanced settings such as widget controls which are the fields where users select their custom data, and a render script that generates the final output based on user data from the widget controls.

## Widget Class

First, we need to create a class that extends the `\Elementor\Widget_Base` class:

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {
}
```

## Widget Methods

A simple widget skeleton class will look as follows:

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_name(): string {}

	public function get_title(): string {}

	public function get_icon(): string {}

	public function get_categories(): array {}

	public function get_keywords(): array {}

	public function get_custom_help_url(): string {}

	protected function get_upsale_data(): array {}

	public function get_script_depends(): array {}

	public function get_style_depends(): array {}

	public function has_widget_inner_wrapper(): bool {}

	protected function is_dynamic_content(): bool {}

	protected function register_controls(): void {}

	protected function render(): void {}

	protected function content_template(): void {}

}
```

The `\Elementor\Widget_Base` class has many more methods, but the vast majority of your needs are covered by the methods mentioned above.

These methods can be divided into five groups:

* [Data](./widget-data/)
* [Dependencies](./widget-dependencies/)
* [Controls](./widget-controls/)
* [Rendering](./widget-rendering/)
