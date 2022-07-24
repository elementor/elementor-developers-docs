# Action Data

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

Every action has basic information such as the action unique ID and the action label. This data is used in the code and displayed to the user in the editor.

## Data Methods

Action data needs to be "returned" by certain methods. Those methods are simple:

```php
class Elementor_Test_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {

	public function get_name() {
		return 'action_name';
	}

	public function get_label() {
		return esc_html__( 'My Action Name', 'plugin-name' );
	}

}
```

* **Action Name** - The `get_name()` method return the action name (id) as it will be used in the code.

* **Action Label** - The `get_label()` method return the action label as it will be displayed in the editor to the user.
