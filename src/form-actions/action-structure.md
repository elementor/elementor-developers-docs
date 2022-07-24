# Action Structure

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

Creating custom form actions, triggered after the form submission, is not as hard as it sounds. 

Each form action needs to have a few basic settings like a unique name and a label that will be used in the editor. Next are the controls which are basically optional fields where the user can configure his custom data. The last piece is the actual method that executes the action once the form is submitted.

## Form Action Class

First, we need to create a class that extends the `\ElementorPro\Modules\Forms\Classes\Action_Base` class:

```php
class Elementor_Test_Form_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {
}
```

## Form Action Structure

As mentioned above, Elementor Form Action extends the `\ElementorPro\Modules\Forms\Classes\Action_Base` class and inherits its methods. A simple Action skeleton will look as follows:

```php
class Elementor_Test_Form_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {

	public function get_name() {}

	public function get_label() {}

	public function register_settings_section( $widget ) {}

	public function run( $record, $ajax_handler ) {}

	public function on_export( $element ) {}

}
```

Let’s break it down:

* `get_name()` – Return action name (id) that will be used in the code.
* `get_label()` – Return the action label that will be displayed in the editor.
* `register_settings_section()` – (Optional) Define action controls (setting fields).
* `run()` – Runs the actual action on form submission.
* `on_export()` – Used to clear settings when exporting.
