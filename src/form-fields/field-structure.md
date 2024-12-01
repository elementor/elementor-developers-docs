# Field Structure

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

When creating new form fields we needs to have a few basic settings like a unique name and a label that will be used in the editor. Next is the render function that outputs the field markup. The field can also have a validation check. This last piece is an optional set of controls, where a user can configure their custom data.

## Form Field Class

First, we need to create a class that extends the `\ElementorPro\Modules\Forms\Fields\Field_Base` class:

```php
class Elementor_Test_Field extends \ElementorPro\Modules\Forms\Fields\Field_Base {
}
```

## Form Field Structure

As mentioned above, Elementor form fields extend the `\ElementorPro\Modules\Forms\Fields\Field_Base` class and inherit its methods. A simple field skeleton will look as follows:

```php
class Elementor_Test_Field extends \ElementorPro\Modules\Forms\Fields\Field_Base {

	public $depended_scripts = [];

	public $depended_styles = [];

	public function get_type(): string {}

	public function get_name(): string {}

	public function render( $item, $item_index, $form ): void {}

	public function validation( $field, $record, $ajax_handler ): void {}

	public function update_controls( $widget ): void {}

}
```

Let’s break it down:

* **Field Scripts** – The `$depended_scripts` property defines the JS files required to display the field.

* **Field Styles** – The `$depended_styles` property defines the CSS files required to display the field.

* **Field Type** – The `get_type()` method returns the field name (id) that will be used in the code.

* **Field Name** – The `get_name()` method returns the field label that will be displayed to the user.

* **Field Render** – The `render()` method renders the data and displays the field output.

* **Field Validation** – The `validation()` method runs a series of checks to ensure the data complies to certain rules.

* **Field Controls** – The `update_controls()` method updates the widget controls, it allows developers to add new controls to specific field types.
