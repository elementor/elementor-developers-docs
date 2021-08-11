# Dynamic Tags Structure

Each Dynamic Tag needs to have a few basic settings like a unique name, a title that will be used. On top of that, we have some advanced settings like the Dynamic Tag controls which are basically optional fields where the user can configure his custom data. And a render method that generates the final output based on the user settings from the Dynamic Tag’s controls.

## Extending Dynamic Tags

To create your own control, you need to **extend** the dynamic tags control to inherits its methods:

```php
Class Elementor_Test_Tag extends \Elementor\Core\DynamicTags\Tag {
}
```

## Dynamic Tags Methods

A simple Dynamic Tag skeleton will look like this:

```php
Class Elementor_Test_Tag extends \Elementor\Core\DynamicTags\Tag {

	public function get_name() {}

	public function get_title() {}

	public function get_group() {}

	public function get_categories() {}

	protected function register_controls() {}

	public function render() {}

}
```

The methods can be divided into the following groups:

* [Data](./dynamic-tags-data)
* [Groups](./dynamic-tags-groups)
* [Categories](./dynamic-tags-categories)
* [Controls](./dynamic-tags-controls)
* [Rendering](./dynamic-tags-rendering)

Please note that the `\Elementor\Core\DynamicTags\Tag` class has many more methods used to do different things, but the methods mentioned above will cover the vast majority of your needs.
