# Dynamic Tags Structure

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Each dynamic tag needs to have a few basic settings, such as a unique name. On top of that, there are some advanced settings like dynamic tag controls, which are basically optional fields where users can configure their custom data. There is also a render method that generates the final output based on user settings taken from the dynamic tag’s controls.

## Extending Dynamic Tags

To create your own control, you need to **extend** the dynamic tags control to inherit its methods:

```php
Class Elementor_Test_Tag extends \Elementor\Core\DynamicTags\Tag {
}
```

## Dynamic Tags Methods

A simple dynamic tag skeleton will look like this:

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

The dynamic tags methods can be divided into the following groups:

* [Data](./dynamic-tags-data)
* [Groups](./dynamic-tags-groups)
* [Categories](./dynamic-tags-categories)
* [Controls](./dynamic-tags-controls)
* [Rendering](./dynamic-tags-rendering)

Please note that the `\Elementor\Core\DynamicTags\Tag` class has many more methods, but the methods mentioned above will cover the vast majority of your needs.
