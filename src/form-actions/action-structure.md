# Action Structure

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

Creating custom form actions, triggered after a form's submission, is not as hard as it sounds. 

Each form action needs to have a few basic settings. First, it needs a unique name and a label that will be used in the editor. Next are the controls. These are basically optional fields where users can configure their custom data. The last setting is the actual method that executes the action once the form is submitted.

## Form Action Class

First, we need to create a class that extends the `\ElementorPro\Modules\Forms\Classes\Action_Base` class:

```php
class Elementor_Test_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {
}
```

## Form Action Structure

As mentioned above, an Elementor Form Action extends the `\ElementorPro\Modules\Forms\Classes\Action_Base` class and inherits its methods. A simple action skeleton will look as follows:

```php
class Elementor_Test_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {

	public function get_name(): string {}

	public function get_label(): string {}

	public function register_settings_section( $widget ): void {}

	public function run( $record, $ajax_handler ): void {}

	public function on_export( $element ): array {}

}
```

Let’s break it down:

* `get_name()` – Return action name (id) that will be used in the code.
* `get_label()` – Return the action label that will be displayed in the editor.
* `register_settings_section()` – (Optional) Define action controls (setting fields).
* `run()` – Runs the actual action on form submission.
* `on_export()` – Used to clear settings when exporting.
