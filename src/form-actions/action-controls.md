# Action Controls

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

Each action can incorporate [controls](./../control-classes/) (setting fields), that allow users to select their data. When a user selects an action with these controls the control will be activated. Data entered into those fields is saved in the database and later used when [triggering the action](./action-run/).

## Registering Controls

In your action class, you can add controls using the `register_settings_section()` method as follows:

```php
class Elementor_Test_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {

	protected function register_settings_section( $widget ) {

		$widget->start_controls_section();

		$widget->add_control();

		$widget->add_control();

		$widget->add_control();

		$widget->end_controls_section();

	}

}
```

* **Action Controls** – The `register_settings_section()` method lets you define which controls (setting fields) the action will have. The `$widget` parameter is an instance of the form widget.

## Add Controls to your Action

In the example below, we're going to add a few controls to the widget instance to allow users to save additional data:

```php
class Elementor_Test_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {

	public function register_settings_section( $widget ) {

		$widget->start_controls_section(
			'custom_action_section',
			[
				'label' => esc_html__( 'Custom Action', 'textdomain' ),
				'condition' => [
					'submit_actions' => $this->get_name(),
				],
			]
		);

		$widget->add_control(
			'custom_action_api_key',
			[
				'label' => esc_html__( 'API Key', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::TEXT,
			]
		);

		$widget->add_control(
			'custom_action_app_id',
			[
				'label' => esc_html__( 'App ID', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::TEXT,
			]
		);

		$widget->end_controls_section();

	}

}
```

Please note that we recommend adding an entire setting section dedicated to your custom action.

In addition, you should only use [conditional display](./../control-classes/conditional-display/), to show the section if the `submit_action` control in the form widget contains your custom action. This way, the entire section is displayed only when the user selects this particular action.
