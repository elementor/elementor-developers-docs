# Action On Export

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

Best practice is to exclude action settings when exporting Elementor data. If your form action adds some settings ([action controls](./action-controls/)), you should not export them.

## On Export Method

The method that excludes data from the export process is called `on_export()`. This method can be used to exclude action data when you export.

```php
class Elementor_Test_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {

	public function on_export( $element ): array {

		return $element;

	}

}
```

* **On Export** - The `on_export()` method is used to clear settings when exporting. The `$element` parameter is an array containing the data of the exported element.

## Exclude Settings

In the following example will register a new section with two controls - an api key and an app id. Then we will exclude them from the exported data:

```php {16,24,35-44}
class Elementor_Test_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {

	public function register_settings_section( $widget ): void {

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

	public function on_export( $element ): array {

		unset(
			$element['custom_action_api_key'],
			$element['custom_action_app_id'],
		);

		return $element;

	}

}
```
