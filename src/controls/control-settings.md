# Control Settings

**Control Settings** is the place where you set the default of your control like the label, description, whether to show a separator, hide the label, etc.

## Available Settings

Each control has a set of default settings that determine the structure and the design of the control in the panel. Those default setting are defined in the `$_base_settings` property.  Here is the list of default settings that all control have in common:

| Name          | Type       | Default   | Description                                      |
|---------------|------------|-----------|--------------------------------------------------|
| `label`       | _`string`_ |           | The label that appears above of the field.       |
| `description` | _`string`_ |           | The description that appears below the field.    |
| `show_label`  | _`bool`_   | `true`    | Whether to display the label.                    |
| `label_block` | _`bool`_   | `false`   | Whether to display the label in a separate line. |
| `separator`   | _`string`_ | `default` | Set the position of the control separator. Available values are `default`, `before`, `after` and `none`. `default` will position the separator depending on the control type. `before` / `after` will position the separator before/after the control. `none` will hide the separator. |

Each control can override the default settings and add new custom settings.

## Settings Method

If the control will use the default settings, you don't need to add it to your class. If you would like to change the default settings or add new ones, use the `get_default_settings()` method. This method should return an array:

```php
class Elementor_Test_Control extends \Elementor\Base_Control {

	protected function get_default_settings() {

		return [
			'label_block' => true,
			'separator' => 'after',
			'new_settings_value' => '',
			'new_multiple_values' => [],
		];

	}

}
```

Later on, you can utilize those settings when generating [Control Template](./control-template/).

## Dynamic Tags

You can also support [Dynamic Tags](/dynamic-tags/) in your controls. To use this feature in your controls you add the `dynamic` setting:

```php {9-12}
class Elementor_Test_Control extends \Elementor\Base_Control {

	protected function get_default_settings() {

		return [
			'show_label' => true,
			'label_block' => true,
			'separator' => 'after',
			'dynamic' => [
				'active' => true,
				'categories' => [ \Elementor\Modules\DynamicTags\Module::TEXT_CATEGORY ],
			],
		];

	}

}
```
