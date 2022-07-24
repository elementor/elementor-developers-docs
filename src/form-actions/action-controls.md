# Action Controls

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

Each action can have some [controls](./../controls/) (setting fields), where users can select their data. When the user selects this action, he will those controls. The data entered to those fields is saved in the database and later used when [triggering the action](./action-run/).

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

In the example below, we're going to add a few controls to an action to allow users save data:

```php
class Elementor_Test_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {

	public function register_settings_section( $widget ) {

		$widget->start_controls_section(
			'custom_action_section',
			[
				'label' => esc_html__( 'Custom Action', 'plugin-name' ),
				'condition' => [
					'submit_actions' => $this->get_name(),
				],
			]
		);

		$widget->add_control(
			'custom_action_api_key',
			[
				'label' => esc_html__( 'API Key', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::TEXT,
			]
		);

		$widget->add_control(
			'custom_action_app_id',
			[
				'label' => esc_html__( 'App ID', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::TEXT,
			]
		);

		$widget->end_controls_section();

	}

}
```

Please note that we rocommend to add an entire setting section dedicated to your custom action.

In addition, you should use [conditional display](./../controls/conditional-display/), to show the section only if the `submit_action` control in the Form Widget has your custom action.
