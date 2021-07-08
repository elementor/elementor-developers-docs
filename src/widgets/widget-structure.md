# Widget Structure

Creating a custom Elementor Widget is not very different from creating a native WordPress widget, you basically start by creating a class that extends the `\Elementor\Widget_Base` class and fill in all the required methods.

Each widget needs to have a few basic settings like a unique name that the widget will be identified by in the code, a title that will be used as the widget label and an icon. On top of that we have some advanced settings like the widget controls which are basically the fields where the user select his custom data, and the render script that generates the final output based on the user data from the widget controls.

## Widget Class

First we need to create a class that extends the `\Elementor\Widget_Base` class:

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {
}
```

## Widget Methods

A simple widget skeleton class will look as follows:

```php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_name() {}

	public function get_title() {}

	public function get_icon() {}

	public function get_custom_help_url() {}

	public function get_categories() {}

	public function get_script_depends() {}

	public function get_style_depends() {}

	protected function _register_controls() {}

	protected function render() {}

	protected function _content_template() {}

}
```

The `\Elementor\Widget_Base` class has many more methods, but the vast majority of your needs are covered by the methods mentioned above.

The methods can be divided into five groups:

* [Data](./widget-data)
* [Grouping](./widget-categories)
* [Dependencies](./widget-dependencies)
* [Controls](./widget-controls)
* [Rendering](./widget-rendering)

<!-- 
Let’s break it down:

* **Widget Name** – The `get_name()` method is a simple one, you just need to return a widget name that will be used in the code.
* **Widget Title** – The `get_title()` method, which again, is a very simple one, you need to return the widget title that will be displayed as the widget label.
* **Widget Icon** – The `get_icon()` method is an optional but recommended method, it lets you set the widget icon. you can use any of the eicon or font-awesome icons, simply return the class name as a string.
* **Widget Categories** – The `get_categories()` method lets you set the category of the widget, return the category name as a string.
* **Script Dependencies** – The `get_script_depends()` method lets you define JS files required to run the widget.
* **Style Dependencies** – The `get_style_depends()` method lets you define CSS files required to run the widget.
* **Widget Controls** – The `_register_controls()` method lets you define which controls (setting fields) your widget will have.
* **Render Frontend Output** – The `render()` method, which is where you actually render the code and generate the final HTML on the frontend using PHP.
* **Render Editor Output** – The `_content_template()` method, is where you render the editor output to generate the live preview using a Backbone JavaScript template.
 -->
