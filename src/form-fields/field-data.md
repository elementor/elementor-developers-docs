# Field Data

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

Every field has basic information such as the field unique ID and the field label. This data is used in the code and displayed to the user in the editor.

## Data Methods

Field data needs to be "returned" by certain methods. These methods are simple:

```php
class Elementor_Test_Field extends \ElementorPro\Modules\Forms\Fields\Field_Base {

	public function get_type(): string {
		return 'field_id';
	}

	public function get_name(): string {
		return esc_html__( 'My Field Label', 'textdomain' );
	}

}
```

* **Field Type** – The `get_type()` method returns the field id that will be used in the code.

* **Field Name** – The `get_name()` method returns the field label that will be displayed to the user.
