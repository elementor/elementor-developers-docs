# Action On Export

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

It's best practice to exclude action settings when exporting Elementor data. If your form action adds some settings ([action controls](./action-controls/)), you should not export them.

## On Export Method

The method that excludes data from export called `on_export()`. This method can be used to excludes the action data on export.

```php
class Elementor_Test_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {

	public function on_export( $element ) {

		return $element;

	}

}
```

* **On Export** - The `on_export()` method beeing used to clear settings when exporting. The `$element` parameter is an array containing the data of the exported Element.

## Exclude Settings

In the following example will register a new section with two controls, api key and app id. Then we exclude them from export:

```php {16,24,35-44}
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

	public function on_export( $element ) {

		unset(
			$element['custom_action_api_key'],
			$element['custom_action_app_id'],
		);

		return $element;

	}

}
```
