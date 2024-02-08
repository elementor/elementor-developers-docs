# Notice Control

<Badge type="tip" vertical="top" text="Elementor Core" /> <Badge type="warning" vertical="top" text="Basic" />

<img :src="$withBase('/assets/img/controls/control-notice.png')" alt="Notice Control" style="float: right;">

Elementor notice control displays a four types of notices in the panel based on the severity of the message: info, success, warning and danger.

Unlike the [alert control](./control-alert/), the notice control has the option to make it dismissible, allowing the user to close the message and never show it again.

The control is defined in `Control_Notice` class which extends `Base_UI_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::NOTICE` constant.

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
			<td>notice</td>
			<td>The type of the control.</td>
		</tr>
		<tr>
			<td><code>separator</code></td>
			<td><code>string</code></td>
			<td>default</td>
			<td>Set the position of the control separator. Available values are <code>default</code>, <code>before</code> and <code>after</code>. <code>default</code> will hide the separator, unless the control type has specific separator settings. <code>before</code> / <code>after</code> will position the separator before/after the control.</td>
		</tr>
		<tr>
			<td><code>notice_type</code></td>
			<td><code>string</code></td>
			<td>info</td>
			<td>The type of the notice. Available values are <code>info</code>, <code>success</code>, <code>warning</code> and <code>danger</code>.</td>
		</tr>
		<tr>
			<td><code>dismissible</code></td>
			<td><code>bool</code></td>
			<td>false</td>
			<td>Allow the user to dismiss the notice.</td>
		</tr>
		<tr>
			<td><code>heading</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>The heading that appears above of the notice.</td>
		</tr>
		<tr>
			<td><code>content</code></td>
			<td><code>string</code></td>
			<td></td>
			<td>The content of the notice.</td>
		</tr>
	</tbody>
</table>

## Return Value

This control does not return any value.

## Usage

```php {14-23}
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'custom_panel_notice',
			[
				'type' => \Elementor\Controls_Manager::NOTICE,
				'notice_type' => 'warning',
				'dismissible' => true,
				'heading' => esc_html__( 'Custom Notice', 'textdomain' ),
				'content' => esc_html__( 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'textdomain' ),
			]
		);

		$this->end_controls_section();

	}

}
```
