# Control Structure

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Creating custom controls is a task reserved for advanced Elementor developers who are very familiar with the code base. The process starts with learning the `Base_Control` class, along with its inner methods. This will allow you to understand how Elementor creates different controls and how you can customize these base methods.

Each control must have two basic methods - a unique name and the HTML code that displays the field in the editor. More advanced controls can set custom settings, define default values, enqueue scripts and styles, and much more.

## Extending Controls

To create your own control, you need to **extend** the abstract base controls:

```php
class Elementor_Test_Control extends \Elementor\Base_Control {
}
```

You can also extend one of the [specific control types](./../editor-controls/control-types/):

```php
class Elementor_Test_Control extends \Elementor\Base_Data_Control {
}
```

This way your class will inherit all the methods from the class you extend.

## Control Methods

A simple control only requires two methods, the control type and the template:

```php
class Elementor_Test_Control extends \Elementor\Base_Control {

	public function get_type(): string {}

	public function content_template(): void {}

}
```

More advanced controls can use other available methods:

```php
class Elementor_Test_Control extends \Elementor\Base_Control {

	public function get_type(): string {}

	protected function get_default_settings(): array {}

	public function get_default_value(): string {}

	public function content_template(): void {}

	public function enqueue(): void {}

}
```

These methods can be divided into the following groups:

* [Settings](./control-settings/)
* [Template](./control-template/)
* [Values](./control-values/)
* [Enqueue](./control-enqueue/)
