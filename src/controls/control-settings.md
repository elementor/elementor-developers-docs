# Control Settings

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Advanced" />

**Control settings** allow developers to set defaults for controls such as the label, description, whether or not to show a separator, hide the label, etc.

## Available Settings

Each control has default settings that determine the structure and design of the control in the panel. These default setting are defined in the `$_base_settings` property.  Following, is the list of default settings which all controls have in common:

| Name          | Type       | Default   | Description                                      |
|---------------|------------|-----------|--------------------------------------------------|
| `label`       | _`string`_ |           | The label that appears above of the field        |
| `description` | _`string`_ |           | The description that appears below the field     |
| `show_label`  | _`bool`_   | `true`    | Whether or not to display the label              |
| `label_block` | _`bool`_   | `false`   | Whether or not to display the label in a separate line  |
| `separator`   | _`string`_ | `default` | Set the position of the control separator. Available values are `default`, `before` and `after`. `default` will hide the separator, unless the control type has specific separator settings. `before` / `after` will position the separator before/after the control. |

Each control can override the default settings and add new custom settings.

## Settings Method

If a control uses the default settings, you don't need to add it to your class. If you would like to change the default settings or add new ones, use the `get_default_settings()` method. This method should return an array:

```php
class Elementor_Test_Control extends \Elementor\Base_Control {

	protected function get_default_settings(): array {

		return [
			'label_block' => true,
			'separator' => 'after',
			'new_settings_value' => '',
			'new_multiple_values' => [],
		];

	}

}
```

Later on, you can utilize those settings when generating a [control template](./control-template/).
