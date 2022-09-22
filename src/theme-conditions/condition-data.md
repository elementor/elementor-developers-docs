# Condition Data

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

Every condition has basic information such as the condition unique ID and the condition label. This data is used in the code and displayed to the user in the editor.

## Data Methods

Condition data needs to be "returned" by certain methods. Those methods are simple:

```php
class Elementor_Test_Condition extends \ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base {

	public function get_name() {
		return 'condition_name';
	}

	public function get_label() {
		return esc_html__( 'My Condition Name', 'textdomain' );
	}

}
```

* **Condition Type** – The `get_type()` method returns the condition name (id) that will be used in the code.

* **Condition Name** – The `get_name()` method returns the condition label that will be displayed to the user.
