# Alert Control

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

<img :src="$withBase('/assets/img/controls/control-alert.png')" alt="Alert Control" style="float: right;">

Elementor alert control displays a four types of alerts in the panel based on the severity of the message: info, success, warning and danger.

The control is defined in `Control_Alert` class which extends `Base_UI_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::ALERT` constant.

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
			<td>alert</td>
			<td>The type of the control.</td>
		</tr>
		<tr>
			<td><code>separator</code></td>
			<td><code>string</code></td>
			<td>default</td>
			<td>Set the position of the control separator. Available values are <code>default</code>, <code>before</code> and <code>after</code>. <code>default</code> will hide the separator, unless the control type has specific separator settings. <code>before</code> / <code>after</code> will position the separator before/after the control.</td>
		</tr>
		<tr>
			<td><code>alert_type</code></td>
			<td><code>string</code></td>
			<td>info</td>
			<td>The type of the alert. Available values are <code>info</code>, <code>success</code>, <code>warning</code> and <code>danger</code>.</td>
		</tr>
		<tr>
			<td><code>heading</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>The heading that appears above of the alert.</td>
		</tr>
		<tr>
			<td><code>content</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>The content of the alert.</td>
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
			'custom_panel_alert',
			[
				'type' => \Elementor\Controls_Manager::ALERT,
				'alert_type' => 'warning',
				'heading' => esc_html__( 'Custom Alert', 'textdomain' ),
				'content' => esc_html__( 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'textdomain' ) . ' <a href="">' . esc_html__( 'Learn more', 'textdomain' ) . '</a>',
			]
		);

		$this->end_controls_section();

	}

}
```
