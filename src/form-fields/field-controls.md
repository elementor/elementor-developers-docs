# Field Controls

<Badge type="tip" vertical="top" text="Elementor Pro" /> <Badge type="warning" vertical="top" text="Advanced" />

Form fields can have additional controls where users can customize the form field. When the field is added to the form, those controls will be displayed in the field setting. The data entered into those controls is saved in the database and later can be used to render the field output or validate the field value.

## Registering Controls

In your field class, you can add controls using the `update_controls()` method as follows:

```php
class Elementor_Test_Field extends \ElementorPro\Modules\Forms\Fields\Field_Base {

	public function update_controls( $widget ) {

		/* ... */

	}

}
```

* **Field Controls** – The `update_controls()` method updates the widget controls, it allows developers to add new controls to specific field types. The `$widget` parameter is an instance of the form widget.

## Add Controls to your Field

In the example below, we're going to add some controls to the widget instance in order to allow users to customize the form field:

```php {13-36}
class Elementor_Test_Field extends \ElementorPro\Modules\Forms\Fields\Field_Base {

	public function update_controls( $widget ) {

		$elementor = \ElementorPro\Plugin::elementor();

		$control_data = $elementor->controls_manager->get_control_from_stack( $widget->get_unique_name(), 'form_fields' );

		if ( is_wp_error( $control_data ) ) {
			return;
		}

		$field_controls = [
			'first-control' => [
				'name' => 'first-control',
				'label' => esc_html__( 'First Control', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'condition' => [
					'field_type' => $this->get_type(),
				],
				'tab'          => 'content',
				'inner_tab'    => 'form_fields_content_tab',
				'tabs_wrapper' => 'form_fields_tabs',
			],
			'second-control' => [
				'name' => 'second-control',
				'label' => esc_html__( 'Second Control', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'condition' => [
					'field_type' => $this->get_type(),
				],
				'tab'          => 'content',
				'inner_tab'    => 'form_fields_content_tab',
				'tabs_wrapper' => 'form_fields_tabs',
			],
		];

		$control_data['fields'] = $this->inject_field_controls( $control_data['fields'], $field_controls );

		$widget->update_control( 'form_fields', $control_data );

	}

}
```

Basically we are injecting new field controls into the form widget. These fields are injected into the "*field's repeater*" where the user adds fields to their form.

The `$control_data` is the fields repeater inside the form widget. The code is injecting new fields with display condition that shows them only on specific field type and only on the field content tab.

<img :src="$withBase('/assets/img/elementor-form-field-controls.png')" alt="Elementor Form - Field Controls">
