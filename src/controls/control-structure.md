# Control Structure

Creating a custom Control is a task reserved for advanced Elementor developers, you should be well familiar with the code base before creating your own controls. The first place to start with is the `Base_Control` class and all the inner methods, then you should see how Elementor creates different controls implementing the base methods with custom needs.

Each control needs to have a two basic methods, the control unique name and the HTML code that displays the field in the editor. More advanced controls can set custom settings, define default values, enqueue scripts and style, and do almost everything you imagination can think of.

## Extending Controls

To create your own control, you need to **extend** the abstract base controls:

```php
class Control_Test extends \Elementor\Base_Control {
}
```

You can also extend one of the [specific control types](./control-types):

```php
class Control_Test extends \Elementor\Base_Data_Control {
}
```

This way your class will inherits all the methods from the class you extend.

## Control Methods

A simple Control requires only two methods, the control type and the template:

```php
class Elementor_Test_Control extends \Elementor\Base_Control {

	public function get_type() {}

	public function content_template() {}

}
```

More advanced controls can use other available methods:

```php
class Elementor_Test_Control extends \Elementor\Base_Control {

	public function get_type() {}

	protected function get_default_settings() {}

	public function get_default_value() {}

	public function get_value() {}

	public function get_style_value() {}

	public function content_template() {}

	public function enqueue() {}

}
```

The methods can be divided into the following groups:

* [Settings](./control-settings/)
* [Template](./control-template/)
* [Values](./control-values/)
* [Enqueue](./control-enqueue)
