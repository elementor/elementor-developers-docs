# Action Run

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

The actual method that executes the action once the form is submitted. This is the main method the action triggers. It can use optional data from custom controls, but it's not required.

## Run Method

The method that triggers the action called `run()`. The method is execudet only when the the form is submitted. In your action class, use the method as follows:

```php
class Elementor_Test_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {

	public function run( $record, $ajax_handler ) {

		// ...

	}

}
```

* **Run Action** - The `run()` method triggers the actual action when Elementor forms is submitted. The `$record` parameter is a form record instance and the `$ajax_handler` is an instance of form ajax handler.

## Execute Action

Developers can execute any code on form submission, the posibilities are endless. Let's see some examples.

### Send an Email

In the example below, we're going to send an email each time a form is submitted:

```php
class Elementor_Test_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {

	public function run( $record, $ajax_handler ) {

		wp_mail( /* ... */ );

	}

}
```

### Send HTTP Request

In the following example will send HTTP request on each form submission:

```php
class Elementor_Test_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {

	public function run( $record, $ajax_handler ) {

		wp_remote_post( /* ... */ )

	}

}
```

### Create WordPress Post/Page/CPT

Another use case in to create WordPress CPTs on every form submission:

```php
class Elementor_Test_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {

	public function run( $record, $ajax_handler ) {

		wp_insert_post( /* ... */ );

	}

}
```
