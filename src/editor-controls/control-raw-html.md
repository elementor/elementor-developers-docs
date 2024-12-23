# Raw HTML Control

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

Elementor raw HTML control displays an HTML content in the panel.

The control is defined in `Control_Raw_Html` class which extends `Base_UI_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::RAW_HTML` constant.

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
			<td>raw_html</td>
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
			<td>Set the position of the control separator. Available values are <code>default</code>, <code>before</code> and <code>after</code>. <code>default</code> will hide the separator, unless the control type has specific separator settings. <code>before</code> / <code>after</code> will position the separator before/after the control.</td>
		</tr>
		<tr>
			<td><code>raw</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>The HTML markup.</td>
		</tr>
		<tr>
			<td><code>content_classes</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>CSS classes to add to the control wrapper.</td>
		</tr>
	</tbody>
</table>

## Return Value

This control does not return any value.

## Usage

```php {14-22}
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls(): void {

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'important_note',
			[
				'label' => esc_html__( 'Important Note', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::RAW_HTML,
				'raw' => esc_html__( 'A very important message to show in the panel.', 'textdomain' ),
				'content_classes' => 'your-class',
			]
		);

		$this->end_controls_section();

	}

}
```
