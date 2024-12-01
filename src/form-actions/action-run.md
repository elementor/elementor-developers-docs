# Action Run

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

The actual method that executes the action when a form is submitted. This is the main method the action triggers. It can use optional data from custom controls, but that is not required.

## Run Method

The method that triggers the action is called `run()`. The method is executed only when the form is submitted. In your action class, use the method as follows:

```php
class Elementor_Test_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {

	public function run( $record, $ajax_handler ): void {

		// ...

	}

}
```

* **Run Action** - The `run()` method triggers the actual action when a form is submitted. The `$record` parameter is a form record instance and the `$ajax_handler` is an instance of the form ajax handler.

## Execute Action

Developers can execute any code on form submission, the possibilities are endless. Let's see some examples.

### Send an Email

In the example below, we'll send an email each time a form is submitted:

```php
class Elementor_Test_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {

	public function run( $record, $ajax_handler ): void {

		wp_mail( /* ... */ );

	}

}
```

### Send HTTP Request

In the following example we'll send an HTTP request every time a form is submitted:

```php
class Elementor_Test_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {

	public function run( $record, $ajax_handler ): void {

		wp_remote_post( /* ... */ )

	}

}
```

### Create WordPress Post/Page/CPT

Another use case is to create WordPress CPTs after every form submission:

```php
class Elementor_Test_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {

	public function run( $record, $ajax_handler ): void {

		wp_insert_post( /* ... */ );

	}

}
```
