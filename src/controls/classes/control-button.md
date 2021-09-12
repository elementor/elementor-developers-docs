# Button Control

Elementor button control displays a button in the panel that can trigger an event.

The control is defined in `Control_Button` class which extends `Base_UI_Control` class.

Note that when using the control, the type should be set using the `\Elementor\Controls_Manager::BUTTON` constant.

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
			<td>button</td>
			<td>The type of the control.</td>
		</tr>
		<tr>
			<td><code>label</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>The label that appears above of the field.</td>
		</tr>
		<tr>
			<td><code>description</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>The description that appears below the field.</td>
		</tr>
		<tr>
			<td><code>show_label</code></td>
			<td><code>bool</code></td>
			<td>true</td>
			<td>Whether to display the label.</td>
		</tr>
		<tr>
			<td><code>label_block</code></td>
			<td><code>bool</code></td>
			<td>false</td>
			<td>Whether to display the label in a separate line.</td>
		</tr>
		<tr>
			<td><code>separator</code></td>
			<td><code>string</code></td>
			<td>default</td>
			<td>Set the position of the control separator. Available values are <code>default</code>, <code>before</code>, <code>after</code> and <code>none</code>. <code>default</code> will position the separator depending on the control type. <code>before</code> / <code>after</code> will position the separator before/after the control. <code>none</code> will hide the separator.</td>
		</tr>
		<tr>
			<td><code>text</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>The button text.</td>
		</tr>
		<tr>
			<td><code>button_type</code></td>
			<td><code>string</code></td>
			<td>default</td>
			<td>The button type. Available values are <code>default</code> and <code>success</code>.</td>
		</tr>
		<tr>
			<td><code>event</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>The event the button will trigger. The event will be triggered via <code>elementor.channels.editor.on( event )</code>.</td>
		</tr>
	</tbody>
</table>

## Return Value

This control does not return any value.

## Usage

```php {14-24}
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
			'delete_content',
			[
				'label' => esc_html__( 'Delete Content', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::BUTTON,
				'separator' => 'before',
				'button_type' => 'success',
				'text' => esc_html__( 'Delete', 'plugin-name' ),
				'event' => 'namespace:editor:delete',
			]
		);

		$this->end_controls_section();

	}

}
```
