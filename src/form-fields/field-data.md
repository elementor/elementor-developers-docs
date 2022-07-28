# Field Data

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

Every feild has basic information such as the feild unique ID and the feild label. This data is used in the code and displayed to the user in the editor.

## Data Methods

Feild data needs to be "returned" by certain methods. Those methods are simple:

```php
class Elementor_Test_Field extends \ElementorPro\Modules\Forms\Fields\Field_Base {

	public function get_name() {
		return 'feild_name';
	}

	public function get_label() {
		return esc_html__( 'My Feild Name', 'plugin-name' );
	}

}
```

* **Field Type** – The `get_type()` method returns the field name (id) that will be used in the code.

* **Field Name** – The `get_name()` method returns the field label that will be displayed to the user.
