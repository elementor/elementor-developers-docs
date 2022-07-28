# Field Structure

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

When creating form fields we needs to have a few basic settings like a unique name and a label that will be used in the editor. Next is the render function that outputs the field markup. The field can also have a validation check. The last piece is an optional set of controls, where user can configure his custom data.

## Form Field Class

First, we need to create a class that extends the `\ElementorPro\Modules\Forms\Fields\Field_Base` class:

```php
class Elementor_Test_Field extends \ElementorPro\Modules\Forms\Fields\Field_Base {
}
```

## Form Field Structure

As mentioned above, Elementor Form Field extends the `\ElementorPro\Modules\Forms\Fields\Field_Base` class and inherits its methods. A simple field skeleton will look as follows:

```php
class Elementor_Test_Field extends \ElementorPro\Modules\Forms\Fields\Field_Base {

	public function get_type() {}

	public function get_name() {}

	public function render( $item, $item_index, $form ) {}

	public function validation( $field, $record, $ajax_handler ) {}

	public function update_controls( $widget ) {}

}
```

Let’s break it down:

* **Field Type** – The `get_type()` method returns the field name (id) that will be used in the code.

* **Field Name** – The `get_name()` method returns the field label that will be displayed to the user.

* **Field Render** – The `render()` method renders the data and display the field output.

* **Field Validation** – The `validation()` method runs a series of checks to ensure the data complies to certain rules.

* **Field Controls** – The `update_controls()` method updates the widget controls, it allows to add new controls to specific field types.
