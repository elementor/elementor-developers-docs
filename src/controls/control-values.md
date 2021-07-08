# Control Values

You can set custom default values for your control settings. If, for example you added several unit types, you can define which one will be selected by default.

You can also define how the control returns the values and even determine how the control returns a style value when adding CSS rules passed by the `selectors` data argument.

## Default Value(s)

Set the default values to display when initializing the control.

If the control has two input fields where the user can define the `width` and the `height`, we can set default values for them:

```php
class Elementor_Test_Control extends \Elementor\Base_Control {

	public function get_default_value() {
		return [
			'width' => '',
			'height' => '',
		];
	}

}
```

## Return Value


## Style Value

