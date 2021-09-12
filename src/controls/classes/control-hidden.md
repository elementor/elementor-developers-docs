# Hidden Control

Elementor hidden control adds a hidden input field to the panel. It used to save additional data in the database without a visual presentation in the panel. This means that Elementor users do not have access to this control.

The control is defined in `Control_Hidden` class which extends `Base_Data_Control` class.

Note that when using the control, the type should be set using the `\Elementor\Controls_Manager::HIDDEN` constant.

## Arguments

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Type</th>
			<th>Default</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>type</code></td>
			<td><code>string</code></td>
			<td>hidden</td>
			<td>The type of the control.</td>
		</tr>
		<tr>
			<td><code>label</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>The label that appears above of the field. But in this case it won’t be displayed.</td>
		</tr>
		<tr>
			<td><code>default</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>The field default value.</td>
		</tr>
	</tbody>
</table>

## Return Value

(_`string`_) The hidden field value.

## Usage

```php {14-21,29,34}
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'view',
			[
				'label' => esc_html__( 'View', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::HIDDEN,
				'default' => 'traditional',
			]
		);

		$this->end_controls_section();

	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		echo $settings['view'];
	}

	protected function content_template() {
		?>
		{{{ settings.view }}}
		<?php
	}

}
```
