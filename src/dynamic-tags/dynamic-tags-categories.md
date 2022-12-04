# Dynamic Tags Categories

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

When controls are created, developers can define whether the [control can accept dynamic data](./../editor-controls/dynamic-content/) or not. If the control does accept dynamic data, then a data type (e.g. text values, colors, images) must be set. Dynamic tags, on the other hand, need to define what types of data they return to the control.

This is where categories come in handy. Elementor Pro has a list of categories arranged by data type, which are returned by the dynamic tag to the control.

## Available Category Constants

Elementor Pro has the following predefined dynamic tag category constants:

| Constant             | Value       | Info                                 |
|----------------------|-------------|--------------------------------------|
| `NUMBER_CATEGORY`    | `number`    | Dynamic tags for number controls     |
| `TEXT_CATEGORY`      | `text`      | Dynamic tags for text controls       |
| `URL_CATEGORY`       | `url`       | Dynamic tags for URL controls        |
| `COLOR_CATEGORY`     | `color`     | Dynamic tags for color controls      |
| `IMAGE_CATEGORY`     | `image`     | Dynamic tags for image controls      |
| `MEDIA_CATEGORY`     | `media`     | Dynamic tags for media controls      |
| `GALLERY_CATEGORY`   | `gallery`   | Dynamic tags for gallery controls    |
| `POST_META_CATEGORY` | `post_meta` | Dynamic tags for post meta controls  |

::: warning Please Note
In older Elementor versions, you could define the returned value as simple text like `url`, `number`, `text`, `media` etc. As Elementor has evolved, it replaced the text based values with predefined uppercase `constants`. We strongly recommend you replace old text base values with new category constants.
:::

## Applying Categories on Dynamic Tags

When creating new dynamic tags, you need to define what data type the tag will return. This is done with the `get_categories()` method:

```php
class Elementor_Test_Tag extends \Elementor\Core\DynamicTags\Tag {

	public function get_categories() {
		return [ \Elementor\Modules\DynamicTags\Module::TEXT_CATEGORY ];
	}

}
```

The method returns an array, meaning that the dynamic tag can return several data types to the control:

```php
class Elementor_Test_Tag extends \Elementor\Core\DynamicTags\Tag {

	public function get_categories() {
		return [
			\Elementor\Modules\DynamicTags\Module::URL_CATEGORY,
			\Elementor\Modules\DynamicTags\Module::TEXT_CATEGORY,
			\Elementor\Modules\DynamicTags\Module::NUMBER_CATEGORY
		];
	}

}
```

## Using Categories in Controls

On the other hand, when you create [controls](./../editor-controls/), you need to support dynamic tags when defining the [control settings](./../controls/control-settings/) through the `get_default_settings()` method and choose the category to display:

```php {13-19}
class Elementor_Test_Control extends \Elementor\Base_Control {

	public function get_type() {}

	public function content_template() {}

	protected function get_default_settings() {

		return [
			'show_label' => true,
			'label_block' => true,
			'separator' => 'after',
			'dynamic' => [
				'active' => true,
				'categories' => [
					\Elementor\Modules\DynamicTags\Module::TEXT_CATEGORY,
					\Elementor\Modules\DynamicTags\Module::NUMBER_CATEGORY
				],
			],
		];

	}

}
```
